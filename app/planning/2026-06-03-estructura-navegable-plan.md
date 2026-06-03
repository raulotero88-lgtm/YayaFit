# Fase 1 — Navegación viva: Plan de implementación

> **Para quien ejecute:** SUB-SKILL RECOMENDADA: usar `superpowers:executing-plans` para
> ejecutar este plan tarea a tarea. Los pasos usan casillas (`- [ ]`) para seguimiento.

**Goal:** Que desde cualquier página de yayafit.es se pueda navegar a las 5 secciones
(Inicio · Rutinas · Bienestar · Música · Sobre YayaFit), incrustando una barra de
navegación de marca y creando las 2 páginas índice que faltan.

**Architecture:** Barra (y pie) como HTML+CSS en línea, autónomo, delimitado por
comentarios marcadores, que se incrusta al principio/final del `content` de cada página
y entrada vía la REST API de WordPress (rol Editor + Application Password). Un script
PowerShell reutiliza la barra maestra del repo, hace la inyección idempotente (quita la
versión vieja antes de poner la nueva) y marca la sección activa.

**Tech Stack:** WordPress REST API (`/wp-json/wp/v2/`), Basic Auth (Application Password),
PowerShell + `curl.exe`, HTML/CSS en línea. Sin plugins, sin tocar tema (rol Editor).

**Diseño de referencia:** [2026-06-03-estructura-navegable-design.md](2026-06-03-estructura-navegable-design.md)

---

## Estructura de ficheros (artefactos versionados en el repo)

| Fichero | Responsabilidad |
|---|---|
| `app/wordpress/barra-navegacion.html` | Copia maestra de la barra (fuente única de verdad) |
| `app/wordpress/pie-navegacion.html` | Copia maestra del pie con los mismos enlaces |
| `app/wordpress/scripts/inject-nav.ps1` | Inyecta barra+pie en una página/entrada (idempotente, marca activo) |
| `app/wordpress/paginas/rutinas-indice.html` | Contenido de la página índice Rutinas (sin barra/pie) |
| `app/wordpress/paginas/bienestar-indice.html` | Contenido de la página índice Bienestar (sin barra/pie) |

Las páginas/entradas **vivas** se editan en WordPress (no en git); los artefactos de
arriba quedan versionados como fuente de verdad y registro.

## Convenciones

- **Marcadores:** la barra va entre `<!-- YAYAFIT-NAV-START -->` y `<!-- YAYAFIT-NAV-END -->`;
  el pie entre `<!-- YAYAFIT-FOOTER-START -->` y `<!-- YAYAFIT-FOOTER-END -->`. Sirven para
  re-inyectar sin duplicar.
- **Sección activa:** cada enlace de la barra lleva `data-yaya="<clave>"`
  (`inicio|rutinas|bienestar|musica|sobre`). El script resalta el que coincide con `-Active`.
- **Gotcha UTF-8 (Windows):** nunca pasar JSON con acentos inline a `curl`. Escribir el
  payload a un archivo UTF-8 **sin BOM** y enviarlo con `curl.exe --data @archivo`.
- **Credencial:** el script lee usuario y Application Password de variables de entorno
  `WP_USER` y `WP_APP_PASS`. Nunca escribir la contraseña en ficheros del repo.

---

## Task 0: Preflight de credencial (¿el Application Password funciona?)

La memoria del proyecto avisa de que el Application Password pudo ser revocado (daba 401).
Confirmar antes de tocar nada.

**Files:** ninguno (solo lectura).

- [ ] **Step 1: Exportar credenciales en la sesión**

```powershell
$env:WP_USER = "raulotero88@gmail.com"
$env:WP_APP_PASS = "xxxx xxxx xxxx xxxx xxxx xxxx"   # Application Password vigente de Raúl
```

- [ ] **Step 2: Verificar identidad y rol**

```powershell
$b64 = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("$($env:WP_USER):$($env:WP_APP_PASS -replace ' ','')"))
Invoke-RestMethod -Uri "https://yayafit.es/wp-json/wp/v2/users/me?context=edit" -Headers @{ Authorization = "Basic $b64" } | Select-Object id,name,slug,roles
```

Expected: HTTP 200 con `roles = {editor}`. Si da **401**, el password está revocado →
Raúl genera uno nuevo en `wp-admin → Perfil → Application Passwords` y se repite el Step 1.

- [ ] **Step 3: Confirmar capacidad de edición de páginas**

