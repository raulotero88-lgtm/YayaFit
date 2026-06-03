# YayaFit — Desarrollo WordPress

> **Documento único y vivo del desarrollo de la web/app en WordPress.**
> Es la fuente de verdad para las 3 personas del equipo. Cada vez que avances:
> 1. Anota lo que vas a tocar en **Bloqueantes / Sesiones** antes de empezar.
> 2. Marca la casilla de la tarea en el **Tracker** al terminar.
> 3. Si cambias algo importante de rumbo, apúntalo en **Decisiones**.
>
> Última actualización: **2026-06-03** (Fase 1 navegación viva: barra de marca incrustada en todas las páginas/entradas + páginas índice Rutinas y Bienestar + reorganización, todo vía REST API)

---

## 1. Qué es esto

YayaFit es una app de fitness y comunidad para mujeres de 60-75 años. Construimos
un **prototipo funcional** sobre WordPress en el dominio **https://yayafit.es**.
El contexto de negocio (plan, pitch, marca) vive en `../DOCUMENTACION/` y `../DISEÑO YAYAFIT/`.
**Este documento solo cubre el desarrollo técnico en WordPress.**

El corazón del producto es la **comunidad** ("no vendemos gimnasio, vendemos
compañía con excusa de deporte"). Todo lo que construyamos debe servir a eso.

---

## 2. Estado actual del sitio (real, 2026-06-03)

| Elemento | Estado | Notas |
|---|---|---|
| Hosting | ✅ Hostinger activo | SSL + LiteSpeed cache funcionando |
| Dominio | ✅ yayafit.es en producción | — |
| Tema activo | `hostinger-ai-theme` | Generado por el asistente IA de Hostinger (ver Decisión D1) |
| Plugins clave | ❌ Pendientes | No hay BuddyPress / Elementor / formularios aún |
| Páginas publicadas | **6** | Inicio (9), Sobre YayaFit (8), Himno (14), Música (20), **Rutinas (51) ← nueva**, **Bienestar (52) ← nueva**. Cómo funciona (10) → **borrador** (fundida en Sobre YayaFit) |
| Entradas publicadas | **9** | "Hello world" demo (id 1, sin borrar por decisión de Raúl) + **5 rutinas (id 32-36)** + **3 artículos de bienestar (id 37-39)**, publicadas 2026-06-03 |
| Categorías | **10** | **Rutinas** (id 3) → Equilibrio 5, Fuerza 6, Movilidad 7, Cardio 8, Yoga 9 · **Bienestar** (id 4) → Descanso 10, Nutrición 14, Hábitos 15 · "Uncategorized" (id 1) |
| Etiquetas | **5** | Principiante 11, Con silla 12, Exterior 13, Mañana 16, Relajación 17 |
| Medios | 11 ficheros (ver detalle abajo) | Quedan: png ajena (id 7) por borrar + 2 MP3 duplicados huérfanos (id 22, id 24) por borrar |
| Conexión Claude (MCP) | ✅ **Conectada** | `yayafit` re-registrado; lectura/escritura por REST API + abilities de lectura por MCP. Ver sección 6 |

**Medios actuales (Biblioteca, leídos en vivo 2026-06-03):**

| id | Fichero | Tipo | Usado por |
|---|---|---|---|
| 7 | `rag-n8n-arquitectura-workflows.png` | imagen | ❌ ajena — **borrar** |
| 12 | `segunda-juventud-yayafit.mp3` | audio | Página Himno (`/himno/`) |
| 13 | `portada-segunda-juventud-yayafit-scaled.jpg` | imagen | Página Himno (`/himno/`) |
| 16 | `corazon-poderoso.mp3` | audio | Página Música (`/musica/`) |
| 17 | `portada-corazon-poderoso.jpg` | imagen | Página Música (`/musica/`) |
| 18 | `segunda-juventud.mp3` | audio | Página Música (`/musica/`) |
| 19 | `portada-segunda-juventud-scaled.jpg` | imagen | Página Música (`/musica/`) |
| 22 | `corazon-poderoso-1.mp3` | audio | ❌ duplicado huérfano — **borrar** |
| 24 | `segunda-juventud-1.mp3` | audio | ❌ duplicado huérfano — **borrar** |
| 27 | `portada-libre.jpg` | imagen | Página Música (`/musica/`) ← nueva |
| 28 | `libre-yayafit.mp3` | audio | Página Música (`/musica/`) ← nueva |

**Contenido ya escrito en local** (en `../APP YAYAFIT (PROYECTO)/contenido/`):
- 3 páginas: ✅ publicadas (Inicio, Sobre YayaFit, Cómo funciona)
- 5 rutinas: ✅ **publicadas 2026-06-03** (equilibrio id 32, fuerza-silla id 33, movilidad-espalda id 34, cardio-caminar id 35, yoga-calma id 36) — falta imagen destacada (2ª pasada)
- 3 artículos de bienestar: ✅ **publicados 2026-06-03** (dormir-mejor id 37, nutricion-sencilla id 38, rutina-diaria id 39) — falta imagen destacada (2ª pasada)
- Himno "Segunda Juventud": ✅ publicado en `/himno/` (portada + reproductor + letra)

**Página Música (`/musica/`, id 20) — 3 canciones (orden: más nuevas arriba):**
- 🎵 **Libre** — portada (id 27) + reproductor MP3 (id 28). Publicada 2026-06-03 por Claude vía REST API.
- 🎵 **Corazón Poderoso** — portada + reproductor MP3.
- 🎵 **Segunda Juventud (Canción Oficial YayaFit)** — portada + reproductor MP3 (versión distinta a la de `/himno/`: usa los medios id 18/19, no id 12/13).

> **Convención de orden:** las canciones se listan de **más reciente (arriba) a más antigua (abajo)**. Al añadir una nueva, va en primera posición.

**Inventario de canciones (son TRES distintas):**

| Canción | Origen | En local (repo) | En la web |
|---|---|---|---|
| **Segunda Juventud** (himno oficial) | Proyecto | ✅ `CANCIONES YAYAFIT/` (flac/mp3/wav + portada) | ✅ `/himno/` y `/musica/` |
| **Libre** (antes "Ritmo Tranquilo") | Proyecto | ✅ `CANCIONES YAYAFIT/` (aup3/mp3 + portada) | ✅ `/musica/` (medios id 27/28) |
| **Corazón Poderoso** | Creada en **otro ordenador** por Raúl, subida directa a la web | ❌ **no está en este repo** (solo medios id 16/17 en WordPress) | ✅ `/musica/` |

---

## 3. Accesos y cuentas

> ⚠️ Nunca escribir contraseñas aquí. Usar un gestor compartido (p. ej. Bitwarden).

| Recurso | Dato | Quién / Rol |
|---|---|---|
| WordPress admin | https://yayafit.es/wp-admin | — |
| Panel Hostinger | https://hpanel.hostinger.com | Raúl |
| Cuenta Raúl | `raulotero88@gmail.com` | **Editor** (contenido sí; plugins/ajustes/usuarios no) |
| Cuenta Administrador | `mkhzipgd@gmail.com` | Creada por Hostinger — **recuperar acceso** (desbloqueante) |
| Compañero 2 | — | (crear cuenta, rol Editor) |
| Compañero 3 | — | (crear cuenta, rol Editor) |

**Acción prioritaria:** conseguir el acceso de Administrador o asignar rol
Administrador a Raúl. Sin admin no se pueden instalar plugins ni gestionar usuarios.

---

## 4. Modelo mental de WordPress (para los que empezáis)

WordPress tiene **3 capas** que no hay que confundir:

- **Tema** → el aspecto visual (colores, tipografía, estructura). Base de todo.
- **Plugins** → funciones que añades (comunidad, formularios, editor visual). Se instalan una vez.
- **Contenido** → lo que escribes cada día (páginas y entradas).

Dos distinciones que confunden a todos al principio:
- **Página vs Entrada.** *Página* = contenido fijo (Inicio, Sobre YayaFit). *Entrada (post)* = contenido fechado y por categorías (las rutinas y artículos van como **entradas**).
- **Personalizador vs editor de página.** El *Personalizador* cambia el aspecto **global** (marca). El editor de página diseña **una sola página**.

Dos lugares: el **Escritorio** (`/wp-admin`, gestión) y el **Frontend** (`yayafit.es`, lo que ve el público).

---

## 5. Cómo trabajamos los 3 (sin pisarnos)

WordPress NO tiene ramas como Git: todos editáis la misma base de datos en vivo.
Para no colisionar, dividimos por **capas verticales**:

| Rol | Responsable de | Riesgo de choque |
|---|---|---|
| **A — Plataforma y Comunidad** | Plugins, ajustes, registro, BuddyPress, grupos, menús | Alto → **va primero y a solas** |
| **B — Contenido** | Publicar páginas/entradas, categorías, imágenes, extractos | Bajo → en paralelo |
| **C — Diseño y Marca** | Colores, tipografía, logo, página de Inicio, accesibilidad | Medio → no a la vez que A |

**Reparto actual:** A = Raúl · B = — · C = —  *(rellenar)*

**Reglas de oro:**
1. Un solo **Administrador**; el resto **Editor**.
2. Nadie toca ajustes globales (tema, plugins, Personalizador) sin avisar.
3. Nunca dos personas en el Personalizador o en la misma página a la vez (el último que guarda gana).
4. Antes de tocar algo, anótalo en **Sesiones**. Al terminar, marca el **Tracker**.
5. Contraseñas solo en el gestor compartido, nunca en chats ni en este archivo.

---

## 6. Conexión con Claude (MCP) — cómo opera Claude el sitio

> ✅ **Estado 2026-06-03: MCP `yayafit` re-conectado en el PC de oficina** (Application
> Password propia "Claude MCP - PC oficina", guardado en la config local del proyecto en
> `.claude.json`). Verificado: `claude mcp list` → `✓ Connected`. Recordar que las
> herramientas `mcp__yayafit__*` solo cargan **tras reiniciar Claude Code**.
>
> ⚠️ **Límite confirmado al probarlo (2026-06-03):** el adaptador MCP **deja DESCUBRIR**
> las ~60 abilities pero **DENIEGA EJECUTARLAS** (`execute-ability` → "Access denied") con la
> cuenta Editor de Raúl; exige rol **Administrador**. Mientras tanto, el trabajo de contenido
> se hace por la **REST API estándar** con la misma Application Password (Basic Auth), donde el
> rol Editor sí tiene capacidades: `publish_posts`, `publish_pages`, `edit_pages`, `upload_files`,
> `delete_pages/posts`… Es la vía con la que ya se publicaron las 4 páginas. Recuperar el acceso
> Administrador desbloquearía además las abilities MCP (ajustes, plugins, temas, caché).
> Para solo **leer** el sitio basta la REST API pública (sin contraseña):
> `https://yayafit.es/wp-json/wp/v2/pages|posts|categories|media`.
>
> 🐞 **Gotcha resuelto (2026-06-03):** `claude mcp add` guardó el servidor bajo la clave de
> proyecto con la unidad en mayúscula (`C:/…`), pero la extensión de VSCode abre el proyecto
> con minúscula (`c:/…`), así que la sesión no lo cargaba. Solución: dejar el bloque
> `mcpServers.yayafit` en **ambas** claves de `~/.claude.json`. Tras eso, **reiniciar** para que cargue.

Claude está conectado al WordPress vía el **adaptador MCP nativo** del sitio
(lo aporta el plugin de IA de Hostinger). Esto permite que Claude cree y edite
contenido directamente, sin copiar-pegar.

| Dato | Valor |
|---|---|
| Nombre del servidor en Claude Code | `yayafit` |
| Endpoint | `https://yayafit.es/wp-json/mcp/mcp-adapter-default-server` |
| Transporte | HTTP |
| Autenticación | Application Password (Basic Auth) de la cuenta de Raúl |
| Capacidades | 50 "abilities": CRUD de posts, páginas, categorías, tags, usuarios, media, ajustes, caché |

**Comando de registro** (referencia, ya hecho):
```powershell
$u = "raulotero88@gmail.com"
$p = "xxxx xxxx xxxx xxxx xxxx xxxx"   # Application Password de wp-admin → Perfil
$b64 = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("$u`:$($p -replace ' ','')"))
claude mcp add --transport http yayafit https://yayafit.es/wp-json/mcp/mcp-adapter-default-server --header "Authorization: Basic $b64"
```

**Notas / límites:**
- Las herramientas `mcp__yayafit__*` se cargan al **reiniciar** Claude Code.
- Subir imágenes no está entre las abilities → Claude las sube por la REST API estándar (`/wp-json/wp/v2/media`).
- Operaciones de admin (ajustes globales, crear usuarios, plugins) fallarán mientras la cuenta sea solo Editor.

---

## 7. Roadmap por fases

**FASE 0 — Hecho ✅**
- Contenido escrito en local (8 piezas + 3 páginas).
- Hosting Hostinger contratado y dominio en producción.
- Claude conectado por MCP.

**FASE 1 — Cimientos (Persona A, sola). Desbloquea a los demás.**
- Recuperar acceso Administrador.
- Limpiar la demo de Hostinger (entrada y páginas de prueba).
- Decidir e instalar plugins (comunidad, formularios, editor visual).
- Ajustes base: idioma ES, título "YayaFit", registro abierto, rol por defecto Suscriptor.
- Crear categorías: Rutinas (+ subcategorías) y Bienestar.
- Crear cuentas Editor para los compañeros.

**FASE 2 — En paralelo (los 3).**
- B: publicar 3 páginas + 5 rutinas + 3 artículos (Claude puede hacerlo por MCP).
- C: aplicar marca (colores, fuente grande accesible, logo) + diseñar Inicio.
- A: comunidad (perfiles, grupo "Comunidad YayaFit Clase", directorio de miembros, muro) + menú.

**FASE 3 — Integración y pruebas.**
- Menú de navegación uniendo todo.
- Probar flujo completo en incógnito: registro → perfil → contenido → comentar → grupo.
- Probar en móvil y revisar accesibilidad (letra grande, contraste, botones grandes).

**FASE 4 — Lanzamiento a clase.**
- Invitar a compañeros, recoger feedback, iterar.

---

## 8. Tracker de tareas

> Marca `[x]` al completar y añade fecha + quién.

**Fase 0**
- [x] Contenido local escrito — 2026-05-29 (Raúl+Claude)
- [x] Hosting + dominio en producción — Raúl
- [x] Conexión MCP de Claude — 2026-06-02 (Raúl+Claude)

**Fase 1 — Cimientos**
- [ ] Recuperar/asignar acceso Administrador
- [ ] Limpiar demo de Hostinger (Hello world + páginas demo)
- [ ] Definir e instalar plugins (comunidad / formularios / editor)
- [ ] Ajustes base (idioma, título, registro abierto, rol por defecto)
- [x] Crear categorías Rutinas (+ subcategorías) y Bienestar — 2026-06-03 (Claude, vía REST API)
- [ ] Crear cuentas Editor para compañeros 2 y 3

**Fase 2 — Contenido, diseño y comunidad**
- [x] Publicar página Inicio — 2026-06-02 (placeholder, se rediseñará en Fase 2) · https://yayafit.es/inicio/
- [x] Publicar página Sobre YayaFit — 2026-06-02 (Claude, vía REST API) · https://yayafit.es/sobre-yayafit/
- [x] Publicar página Cómo funciona — 2026-06-02 · https://yayafit.es/como-funciona/
- [x] Publicar página Himno de YayaFit (portada + reproductor MP3 + letra) — 2026-06-02 · https://yayafit.es/himno/
- [x] Publicar página Música (2 canciones: Corazón Poderoso + Segunda Juventud) — 2026-06-02 (Raúl, directo en la web) · https://yayafit.es/musica/
- [x] Añadir canción **Libre** a la página Música (portada + reproductor MP3) — 2026-06-03 (Claude, vía REST API) · https://yayafit.es/musica/
- [x] Publicar 5 rutinas (con categoría, subcategoría, etiquetas y extracto) — 2026-06-03 (Claude, vía REST API) · falta imagen destacada
- [x] Publicar 3 artículos de bienestar (con categoría, subcategoría y extracto) — 2026-06-03 (Claude, vía REST API) · falta imagen destacada
- [ ] Aplicar paleta y tipografía de marca
- [ ] Subir logo y favicon
- [ ] Diseñar página de Inicio (hero + pilares + CTA)
- [ ] Activar comunidad (perfiles, grupo, miembros, muro)
- [x] Configurar menú de navegación — 2026-06-03 (Claude+Raúl, vía REST API): barra de marca incrustada en las 6 páginas + 8 entradas, páginas índice Rutinas (51) y Bienestar (52), y reorganización (Cómo funciona fundida en Sobre; Himno enlazado desde Música)

**Fase 3 — Pruebas**
- [ ] Flujo completo de usuario en incógnito
- [ ] Prueba en móvil
- [ ] Revisión de accesibilidad

**Fase 4 — Lanzamiento**
- [ ] Invitar a compañeros de clase

---

## 9. Decisiones (registro)

| ID | Fecha | Decisión | Motivo |
|---|---|---|---|
| D1 | 2026-06-02 | Mantener el tema `hostinger-ai-theme` en vez de cambiar a Astra | Decisión del equipo; la comunidad se añadirá luego con un plugin sobre este tema |
| D2 | 2026-06-02 | Conectar Claude por el MCP nativo del sitio (no por WordPress.com) | yayafit.es es WordPress auto-hospedado; el MCP de WordPress.com no aplica |
| D3 | 2026-06-02 | Llevar el desarrollo WordPress en este archivo independiente | Separar lo técnico de la documentación de negocio |
| D4 | 2026-06-03 | **Vía de escritura oficial = REST API estándar con Application Password** (Basic Auth), no las abilities MCP | Confirmado en vivo: aun con el permiso `mcp__yayafit__mcp-adapter-execute-ability` añadido en Claude Code, el adaptador MCP responde "Access denied" al *ejecutar* (exige rol Administrador). La REST API sí funciona con rol Editor (`publish_posts`, `manage_categories`, etc.). Las abilities MCP quedan solo para **lectura** (`discover-abilities`, `get-ability-info`) hasta tener Admin |
| D5 | 2026-06-03 | **Descartar el conector oficial de WordPress.com** (`public-api.wordpress.com/wpcom/v2/mcp/v1`) | yayafit.es es self-hosted en Hostinger; ese conector exige vincular el sitio vía Jetpack a una cuenta WordPress.com, lo que a su vez requiere Administrador. No resuelve nada que la REST API no resuelva ya. Refuerza D2 |

---

## 10. Bloqueantes / Notas

| Fecha | Tema | Estado |
|---|---|---|
| 2026-06-02 | Falta acceso Administrador (cuenta `mkhzipgd@gmail.com`) | Abierto — bloquea instalar plugins y gestionar usuarios |
| 2026-06-03 | ~~Nombre canción 2: "Corazón Poderoso" vs "Libre"~~ | ✅ **Cerrado 2026-06-03** — son canciones DISTINTAS. "Corazón Poderoso" se creó en otro ordenador y se subió directa a la web (no está en este repo). "Libre" es otra canción local, aún sin publicar. |
| 2026-06-03 | Conexión MCP `yayafit` | ✅ **Conectada** (lectura). La **escritura** por MCP exige Administrador (ver D4); mientras tanto se escribe por REST API |
| 2026-06-03 | Escritura por abilities MCP bloqueada (rol Editor) | Abierto — se resolverá al obtener Administrador; no bloquea el contenido (se usa REST API) |
| 2026-06-03 | 2 MP3 duplicados huérfanos en Medios (id 22, id 24) + png ajena (id 7) | Abierto — Raúl decidió **no borrar** por ahora (2026-06-03) |
| 2026-06-03 | Application Password "Claude REST API" en uso (compartida en chat) | Abierto — **rotar/revocar** desde wp-admin → Perfil cuando termine el trabajo de contenido |

---

## 11. Historial de sesiones

### 2026-06-03 (noche, +tarde) — Raúl + Claude (Fase 1: navegación viva)
- **Diagnóstico:** el `hostinger-ai-theme` no comparte un menú entre páginas (su cabecera nativa tiene un hamburguesa vacío), por eso desde `/musica/` no se podía navegar. Brainstorming + diseño + plan en `app/planning/2026-06-03-estructura-navegable-{design,plan}.md`.
- **Barra y pie de navegación de marca** (HTML+CSS en línea, autónomo, entre marcadores `YAYAFIT-NAV-START/END`) versionados en `app/wordpress/barra-navegacion.html` y `pie-navegacion.html` (fuente única de verdad). Colores de marca; activo en pastilla coral `#F4B3A1`; logo centrado arriba y botones centrados (ajustado tras revisión en móvil de Raúl).
- **Script idempotente** `app/wordpress/scripts/inject-nav.ps1`: lee la barra/pie maestros, quita la versión previa y reinyecta vía REST API (rol Editor); marca la sección activa. Credencial por `$env:WP_USER`/`$env:WP_APP_PASS`.
- **Páginas índice nuevas:** Rutinas (id **51**, `/rutinas/`, 5 tarjetas) y Bienestar (id **52**, `/bienestar/`, 3 tarjetas), enlazando a las entradas 32-36 y 37-39.
- **Barra propagada** a las 6 páginas (8,9,14,20,51,52) y las 8 entradas (32-39).
- **Reorganización:** "Cómo funciona" (10) fundida en "Sobre YayaFit" (8) y pasada a **borrador** (404 público); "Himno" enlazado desde "Música" con botón verde.
- **Menú definitivo:** Inicio · Rutinas · Bienestar · Música · Sobre YayaFit.
- **Verificado en vivo:** las 8 URLs sirven la barra; Sobre incluye Cómo funciona; Cómo funciona da 404; Música enlaza al Himno.
- **Pendiente (otras fases):** pie del tema muestra placeholders `trans-menu`/`trans-contacts` (requiere Customizer = Admin); rediseño del hub de Inicio (Fase 2); imágenes en tarjetas (Fase 3). **Revocar** el Application Password "Claude navegacion" al cerrar.

### 2026-06-03 (noche) — Raúl + Claude (taxonomía + 8 entradas de contenido)
- **Revisión completa** de la documentación y del contenido local: las 5 rutinas y los 3 artículos están bien escritos y coherentes; listos para publicar tal cual.
- **Diagnóstico de la vía de escritura (cerrado, ver D4):** se añadió el permiso `mcp__yayafit__mcp-adapter-execute-ability` a `.claude/settings.local.json` y se reinició Claude Code, pero el adaptador MCP **sigue devolviendo "Access denied" al ejecutar** → confirma que las abilities MCP exigen **Administrador**. La escritura se hizo por la **REST API estándar** con una Application Password nueva ("Claude REST API") creada en el perfil de Raúl (rol Editor). Preflight con credenciales falsas → HTTP 401 (camino abierto), luego 201 en todas las creaciones.
- **Taxonomía creada:** categorías **Rutinas** (3) → Equilibrio 5, Fuerza 6, Movilidad 7, Cardio 8, Yoga 9; **Bienestar** (4) → Descanso 10, Nutrición 14, Hábitos 15. Etiquetas: Principiante 11, Con silla 12, Exterior 13, Mañana 16, Relajación 17.
- **8 entradas publicadas** (HTML semántico limpio, con ficha de nivel/duración/material en las rutinas, categoría + subcategoría + etiquetas + extracto): rutinas id **32-36**, artículos id **37-39**. Verificado en vivo (HTTP 201 + acentos correctos).
- 🐞 **Gotcha UTF-8 (importante para futuras sesiones):** el shell de Windows **corrompe los acentos** si el JSON va inline en `curl --data '...'` (WordPress responde `rest_invalid_json` / "Malformed UTF-8"). **Solución:** escribir el payload JSON a un archivo con la herramienta Write (UTF-8) y enviarlo con `curl --data @archivo.json`. Así se publicó todo sin problemas.
- **Decisión de Raúl:** publicar **sin imagen destacada** ahora; las imágenes van en una 2ª pasada (subir media nueva requiere REST API, no es ability MCP). Y **no borrar** de momento la demo "Hello world" (id 1) ni los medios huérfanos (id 7, 22, 24).
- **Conector WordPress.com** propuesto por Raúl → descartado (ver D5).
- **Pendiente:** imágenes destacadas de las 8 entradas; recuperar acceso Administrador (sigue bloqueando Fase 1: plugins/comunidad/usuarios); **rotar la Application Password** cuando termine el trabajo de contenido.

### 2026-06-03 (tarde) — Raúl + Claude (publicación de "Libre")
- Subidos a Medios vía REST API los 2 ficheros de **Libre** desde `CANCIONES YAYAFIT/`: portada `portada-libre.jpg` (id 27, 230 KB) y `libre-yayafit.mp3` (id 28, 3.0 MB, MP3 con portada ya incrustada).
- Añadido el bloque de **Libre** a la página Música (id 20) replicando exactamente el patrón HTML existente (portada + `<audio>`), sin tocar las otras 2 canciones. La página tiene ahora 3 temas.
- Fijados título y `alt_text` de los nuevos medios.
- Verificado en vivo: REST API y frontend HTML sirven el MP3 y la portada de Libre (HTTP 200, tamaños correctos).
- **Reordenadas las canciones** a criterio de Raúl: más nuevas arriba → **Libre · Corazón Poderoso · Segunda Juventud**. Convención fijada para futuras altas.
- **Nota MCP:** la lectura por MCP (`discover-abilities`) funciona, pero `execute-ability` está bloqueada por la config de permisos local de Claude Code, así que la creación/edición se hizo por REST API (misma Basic Auth). El flush de caché LiteSpeed quedó sin hacer por el mismo motivo; LiteSpeed purgó `/musica/` solo al editarla.
- **Pendiente sin cambios:** borrar duplicados id 22/24 y png id 7; re-confirmar permisos MCP si se quiere editar por abilities.

### 2026-06-03 — Raúl + Claude (sincronización local ↔ web)
- Leído el sitio en vivo vía REST API pública (sin MCP, que está desconectado).
- **Detectado contenido nuevo subido por Raúl directamente en la web:** página **Música** (`/musica/`, id 20) con 2 canciones (Corazón Poderoso + Segunda Juventud), y 6 medios nuevos (id 16–19, 22, 24).
- Actualizado este documento: estado del sitio (5 páginas), tabla de Medios, tracker, bloqueantes.
- Verificado que entradas (solo "Hello world") y categorías (solo "Uncategorized") **no han cambiado**; las 5 rutinas y 3 artículos siguen sin publicar.
- **Aclarado por Raúl:** hay TRES canciones distintas (Segunda Juventud, Libre, Corazón Poderoso). "Corazón Poderoso" se creó en otro ordenador y solo vive en la web (no en el repo). Ver inventario en sección 2.
- **Pendientes:** (1) re-registrar MCP; (2) borrar duplicados id 22/24 y png id 7.
- **Copia local de "Corazón Poderoso":** Raúl la subirá al repo desde el otro ordenador (donde está el original). No hace falta descargarla de la web.

### 2026-06-02 — Raúl + Claude
- Radiografía real del sitio: vivo en Hostinger, tema IA de Hostinger, sin plugins del plan, contenido vacío.
- Conectado Claude por MCP nativo (`/wp-json/mcp/mcp-adapter-default-server`), verificado (50 abilities).
- Decidido mantener el tema de Hostinger (D1).
- Creado este documento de desarrollo independiente.
- Publicadas las 3 páginas estáticas (Inicio placeholder, Sobre YayaFit, Cómo funciona).
- Publicada la página **Himno de YayaFit** (`/himno/`): subido MP3 (~4 MB) + portada, con reproductor y letra.
- Borrado el FLAC redundante de Medios (id 11) para liberar espacio; master a salvo en local.
- **Siguiente:** publicar las 5 rutinas y 3 artículos; resolver acceso Administrador; aplicar marca global; añadir páginas al menú; borrar la entrada "Hello world" y la imagen ajena (png id 7).