```powershell
Invoke-RestMethod -Uri "https://yayafit.es/wp-json/wp/v2/pages/20?context=edit" -Headers @{ Authorization = "Basic $b64" } | Select-Object id,@{n='tiene_raw';e={[bool]$_.content.raw}}
```

Expected: `tiene_raw = True` (si Editor puede leer `content.raw`, también puede escribir).

---

## Task 1: Crear las copias maestras de la barra y el pie

**Files:**
- Create: `app/wordpress/barra-navegacion.html`
- Create: `app/wordpress/pie-navegacion.html`

- [ ] **Step 1: Escribir `app/wordpress/barra-navegacion.html`**

```html
<!-- YAYAFIT-NAV-START -->
<nav style="background:#FAFAF8;border-bottom:2px solid #F4A261;padding:12px 16px;font-family:inherit;line-height:1.2;">
  <div style="max-width:960px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;gap:6px 14px;">
    <a data-yaya="logo" href="https://yayafit.es/inicio/" style="font-size:22px;font-weight:800;color:#E8634A;text-decoration:none;margin-right:auto;">💪 YayaFit</a>
    <a data-yaya="inicio" href="https://yayafit.es/inicio/" style="display:inline-block;font-size:18px;font-weight:600;color:#3D3D3D;text-decoration:none;padding:10px 14px;border-radius:8px;">Inicio</a>
    <a data-yaya="rutinas" href="https://yayafit.es/rutinas/" style="display:inline-block;font-size:18px;font-weight:600;color:#3D3D3D;text-decoration:none;padding:10px 14px;border-radius:8px;">Rutinas</a>
    <a data-yaya="bienestar" href="https://yayafit.es/bienestar/" style="display:inline-block;font-size:18px;font-weight:600;color:#3D3D3D;text-decoration:none;padding:10px 14px;border-radius:8px;">Bienestar</a>
    <a data-yaya="musica" href="https://yayafit.es/musica/" style="display:inline-block;font-size:18px;font-weight:600;color:#3D3D3D;text-decoration:none;padding:10px 14px;border-radius:8px;">Música</a>
    <a data-yaya="sobre" href="https://yayafit.es/sobre-yayafit/" style="display:inline-block;font-size:18px;font-weight:600;color:#3D3D3D;text-decoration:none;padding:10px 14px;border-radius:8px;">Sobre YayaFit</a>
  </div>
</nav>
<!-- YAYAFIT-NAV-END -->
```

- [ ] **Step 2: Escribir `app/wordpress/pie-navegacion.html`**

```html
<!-- YAYAFIT-FOOTER-START -->
<div style="background:#FAFAF8;border-top:2px solid #F4A261;padding:22px 16px;margin-top:36px;font-family:inherit;text-align:center;">
  <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:8px 16px;max-width:960px;margin:0 auto;">
    <a href="https://yayafit.es/inicio/" style="font-size:16px;color:#3D3D3D;text-decoration:none;padding:6px 10px;">Inicio</a>
    <a href="https://yayafit.es/rutinas/" style="font-size:16px;color:#3D3D3D;text-decoration:none;padding:6px 10px;">Rutinas</a>
    <a href="https://yayafit.es/bienestar/" style="font-size:16px;color:#3D3D3D;text-decoration:none;padding:6px 10px;">Bienestar</a>
    <a href="https://yayafit.es/musica/" style="font-size:16px;color:#3D3D3D;text-decoration:none;padding:6px 10px;">Música</a>
    <a href="https://yayafit.es/sobre-yayafit/" style="font-size:16px;color:#3D3D3D;text-decoration:none;padding:6px 10px;">Sobre YayaFit</a>
  </div>
  <p style="margin:14px 0 0;color:#3D3D3D;font-size:14px;">💪 YayaFit — Tu segunda juventud empieza aquí</p>
</div>
<!-- YAYAFIT-FOOTER-END -->
```

- [ ] **Step 3: Commit**

```bash
git add app/wordpress/barra-navegacion.html app/wordpress/pie-navegacion.html
git commit -m "feat(nav): barra y pie de navegación maestros (marca YayaFit)"
```

---

## Task 2: Crear el script de inyección idempotente

**Files:**
- Create: `app/wordpress/scripts/inject-nav.ps1`

- [ ] **Step 1: Escribir `app/wordpress/scripts/inject-nav.ps1`**

```powershell
<#
  Inyecta la barra y el pie de YayaFit en una página o entrada vía REST API.
  Idempotente: quita la versión previa (entre marcadores) antes de poner la nueva.
  Uso:  .\inject-nav.ps1 -Id 20 -Type page -Active musica
  Requiere: $env:WP_USER y $env:WP_APP_PASS
#>
param(
  [Parameter(Mandatory)][int]$Id,
  [ValidateSet('page','post')][string]$Type = 'page',
  [ValidateSet('inicio','rutinas','bienestar','musica','sobre','')][string]$Active = ''
)
$ErrorActionPreference = 'Stop'
if (-not $env:WP_USER -or -not $env:WP_APP_PASS) { throw "Define \$env:WP_USER y \$env:WP_APP_PASS antes de ejecutar." }

$root   = Resolve-Path "$PSScriptRoot\.."          # app/wordpress
$b64    = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("$($env:WP_USER):$($env:WP_APP_PASS -replace ' ','')"))
$auth   = @{ Authorization = "Basic $b64" }
$apiBase = "https://yayafit.es/wp-json/wp/v2/$($Type)s/$Id"

$nav    = [IO.File]::ReadAllText("$root\barra-navegacion.html")
$footer = [IO.File]::ReadAllText("$root\pie-navegacion.html")

# Resaltar la sección activa (se añade al final del style del enlace que coincide)
if ($Active) {
  $nav = [regex]::Replace($nav, "(data-yaya=`"$Active`"[^>]*style=`"[^`"]*)", '$1;color:#E8634A;border-bottom:3px solid #E8634A;font-weight:800')
}

# Leer contenido actual en crudo
$cur = Invoke-RestMethod -Uri "$apiBase`?context=edit" -Headers $auth
$content = [string]$cur.content.raw

# Quitar barra/pie previos (idempotencia)
$content = [regex]::Replace($content, '(?s)<!-- YAYAFIT-NAV-START -->.*?<!-- YAYAFIT-NAV-END -->\s*', '')
$content = [regex]::Replace($content, '(?s)\s*<!-- YAYAFIT-FOOTER-START -->.*?<!-- YAYAFIT-FOOTER-END -->', '')

$new = "$nav`n" + $content.Trim() + "`n$footer"

# Payload a archivo UTF-8 SIN BOM y envío con curl.exe (gotcha UTF-8)
$payload = @{ content = $new } | ConvertTo-Json -Depth 6 -Compress
$tmp = "$root\.payload-$Id.json"
[IO.File]::WriteAllText($tmp, $payload, (New-Object Text.UTF8Encoding $false))
curl.exe -s -o $null -w "HTTP %{http_code}`n" -X POST $apiBase -H "Authorization: Basic $b64" -H "Content-Type: application/json; charset=utf-8" --data "@$tmp"
Remove-Item $tmp -Force
Write-Host "OK -> $Type $Id (activo: '$Active')"
```

- [ ] **Step 2: Verificar sintaxis del script (sin ejecutar la lógica)**

```powershell
powershell -NoProfile -Command "{ . { param(`$x) } ; [void][ScriptBlock]::Create((Get-Content -Raw app/wordpress/scripts/inject-nav.ps1)) }; 'sintaxis OK'"
```

Expected: imprime `sintaxis OK` sin errores de parseo.

- [ ] **Step 3: Commit**

```bash
git add app/wordpress/scripts/inject-nav.ps1
git commit -m "feat(nav): script idempotente de inyección de navegación vía REST"
```

---

## Task 3: Piloto en una sola página (Música, id 20) y verificación

Probar en UNA página antes de propagar (mitigación de riesgo del diseño).

**Files:** ninguno nuevo (escribe en WordPress, página 20).

- [ ] **Step 1: Inyectar barra+pie en Música**

```powershell
app/wordpress/scripts/inject-nav.ps1 -Id 20 -Type page -Active musica
```

Expected: `HTTP 200` y `OK -> page 20 (activo: 'musica')`.

- [ ] **Step 2: Verificar que renderiza en vivo (con cache-bust)**

```powershell
$h = (Invoke-WebRequest -Uri "https://yayafit.es/musica/?v=$(Get-Random)" -UseBasicParsing).Content
"NAV presente: " + ($h -match 'YAYAFIT-NAV-START')
"Enlaces de menú: " + ([regex]::Matches($h,'href="https://yayafit.es/(inicio|rutinas|bienestar|musica|sobre-yayafit)/"').Count)
"Audio intacto: " + ($h -match '<audio')
```

Expected: `NAV presente: True`, `Enlaces de menú: 5` o más, `Audio intacto: True`
(confirma que no se rompió el contenido existente de las 3 canciones).

- [ ] **Step 3: Checkpoint humano**

Raúl abre `https://yayafit.es/musica/` en el **móvil** y confirma: barra visible, botones
grandes, "Música" resaltada, y que las canciones siguen sonando. **No continuar** hasta el OK.

---

## Task 4: Crear la página índice "Rutinas"

**Files:**
- Create: `app/wordpress/paginas/rutinas-indice.html`

- [ ] **Step 1: Escribir `app/wordpress/paginas/rutinas-indice.html`** (contenido sin barra/pie; el script los añade después)

```html
<div style="max-width:960px;margin:24px auto;padding:0 16px;font-family:inherit;color:#3D3D3D;">
  <h1 style="font-size:32px;color:#E8634A;margin:0 0 8px;">Rutinas</h1>
  <p style="font-size:18px;line-height:1.6;margin:0 0 8px;">Ejercicios suaves y guiados, pensados para tu cuerpo y tu ritmo. Elige por dónde empezar:</p>
  <div style="display:flex;flex-wrap:wrap;gap:20px;margin-top:24px;">
    <div style="flex:1 1 260px;background:#fff;border:1px solid #F4A261;border-radius:14px;padding:20px;box-shadow:0 2px 6px rgba(0,0,0,0.05);">
      <h2 style="font-size:21px;margin:0 0 8px;">Rutina de equilibrio para empezar</h2>
      <p style="font-size:16px;line-height:1.5;margin:0 0 16px;">Quince minutos para entrenar el equilibrio y ganar confianza al caminar y subir escaleras. Solo necesitas una silla.</p>
      <a href="https://yayafit.es/rutina-equilibrio/" style="display:inline-block;background:#E8634A;color:#fff;font-size:17px;font-weight:600;text-decoration:none;padding:12px 20px;border-radius:8px;">Ver rutina →</a>
    </div>
    <div style="flex:1 1 260px;background:#fff;border:1px solid #F4A261;border-radius:14px;padding:20px;box-shadow:0 2px 6px rgba(0,0,0,0.05);">
      <h2 style="font-size:21px;margin:0 0 8px;">Fuerza suave con silla</h2>
      <p style="font-size:16px;line-height:1.5;margin:0 0 16px;">Veinte minutos de fuerza suave con el apoyo de una silla para cuidar piernas, brazos y centro del cuerpo, y mantener tu independencia.</p>
      <a href="https://yayafit.es/fuerza-suave-con-silla/" style="display:inline-block;background:#E8634A;color:#fff;font-size:17px;font-weight:600;text-decoration:none;padding:12px 20px;border-radius:8px;">Ver rutina →</a>
    </div>
    <div style="flex:1 1 260px;background:#fff;border:1px solid #F4A261;border-radius:14px;padding:20px;box-shadow:0 2px 6px rgba(0,0,0,0.05);">
      <h2 style="font-size:21px;margin:0 0 8px;">Movilidad de espalda por las mañanas</h2>
      <p style="font-size:16px;line-height:1.5;margin:0 0 16px;">Diez minutos para soltar la espalda al despertar, activar la columna y empezar el día sin rigidez. Sin material.</p>
      <a href="https://yayafit.es/movilidad-espalda-mananas/" style="display:inline-block;background:#E8634A;color:#fff;font-size:17px;font-weight:600;text-decoration:none;padding:12px 20px;border-radius:8px;">Ver rutina →</a>
    </div>
    <div style="flex:1 1 260px;background:#fff;border:1px solid #F4A261;border-radius:14px;padding:20px;box-shadow:0 2px 6px rgba(0,0,0,0.05);">
      <h2 style="font-size:21px;margin:0 0 8px;">Cardio suave: caminar con propósito</h2>
      <p style="font-size:16px;line-height:1.5;margin:0 0 16px;">Treinta minutos de caminata con propósito para cuidar el corazón, los pulmones y el ánimo, con una progresión semana a semana.</p>
      <a href="https://yayafit.es/cardio-caminar-con-proposito/" style="display:inline-block;background:#E8634A;color:#fff;font-size:17px;font-weight:600;text-decoration:none;padding:12px 20px;border-radius:8px;">Ver rutina →</a>
    </div>
    <div style="flex:1 1 260px;background:#fff;border:1px solid #F4A261;border-radius:14px;padding:20px;box-shadow:0 2px 6px rgba(0,0,0,0.05);">
      <h2 style="font-size:21px;margin:0 0 8px;">Yoga para la calma y el descanso</h2>
      <p style="font-size:16px;line-height:1.5;margin:0 0 16px;">Veinte minutos de yoga suave y respiración para soltar el cuerpo, calmar la mente y descansar mejor al final del día.</p>
      <a href="https://yayafit.es/yoga-para-la-calma/" style="display:inline-block;background:#E8634A;color:#fff;font-size:17px;font-weight:600;text-decoration:none;padding:12px 20px;border-radius:8px;">Ver rutina →</a>
    </div>
  </div>
</div>
```

- [ ] **Step 2: Crear la página en WordPress** (slug `rutinas`, publicada)

```powershell
$b64 = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("$($env:WP_USER):$($env:WP_APP_PASS -replace ' ','')"))
$body = @{ title = "Rutinas"; slug = "rutinas"; status = "publish"; content = [IO.File]::ReadAllText("$(Resolve-Path app/wordpress/paginas/rutinas-indice.html)") } | ConvertTo-Json -Depth 6 -Compress
[IO.File]::WriteAllText("$(Resolve-Path app/wordpress).Path\.new-rutinas.json", $body, (New-Object Text.UTF8Encoding $false))
curl.exe -s -w "`nHTTP %{http_code}`n" -X POST "https://yayafit.es/wp-json/wp/v2/pages" -H "Authorization: Basic $b64" -H "Content-Type: application/json; charset=utf-8" --data "@$(Resolve-Path app/wordpress).Path\.new-rutinas.json"
Remove-Item "$(Resolve-Path app/wordpress).Path\.new-rutinas.json" -Force
```

Expected: `HTTP 201` y un JSON con el `id` nuevo y `"slug":"rutinas"`. **Anotar el id** (p. ej. 41).

- [ ] **Step 3: Añadir barra+pie a la página recién creada** (sustituir `<ID_RUTINAS>` por el id anotado)

```powershell
app/wordpress/scripts/inject-nav.ps1 -Id <ID_RUTINAS> -Type page -Active rutinas
```

Expected: `HTTP 200`.

- [ ] **Step 4: Verificar en vivo**

```powershell
$h = (Invoke-WebRequest -Uri "https://yayafit.es/rutinas/?v=$(Get-Random)" -UseBasicParsing).Content
"NAV: " + ($h -match 'YAYAFIT-NAV-START') + " | Tarjetas: " + ([regex]::Matches($h,'Ver rutina').Count)
```

Expected: `NAV: True | Tarjetas: 5`.

- [ ] **Step 5: Commit**

```bash
git add app/wordpress/paginas/rutinas-indice.html
git commit -m "feat(nav): página índice Rutinas con 5 tarjetas a las entradas"
```

---

## Task 5: Crear la página índice "Bienestar"

**Files:**
- Create: `app/wordpress/paginas/bienestar-indice.html`

- [ ] **Step 1: Escribir `app/wordpress/paginas/bienestar-indice.html`**

```html
<div style="max-width:960px;margin:24px auto;padding:0 16px;font-family:inherit;color:#3D3D3D;">
  <h1 style="font-size:32px;color:#E8634A;margin:0 0 8px;">Bienestar</h1>
  <p style="font-size:18px;line-height:1.6;margin:0 0 8px;">Cuidarte va más allá del ejercicio. Sueño, alimentación y hábitos, sin agobios:</p>
  <div style="display:flex;flex-wrap:wrap;gap:20px;margin-top:24px;">
    <div style="flex:1 1 260px;background:#fff;border:1px solid #F4A261;border-radius:14px;padding:20px;box-shadow:0 2px 6px rgba(0,0,0,0.05);">
      <h2 style="font-size:21px;margin:0 0 8px;">Cómo dormir mejor después de los 60</h2>
      <p style="font-size:16px;line-height:1.5;margin:0 0 16px;">El sueño cambia con la edad, pero «diferente» no significa «peor». Con los hábitos adecuados, puedes descansar mejor que nunca.</p>
      <a href="https://yayafit.es/como-dormir-mejor-despues-de-los-60/" style="display:inline-block;background:#E8634A;color:#fff;font-size:17px;font-weight:600;text-decoration:none;padding:12px 20px;border-radius:8px;">Leer artículo →</a>
    </div>
    <div style="flex:1 1 260px;background:#fff;border:1px solid #F4A261;border-radius:14px;padding:20px;box-shadow:0 2px 6px rgba(0,0,0,0.05);">
      <h2 style="font-size:21px;margin:0 0 8px;">Nutrición sencilla: lo que de verdad importa</h2>
      <p style="font-size:16px;line-height:1.5;margin:0 0 16px;">Sin dietas, sin contar calorías y sin prohibiciones. La nutrición después de los 60 tiene tres principios, y son más simples de lo que crees.</p>
      <a href="https://yayafit.es/nutricion-sencilla/" style="display:inline-block;background:#E8634A;color:#fff;font-size:17px;font-weight:600;text-decoration:none;padding:12px 20px;border-radius:8px;">Leer artículo →</a>
    </div>
    <div style="flex:1 1 260px;background:#fff;border:1px solid #F4A261;border-radius:14px;padding:20px;box-shadow:0 2px 6px rgba(0,0,0,0.05);">
      <h2 style="font-size:21px;margin:0 0 8px;">El poder de la rutina diaria para tu autonomía</h2>
      <p style="font-size:16px;line-height:1.5;margin:0 0 16px;">La autonomía no se pierde de golpe: se erosiona poco a poco con pequeñas inactividades repetidas. Y se recupera de la misma forma.</p>
      <a href="https://yayafit.es/rutina-diaria-autonomia/" style="display:inline-block;background:#E8634A;color:#fff;font-size:17px;font-weight:600;text-decoration:none;padding:12px 20px;border-radius:8px;">Leer artículo →</a>
    </div>
  </div>
</div>
```

- [ ] **Step 2: Crear la página en WordPress** (slug `bienestar`, publicada)

```powershell
$b64 = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("$($env:WP_USER):$($env:WP_APP_PASS -replace ' ','')"))
$body = @{ title = "Bienestar"; slug = "bienestar"; status = "publish"; content = [IO.File]::ReadAllText("$(Resolve-Path app/wordpress/paginas/bienestar-indice.html)") } | ConvertTo-Json -Depth 6 -Compress
[IO.File]::WriteAllText("$(Resolve-Path app/wordpress).Path\.new-bienestar.json", $body, (New-Object Text.UTF8Encoding $false))
curl.exe -s -w "`nHTTP %{http_code}`n" -X POST "https://yayafit.es/wp-json/wp/v2/pages" -H "Authorization: Basic $b64" -H "Content-Type: application/json; charset=utf-8" --data "@$(Resolve-Path app/wordpress).Path\.new-bienestar.json"
Remove-Item "$(Resolve-Path app/wordpress).Path\.new-bienestar.json" -Force
```

Expected: `HTTP 201` con `"slug":"bienestar"`. **Anotar el id** (p. ej. 42).

- [ ] **Step 3: Añadir barra+pie** (sustituir `<ID_BIENESTAR>`)

```powershell
app/wordpress/scripts/inject-nav.ps1 -Id <ID_BIENESTAR> -Type page -Active bienestar
```

- [ ] **Step 4: Verificar en vivo**

```powershell
$h = (Invoke-WebRequest -Uri "https://yayafit.es/bienestar/?v=$(Get-Random)" -UseBasicParsing).Content
"NAV: " + ($h -match 'YAYAFIT-NAV-START') + " | Tarjetas: " + ([regex]::Matches($h,'Leer artículo').Count)
```

Expected: `NAV: True | Tarjetas: 3`.

- [ ] **Step 5: Commit**

```bash
git add app/wordpress/paginas/bienestar-indice.html
git commit -m "feat(nav): página índice Bienestar con 3 tarjetas a los artículos"
```

---

## Task 6: Propagar la barra al resto de páginas

Inyectar en Inicio (9), Sobre YayaFit (8) e Himno (14). (Música ya está hecha en Task 3;
las 2 índices en Tasks 4-5.)

**Files:** ninguno (escribe en WordPress).

- [ ] **Step 1: Inicio**

```powershell
app/wordpress/scripts/inject-nav.ps1 -Id 9 -Type page -Active inicio
```

- [ ] **Step 2: Sobre YayaFit**

```powershell
app/wordpress/scripts/inject-nav.ps1 -Id 8 -Type page -Active sobre
```

- [ ] **Step 3: Himno** (sin sección activa: no está en el menú)

```powershell
app/wordpress/scripts/inject-nav.ps1 -Id 14 -Type page -Active ''
```

- [ ] **Step 4: Verificar las 3**

```powershell
foreach ($u in "inicio","sobre-yayafit","himno") {
  $h = (Invoke-WebRequest -Uri "https://yayafit.es/$u/?v=$(Get-Random)" -UseBasicParsing).Content
  "$u -> NAV: " + ($h -match 'YAYAFIT-NAV-START')
}
```

Expected: las 3 imprimen `NAV: True`.

---

## Task 7: Propagar la barra a las 8 entradas (rutinas + bienestar)

Para que desde un ejercicio o artículo se pueda volver al menú.

**Files:** ninguno (escribe en WordPress).

- [ ] **Step 1: 5 rutinas (activo = rutinas)**

```powershell
foreach ($id in 32,33,34,35,36) { app/wordpress/scripts/inject-nav.ps1 -Id $id -Type post -Active rutinas }
```

- [ ] **Step 2: 3 artículos (activo = bienestar)**

```powershell
foreach ($id in 37,38,39) { app/wordpress/scripts/inject-nav.ps1 -Id $id -Type post -Active bienestar }
```

- [ ] **Step 3: Verificar una de cada**

```powershell
foreach ($u in "rutina-equilibrio","nutricion-sencilla") {
  $h = (Invoke-WebRequest -Uri "https://yayafit.es/$u/?v=$(Get-Random)" -UseBasicParsing).Content
  "$u -> NAV: " + ($h -match 'YAYAFIT-NAV-START')
}
```

Expected: ambas `NAV: True`.

---

## Task 8: Reorganización (fundir "Cómo funciona" y enlazar "Himno")

- [ ] **Step 1: Fundir "Cómo funciona" (10) dentro de "Sobre YayaFit" (8)**

```powershell
$b64 = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("$($env:WP_USER):$($env:WP_APP_PASS -replace ' ','')"))
$auth = @{ Authorization = "Basic $b64" }
$como  = (Invoke-RestMethod -Uri "https://yayafit.es/wp-json/wp/v2/pages/10?context=edit" -Headers $auth).content.raw
$sobre = (Invoke-RestMethod -Uri "https://yayafit.es/wp-json/wp/v2/pages/8?context=edit"  -Headers $auth).content.raw
# Quitar barra/pie de ambos para no duplicar
$strip = { param($c) $c = [regex]::Replace($c,'(?s)<!-- YAYAFIT-NAV-START -->.*?<!-- YAYAFIT-NAV-END -->\s*',''); [regex]::Replace($c,'(?s)\s*<!-- YAYAFIT-FOOTER-START -->.*?<!-- YAYAFIT-FOOTER-END -->','') }
$comoBody  = (& $strip $como).Trim()
$sobreBody = (& $strip $sobre).Trim()
$merged = "$sobreBody`n<hr>`n<h2 style=`"color:#E8634A;`">Cómo funciona</h2>`n$comoBody"
$payload = @{ content = $merged } | ConvertTo-Json -Depth 6 -Compress
[IO.File]::WriteAllText("$(Resolve-Path app/wordpress).Path\.merge-sobre.json", $payload, (New-Object Text.UTF8Encoding $false))
curl.exe -s -w "`nHTTP %{http_code}`n" -X POST "https://yayafit.es/wp-json/wp/v2/pages/8" -H "Authorization: Basic $b64" -H "Content-Type: application/json; charset=utf-8" --data "@$(Resolve-Path app/wordpress).Path\.merge-sobre.json"
Remove-Item "$(Resolve-Path app/wordpress).Path\.merge-sobre.json" -Force
```

Expected: `HTTP 200`. Luego re-inyectar la barra en Sobre para dejar el orden barra→contenido→pie:

```powershell
app/wordpress/scripts/inject-nav.ps1 -Id 8 -Type page -Active sobre
```

- [ ] **Step 2: Pasar "Cómo funciona" (10) a borrador** (evita contenido duplicado; reversible)

```powershell
$b64 = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("$($env:WP_USER):$($env:WP_APP_PASS -replace ' ','')"))
Invoke-RestMethod -Method Post -Uri "https://yayafit.es/wp-json/wp/v2/pages/10" -Headers @{ Authorization = "Basic $b64" } -Body (@{status='draft'}|ConvertTo-Json) -ContentType "application/json" | Select-Object id,status
```

Expected: `status = draft`.

- [ ] **Step 3: Añadir enlace a "Himno" dentro de "Música" (20)**

```powershell
$b64 = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("$($env:WP_USER):$($env:WP_APP_PASS -replace ' ','')"))
$auth = @{ Authorization = "Basic $b64" }
$mus = (Invoke-RestMethod -Uri "https://yayafit.es/wp-json/wp/v2/pages/20?context=edit" -Headers $auth).content.raw
$link = '<p style="text-align:center;margin:24px 0;"><a href="https://yayafit.es/himno/" style="display:inline-block;background:#6BAB7A;color:#fff;font-size:17px;font-weight:600;text-decoration:none;padding:12px 22px;border-radius:8px;">🎵 Escuchar el Himno oficial de YayaFit →</a></p>'
if ($mus -notmatch [regex]::Escape('yayafit.es/himno/')) {
  # Insertar el enlace justo antes del pie
  $mus = [regex]::Replace($mus, '(?s)(\s*<!-- YAYAFIT-FOOTER-START -->)', "`n$link`$1")
  $payload = @{ content = $mus } | ConvertTo-Json -Depth 6 -Compress
  [IO.File]::WriteAllText("$(Resolve-Path app/wordpress).Path\.musica-himno.json", $payload, (New-Object Text.UTF8Encoding $false))
  curl.exe -s -w "`nHTTP %{http_code}`n" -X POST "https://yayafit.es/wp-json/wp/v2/pages/20" -H "Authorization: Basic $b64" -H "Content-Type: application/json; charset=utf-8" --data "@$(Resolve-Path app/wordpress).Path\.musica-himno.json"
  Remove-Item "$(Resolve-Path app/wordpress).Path\.musica-himno.json" -Force
} else { "El enlace al Himno ya existe en Música." }
```

Expected: `HTTP 200` (o el mensaje de que ya existe).

- [ ] **Step 4: Verificar la reorganización**

```powershell
$sobre = (Invoke-WebRequest -Uri "https://yayafit.es/sobre-yayafit/?v=$(Get-Random)" -UseBasicParsing).Content
"Sobre incluye 'Cómo funciona': " + ($sobre -match 'Cómo funciona')
$como = Invoke-WebRequest -Uri "https://yayafit.es/como-funciona/" -UseBasicParsing -SkipHttpErrorCheck
"Cómo funciona oculta (esperado 404): " + $como.StatusCode
$mus = (Invoke-WebRequest -Uri "https://yayafit.es/musica/?v=$(Get-Random)" -UseBasicParsing).Content
"Música enlaza al Himno: " + ($mus -match 'yayafit.es/himno/')
```

Expected: `Sobre incluye 'Cómo funciona': True`, `Cómo funciona oculta (esperado 404): 404`,
`Música enlaza al Himno: True`.

---

## Task 9: Verificación final + actualizar el documento maestro

- [ ] **Step 1: Barrido completo de navegación**

```powershell
$urls = "inicio","rutinas","bienestar","musica","sobre-yayafit","himno","rutina-equilibrio","nutricion-sencilla"
foreach ($u in $urls) {
  $h = (Invoke-WebRequest -Uri "https://yayafit.es/$u/?v=$(Get-Random)" -UseBasicParsing).Content
  $n = ([regex]::Matches($h,'href="https://yayafit.es/(inicio|rutinas|bienestar|musica|sobre-yayafit)/"').Count)
  "{0,-32} NAV:{1}  enlaces-menu:{2}" -f $u, ($h -match 'YAYAFIT-NAV-START'), $n
}
```

Expected: las 8 URLs con `NAV:True` y `enlaces-menu` ≥ 5 (barra + pie suman ~10).

- [ ] **Step 2: Checkpoint humano en móvil**

Raúl recorre en el teléfono: Inicio → Rutinas → (una rutina) → vuelve por la barra →
Bienestar → Música → Sobre. Confirma que nunca queda atrapado y que todo se lee bien.

- [ ] **Step 3: Actualizar el tracker en `app/wordpress/desarrollo-wordpress.md`**

Marcar "Configurar menú de navegación" como hecho, anotar los ids de las nuevas páginas
Rutinas/Bienestar en la tabla de estado, y registrar una entrada en el historial de sesiones
con fecha 2026-06-03.

- [ ] **Step 4: Commit**

```bash
git add app/wordpress/desarrollo-wordpress.md
git commit -m "docs(app): registra navegación viva (Fase 1) — menú, índices y reorganización"
```

---

## Self-Review (cobertura del diseño)

- ✅ Barra de navegación de marca, accesible, en todas las páginas → Tasks 1,3,6,7
- ✅ Páginas índice Rutinas y Bienestar con tarjetas a las entradas existentes → Tasks 4,5
- ✅ Música conserva su contenido + enlaza Himno → Tasks 3,8
- ✅ "Cómo funciona" fundido en "Sobre YayaFit" → Task 8
- ✅ Vía REST API con rol Editor + gotcha UTF-8 → script Task 2 y todos los POST
- ✅ Estilos en línea (no `<style>`) + piloto antes de propagar → Tasks 1,3
- ✅ Verificación en vivo (escritorio + móvil) → Tasks 3,9
- ✅ Fuente única de verdad versionada en el repo → Tasks 1,2,4,5

**Fuera de alcance (Fases 2-4):** rediseño del hub de Inicio, imágenes de portada en
tarjetas, y toda la Comunidad (requiere Admin). No se tocan aquí.
```

