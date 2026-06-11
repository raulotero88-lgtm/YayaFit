# YayaFit — Desarrollo WordPress

> **Documento único y vivo del desarrollo de la web/app en WordPress.**
> Es la fuente de verdad para las 3 personas del equipo. Cada vez que avances:
> 1. Anota lo que vas a tocar en **Bloqueantes / Sesiones** antes de empezar.
> 2. Marca la casilla de la tarea en el **Tracker** al terminar.
> 3. Si cambias algo importante de rumbo, apúntalo en **Decisiones**.
>
> Última actualización: **2026-06-11** (2ª pasada de Campeonas: portada cambiada a la del **trofeo del Mundial** —medio id **279**, sustituye a la 274— y título de `/musica/` aligerado quitando el `<h1>` duplicado «Música YayaFit»)

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
| Tema activo | `vw-yoga-fitness` 2.3.4 | "Free Yoga" de ThemesCaliber (sustituyó al hostinger-ai-theme ~2026-06-03; la demo importada se limpió el 2026-06-10) |
| Plugins clave | ✅ Contact Form 7 6.1.6 + Yoast SEO 27.8 (2026-06-10) | BuddyPress (comunidad) sigue pendiente |
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

**Página Música (`/musica/`, id 20) — 5 canciones (orden: más nuevas arriba):**
- 🎵 **Campeonas (Canción mundial 2026)** — portada **id 279** (`portada-campeonas-trofeo.jpg`, la del trofeo del Mundial; **la id 274 quedó huérfana**) + reproductor MP3 (id 273). Himno mundialero estilo "Dai Dai". Publicada 2026-06-11; portada y título actualizados el mismo día (2ª pasada) por Claude vía REST API.
- 🎵 **Siente el Ritmo** — portada (id 156) + reproductor MP3 (id 157, con portada incrustada). Publicada 2026-06-04 por Claude vía REST API.
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
| Cuenta Raúl | `raulotero88@gmail.com` | **Administrador** (verificado por REST 2026-06-05; antes Editor) |
| Cuenta Administrador | `mkhzipgd@gmail.com` | Creada por Hostinger — **recuperar acceso** (desbloqueante) |
| Compañero 2 | — | (crear cuenta, rol Editor) |
| Compañero 3 | — | (crear cuenta, rol Editor) |

**Acceso Administrador:** ✅ resuelto — la cuenta de Raúl ya tiene rol **Administrador**
(verificado 2026-06-05). Desbloquea plugins, usuarios, Personalizador y abilities MCP.

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
- [x] Recuperar/asignar acceso Administrador — 2026-06-05 (cuenta de Raúl ya es Administrador)
- [x] Limpiar demo del tema (Hello world id 1 + páginas Pages/About Us/Classes/Lorem ×2 + 3 posts Lorem) — 2026-06-10 (Claude, a papelera con OK de Raúl; recuperables 30 días)
- [~] Definir e instalar plugins — **formularios ✅ Contact Form 7** + **SEO ✅ Yoast** (2026-06-10); comunidad (BuddyPress) pendiente
- [x] Ajustes base (título "YayaFit", tagline "Tu segunda juventud empieza aquí", zona horaria Madrid, fecha/hora en formato español, email admin → raulotero88@gmail.com, pingbacks cerrados) — 2026-06-10 (Claude, vía REST). Registro abierto/rol por defecto: pendiente para la fase comunidad
- [x] Crear categorías Rutinas (+ subcategorías) y Bienestar — 2026-06-03 (Claude, vía REST API)
- [ ] Crear cuentas Editor para compañeros 2 y 3

**Fase 2 — Contenido, diseño y comunidad**
- [x] Publicar página Inicio — 2026-06-02 (placeholder, se rediseñará en Fase 2) · https://yayafit.es/inicio/
- [x] Publicar página Sobre YayaFit — 2026-06-02 (Claude, vía REST API) · https://yayafit.es/sobre-yayafit/
- [x] Publicar página Cómo funciona — 2026-06-02 · https://yayafit.es/como-funciona/
- [x] Publicar página Himno de YayaFit (portada + reproductor MP3 + letra) — 2026-06-02 · https://yayafit.es/himno/
- [x] Publicar página Música (2 canciones: Corazón Poderoso + Segunda Juventud) — 2026-06-02 (Raúl, directo en la web) · https://yayafit.es/musica/
- [x] Añadir canción **Libre** a la página Música (portada + reproductor MP3) — 2026-06-03 (Claude, vía REST API) · https://yayafit.es/musica/
- [x] Añadir canción **Siente el Ritmo** a la página Música (portada + reproductor MP3, medios id 156/157) — 2026-06-04 (Claude, vía REST API) · https://yayafit.es/musica/
- [x] Añadir canción **Campeonas (Canción mundial 2026)** a la página Música (portada id 274 + MP3 id 273, primera posición) — 2026-06-11 (Claude, vía REST API) · https://yayafit.es/musica/
- [x] Publicar 5 rutinas (con categoría, subcategoría, etiquetas y extracto) — 2026-06-03 (Claude, vía REST API) · falta imagen destacada
- [x] Publicar 3 artículos de bienestar (con categoría, subcategoría y extracto) — 2026-06-03 (Claude, vía REST API) · falta imagen destacada
- [~] Aplicar paleta y tipografía de marca — **paleta ✅ 2026-06-05** (lavanda + fucsia de acción, 14 URLs, vía REST API); **tipografía (Fraunces/Nunito) pendiente** (requiere Personalizador → Administrador)
- [~] Subir logo y favicon — **favicon ✅ 2026-06-10** (monograma "Y" blanca sobre círculo fucsia `#D63E78`, media id 253, generado con `brand/scripts/genera-favicon.py`); logo de cabecera pendiente (la cabecera usa logo de texto estilizado por CSS)
- [x] Diseñar página de Inicio (hero + 4 tarjetas-hub + cierre) — 2026-06-03 (Claude+Raúl, vía REST API). ⚠️ El dominio pelado `yayafit.es` sigue mostrando el **blog** (`<body class="home blog">`); poner Inicio como página frontal está en *Ajustes → Lectura* y **requiere Administrador**
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
| 2026-06-02 | Falta acceso Administrador (cuenta `mkhzipgd@gmail.com`) | ✅ **Resuelto 2026-06-05** — la cuenta de Raúl `raulotero88@gmail.com` ya es **Administrador** (verificado por REST) |
| 2026-06-03 | ~~Nombre canción 2: "Corazón Poderoso" vs "Libre"~~ | ✅ **Cerrado 2026-06-03** — son canciones DISTINTAS. "Corazón Poderoso" se creó en otro ordenador y se subió directa a la web (no está en este repo). "Libre" es otra canción local, aún sin publicar. |
| 2026-06-03 | Conexión MCP `yayafit` | ✅ **Conectada** (lectura). La **escritura** por MCP exige Administrador (ver D4); mientras tanto se escribe por REST API |
| 2026-06-03 | Escritura por abilities MCP bloqueada (rol Editor) | Abierto — se resolverá al obtener Administrador; no bloquea el contenido (se usa REST API) |
| 2026-06-03 | 2 MP3 duplicados huérfanos en Medios (id 22, id 24) + png ajena (id 7) | Abierto — Raúl decidió **no borrar** por ahora (2026-06-03) |
| 2026-06-03 | Application Password "Claude REST API" en uso (compartida en chat) | Abierto — **rotar/revocar** desde wp-admin → Perfil cuando termine el trabajo de contenido |
| 2026-06-05 | Application Password usada para el empuje de la paleta (compartida en chat) | Abierto — **revocar** desde wp-admin → Perfil ahora que el trabajo de estilo terminó |
| 2026-06-10 | Application Password usada en la sesión de profesionalización (compartida en chat) | Abierto — **revocar** desde wp-admin → Perfil al cerrar la sesión (junto con las anteriores pendientes) |
| 2026-06-11 | Application Password usada para publicar "Campeonas" (compartida en chat) | Abierto — **revocar** desde wp-admin → Perfil al cerrar la sesión |
| 2026-06-11 | Application Password usada para actualizar la portada de Campeonas (2ª pasada, compartida en chat) | Abierto — **revocar** desde wp-admin → Perfil al cerrar la sesión |
| 2026-06-11 | Medio id 274 (`portada-campeonas.jpg`, copa genérica) quedó huérfano al pasar a la portada del trofeo (id 279) | Abierto — Raúl decide si borrarlo |

---

## 11. Historial de sesiones

### 2026-06-11 (2ª pasada) — Raúl + Claude (portada "trofeo del Mundial" + título de /musica/)
- **Portada nueva** de Campeonas (el **trofeo oficial del Mundial**, no la copa genérica de la 1ª pasada): incrustada en el **mp3 local** con mutagen (sustituye la carátula previa; backup `.mp3.bak`, ignorado por git) y **subida a la web** como medio **id 279** (`portada-campeonas-trofeo.jpg`, 146.276 bytes, con título + `alt_text`). La página Música (id 20) ahora apunta a ella; **el medio id 274 (`portada-campeonas.jpg`) queda huérfano**.
- **Título de `/musica/` aligerado** (decisión de Raúl: "se ve repetitivo"): se quita el `<h1>Música YayaFit</h1>` duplicado —el banner del tema ya muestra "Música"— y los dos párrafos vacíos de cabecera; se mantiene el subtítulo "Escucha nuestros himnos de motivación y fuerza".
- **No se resubió el mp3** a la web (decisión de Raúl): el reproductor usa imagen aparte, así que el descargable id 273 conserva la carátula anterior incrustada.
- **Verificado en vivo:** medio 279 HTTP 200 (146.276 bytes); frontend `/musica/` sirve la portada del trofeo, sin la antigua y sin el `<h1>` duplicado (REST `context=view` + HTML público con caché LiteSpeed ya purgada).
- **Prompt de Leonardo** (`music/06-campeonas/creacion/PROMPT-LEONARDO-Campeonas.txt`) corregido para describir el **trofeo real** (dos figuras de oro en espiral + globo + base de malaquita verde) sin nombrar "FIFA"/"World Cup" (el filtro de Leonardo bloquea esas marcas) y negative prompt sin "child/teenager" (Leonardo también los bloquea aunque sea para excluirlos). Script reproducible del embed: `music/06-campeonas/creacion/embed-portada2.py`.
- **Pendiente:** **revocar** la Application Password usada hoy; decidir si borrar el medio huérfano id 274.

### 2026-06-11 — Raúl + Claude (publicación de "Campeonas")
- **Contexto:** sexta canción del catálogo (himno del Mundial, estilo afrobeats-reggaetón "Dai Dai"), ya generada por Raúl y subida al repo (`music/06-campeonas/`).
- **2 medios subidos** a la Biblioteca vía REST API (Basic Auth): `campeonas-yayafit.mp3` (id **273**, 5.324.748 bytes) y `portada-campeonas.jpg` (id **274**, 242.981 bytes). Fijados título (`Campeonas (Canción mundial 2026)`) y `alt_text`.
- **Bloque añadido** a la página Música (id 20) en **primera posición** (convención: más nuevas arriba), replicando el patrón exacto leído en vivo (`<div>` borde `#cdb6e3` + `<img>` 200px + `<h3 style="color:#2A2233;">` + `<audio>`), sin tocar las otras 4 canciones. Contenido construido e insertado con un script Python (UTF-8 + escapado JSON) y enviado con `curl --data-binary @payload.json` (gotcha de acentos).
- **Título en la web:** a petición de Raúl, el `<h3>` muestra **"Campeonas (Canción mundial 2026)"** (el nombre del fichero del repo se deja como está).
- **Verificado en vivo:** medios HTTP 200 con tamaños correctos; frontend `/musica/` muestra Campeonas el primero (orden Campeonas · Siente el Ritmo · Libre · Corazón Poderoso · Segunda Juventud), tilde correcta (sin mojibake), ambas URLs de medios presentes.
- **Pendiente:** **revocar** la Application Password usada en esta sesión desde wp-admin → Perfil.

### 2026-06-10 — Raúl + Claude (profesionalización: limpieza demo, portada única, identidad, contacto, SEO)

- **Auditoría completa previa** (REST + frontend): tema real `vw-yoga-fitness` 2.3.4 con demo importada aún publicada, dos portadas compitiendo (Home demo id 90 como frontal + hub Inicio id 9), menú con "Home" e "Inicio" duplicados, contacto sin formulario, sin favicon/tagline, fecha en formato inglés, email admin de Hostinger, pie con widgets de relleno del tema (Search/Archivo/Meta/Categories), 0 SEO.
- **Decisión de Raúl:** portada única = la **Home del tema** (id 90, "más profesional"). El hub Inicio (9) pasó a **borrador** (contenido conservado).
- **Limpieza demo (papelera, OK explícito de Raúl):** páginas Pages (96), Lorem ×2 (102, 104), About Us (92), Classes (94); entradas Lorem ×3 (114, 116, 118) y Hello world (1). Verificado: todas dan 404. Los 3 posts de clases reales (108, 110, 112) se conservaron: **slug limpio** (`clase-fuerza-y-equilibrio-con-silla`, `clase-baile-en-grupo`, `clase-yoga-suave-y-respiracion`) + párrafo nuevo enlazando a su rutina/Música.
- **Menú unificado:** ítem "Home" renombrado a "Inicio" (item 91); ítem duplicado "Inicio"→/inicio/ (item 123) eliminado. Título de la página 90: "Home" → "Inicio" (la pestaña ahora dice "Inicio - YayaFit").
- **Identidad (REST /settings):** título "YayaFit", tagline "Tu segunda juventud empieza aquí", zona horaria Europe/Madrid, fecha `j \d\e F \d\e Y`, hora `H:i`, email admin → **contacto@yayafit.es** (decidido tras descartar el personal de Raúl y un Gmail nuevo que no podía verificar). ⚠️ **Ese buzón NO existe todavía**: el correo del dominio es de pago en el plan actual de Hostinger (Starter Business Email 0,39 $/mes) y Raúl decidió **de momento no poner ningún correo** (2026-06-10). Consecuencia: la página de contacto muestra **solo el formulario** (sin dirección visible). **Resuelto con Flamingo 2.6.2** (instalado y activado el mismo día con OK de Raúl): todos los envíos del formulario quedan guardados en **wp-admin → Flamingo → Mensajes entrantes**, sin necesidad de buzón de correo. Verificado con un envío de prueba real ("Mensaje de prueba (borrar)", se puede eliminar desde ahí). El email a contacto@yayafit.es seguirá sin entregarse hasta que exista el buzón, pero ya no se pierde nada. Pingbacks cerrados.
- **Favicon:** monograma "Y" blanca (Georgia Bold, aprox. local de Fraunces) sobre círculo fucsia `#D63E78`, 512px, generado con `brand/scripts/genera-favicon.py` → `brand/images/favicon-yayafit-512.png`, subido (media id **253**) y fijado como site_icon. Verificado en `<head>`.
- **Pie de marca:** las 4 zonas footer-1..4 pobladas con bloques (YayaFit+tagline · Secciones · Contacto · La comunidad), lo que desplaza el relleno hardcodeado del tema. 🐞 **Gotcha widgets:** las primeras creaciones rebotaron a `wp_inactive_widgets` con la instancia vaciada (object cache de Hostinger desfasado entre workers durante la instalación de plugins). Solución: recrear los widgets, y **reasignar la zona en una segunda pasada** una vez la instancia ya persiste en BD.
- **Plugins instalados y activados (OK explícito de Raúl):** Contact Form 7 6.1.6 y Yoast SEO 27.8 (vía REST `/wp/v2/plugins`).
- **Formulario de contacto:** form CF7 (id 258, hash `fad5f68`) traducido a español con voz de marca (campos Tu nombre/correo/asunto/mensaje, botón "Enviar mensaje", mensajes de validación en español), mail a `[_site_admin_email]` con Reply-To. Incrustado en la página Contacta con Nosotros (100) con shortcode. 🐞 **Gotcha CF7 REST:** los parámetros van **planos** (`title`, `form`, `mail`, `messages`), NO bajo `properties`, y hay que añadir **`?context=save`** o el cambio solo vive en memoria (devuelve 200 y echo del cambio, pero no persiste).
- **Verificado en vivo:** menú único, favicon servido, pie de marca sin fallback, formulario en español, las 3 URLs de clases nuevas en 200, demo en 404, `og:title` de Yoast presente.
- **Artefactos nuevos:** `app/wordpress/payloads/` (settings, clases, widgets, CF7, página contacto), `brand/scripts/genera-favicon.py`, `brand/images/favicon-yayafit-512.png`.
- **Pendiente (manual, en el Personalizador):** (1) botón topbar "RESERVAR AHORA"/"Book Now" → darle URL real (p. ej. /contact-us/) o desactivarlo (*VW Settings → Topbar Section*; queda un "Book Now" sin traducir); (2) texto del pie "Tema de WordPress Yoga By ThemesCaliber" (*Footer Settings*); (3) tipografía Fraunces/Nunito; (4) primera configuración de Yoast (asistente) + meta descriptions de páginas clave; (5) **revocar las Application Passwords** compartidas en chat (incluida la de hoy); (6) decidir qué hacer con la cuenta admin `mkhzipgd@gmail.com` de Hostinger (recuperar o eliminar).

### 2026-06-05 — Raúl + Claude (paleta de marca final: lavanda + fucsia de acción)

- **Contexto:** tras pactar la guía v1 (commit `bc7a3ef`) y aprobar el plano final (héroe editorial + fucsia solo en lo accionable), el sitio estaba en un paso intermedio "lila": base lavanda OK pero **botones en lila `#a887c9`** y un **CTA verde `#6BAB7A`**, y la barra/pie seguían en el **coral antiguo**. Inicio (9) había perdido la barra en el restyle a lila.
- **Archivos fuente actualizados** a la paleta final (base lavanda + fucsia `#D63E78`/`#B12E62` de acción + títulos en tinta `#2A2233`): `barra-navegacion.html`, `pie-navegacion.html`, `paginas/inicio-hub.html`, `paginas/rutinas-indice.html`, `paginas/bienestar-indice.html`, y el color de pestaña activa en `scripts/inject-nav.ps1`.
- **Nuevo script** `scripts/push-style.ps1`: empuja por REST API el cuerpo (desde artefacto local, o por sustitución puntual con `-FixMusica`/`-FixSobre`) + barra(activa)+pie. Hace **backup** del estado previo en `backups/fucsia-restyle-2026-06-05/` (`.before.html`/`.after.html` por id). Mismo mecanismo UTF-8 probado.
- **Empuje a 14 URLs (todas HTTP 200):** páginas 9 (inicio, cuerpo nuevo), 51 (rutinas, cuerpo nuevo), 52 (bienestar, cuerpo nuevo), 8 (sobre: "Cómo funciona" lila→tinta + CTA registro lila→fucsia), 20 (música: títulos lila→tinta + botón Himno verde→fucsia), 14 (himno: solo barra+pie); entradas 32-36 (activo rutinas) y 37-39 (activo bienestar), solo barra+pie. De paso **Inicio recupera la barra**.
- **Verificado** por API (contenido guardado) y por **frontend público** (caché LiteSpeed ya servía lo nuevo): fucsia presente en lo accionable, **cero** `#E8634A`/`#F4A261`/`#6BAB7A`/`#a887c9`, barra+pie en todas, pestaña activa en pastilla fucsia.
- **Corrección (mismo día):** Raúl detectó que el **tema ya tiene un menú nativo** con las secciones creadas (Inicio · Sobre YayaFit · Rutinas · Bienestar · Música + restos demo Home · Contacta · Book Now). La barra inyectada lo **duplicaba**. Decisión: **dejar el menú del tema y quitar el nuestro**. Nuevo script `scripts/strip-nav.ps1` retiró la barra+pie inyectados de las 14 URLs (HTTP 200), **conservando el restyle de color del cuerpo**; backup en `backups/strip-nav-2026-06-05/`. Verificado: sin marcadores `YAYAFIT-NAV/FOOTER`, fucsia del cuerpo intacto. → La barra/pie inyectados quedan **obsoletos** (la fuente `barra-navegacion.html`/`pie-navegacion.html` se conserva por si se necesitara, pero no está en uso).
- **Rebrand del tema por CSS adicional (en vivo):** la cuenta de Raúl ya es **`administrator`** (verificado por REST). El tema **vw-yoga-fitness** ("Free Yoga" de ThemesCaliber, doc: <https://preview.themescaliber.com/doc/free-yoga/>) **no tiene opción nativa de color de acento en la versión gratis** (el "Global Color Option" es de pago), así que los acentos del tema (lila `#a887c9` + azul `#788ecf`) se sustituyen por la paleta de marca vía **Apariencia → Personalizar → CSS adicional**. Bloque versionado en [`tema-menu-marca.css`](tema-menu-marca.css); cubre: menú (tinta + activo/hover fucsia), logo `.logo-inner` (fucsia hondo), migas `.bradcrumbs` (pastilla lavanda + enlace fucsia), botón `.top-btn` "Book Now" (píldora fucsia, antes asomaba el contenedor azul), barra de créditos `.footer-2` (tinta `#2A2233`), botón subir `.scrollup` (fucsia), y otros acentos (`input[submit]`, `.view-more`, `hr.section-hr`). **Publicado y verificado en vivo (2026-06-05):** los 6 overrides presentes en `wp-custom-css`.
- **Controles nativos del tema (para no parchear con CSS):** **Book Now** → *Personalizar → VW Settings → Homepage Setting → Topbar Section* (texto/URL o desactivar); **texto del pie** → *VW Settings → Homepage Settings → Footer Settings* (cambiar copyright); **logo** → *Ajustes de identidad del sitio*. (Las migas no tienen ajuste nativo → solo CSS.)
- **Pendiente:** (1) decidir **Book Now** (darle URL real o desactivarlo en Topbar Section); (2) cambiar el **texto del pie** "Tema de WordPress Yoga By ThemesCaliber" por uno de YayaFit (Footer Settings); (3) **quitar del menú** los restos demo **Home** y **Contacta Con Nosotros** (Apariencia → Menús); (4) **tipografía** de marca (Fraunces/Nunito) → Theme Typography; (5) **revocar** la Application Password usada (se compartió en chat).

### 2026-06-04 — Raúl + Claude (publicación de "Siente el Ritmo")
- **Portada incrustada en el MP3** local con mutagen: `Portada Siente el Ritmo - YayaFit.jpg` (JPEG 1024×1024) como `APIC`/COVER_FRONT + tags ID3 título/artista/álbum. Backup `.mp3.bak` local (ignorado por `.gitignore`).
- **Repo:** la carpeta local no estaba inicializada como git; reconectada al remoto `raulotero88-lgtm/YayaFit` (`git init` + `remote` + `fetch` + `reset` mixto, sin tocar el working tree). Commiteados la canción 04 y los backups HTML de las ediciones del día; push a `main`.
- **2 medios subidos** a la Biblioteca vía REST API (Basic Auth, rol Editor): `portada-siente-el-ritmo.jpg` (id **156**, 249 KB) y `siente-el-ritmo-yayafit.mp3` (id **157**, 3.0 MB, MP3 con portada ya incrustada). Fijados título y `alt_text`.
- **Bloque añadido** a la página Música (id 20) en **primera posición** (convención: más nuevas arriba), replicando el patrón lila existente (`<div>` borde `#cdb6e3` + `<img>` + `<h3 #a887c9>` + `<audio>`), sin tocar las otras 3 canciones. Body enviado como bytes UTF-8 (gotcha de acentos).
- **Verificado en vivo:** orden Siente el Ritmo · Libre · Corazón Poderoso · Segunda Juventud; portada y MP3 sirven HTTP 200 con los tamaños correctos (249.430 y 3.093.868 bytes).
- **Pendiente:** **rotar/revocar** la Application Password usada en esta sesión desde wp-admin → Perfil.

### 2026-06-03 (noche, +tarde) — Raúl + Claude (Fase 1: navegación viva)
- **Diagnóstico:** el `hostinger-ai-theme` no comparte un menú entre páginas (su cabecera nativa tiene un hamburguesa vacío), por eso desde `/musica/` no se podía navegar. Brainstorming + diseño + plan en `app/planning/2026-06-03-estructura-navegable-{design,plan}.md`.
- **Barra y pie de navegación de marca** (HTML+CSS en línea, autónomo, entre marcadores `YAYAFIT-NAV-START/END`) versionados en `app/wordpress/barra-navegacion.html` y `pie-navegacion.html` (fuente única de verdad). Colores de marca; activo en pastilla coral `#F4B3A1`; logo centrado arriba y botones centrados (ajustado tras revisión en móvil de Raúl).
- **Script idempotente** `app/wordpress/scripts/inject-nav.ps1`: lee la barra/pie maestros, quita la versión previa y reinyecta vía REST API (rol Editor); marca la sección activa. Credencial por `$env:WP_USER`/`$env:WP_APP_PASS`.
- **Páginas índice nuevas:** Rutinas (id **51**, `/rutinas/`, 5 tarjetas) y Bienestar (id **52**, `/bienestar/`, 3 tarjetas), enlazando a las entradas 32-36 y 37-39.
- **Barra propagada** a las 6 páginas (8,9,14,20,51,52) y las 8 entradas (32-39).
- **Reorganización:** "Cómo funciona" (10) fundida en "Sobre YayaFit" (8) y pasada a **borrador** (404 público); "Himno" enlazado desde "Música" con botón verde.
- **Menú definitivo:** Inicio · Rutinas · Bienestar · Música · Sobre YayaFit.
- **Verificado en vivo:** las 8 URLs sirven la barra; Sobre incluye Cómo funciona; Cómo funciona da 404; Música enlaza al Himno.
- **Portada Inicio (id 9) rediseñada como hub:** hero ("Tu segunda juventud empieza aquí" + botón "Únete gratis" aspiracional con nota "✨ muy pronto"), 4 tarjetas a las secciones (Rutinas/Bienestar/Música/Sobre) y cierre con CTA real a Rutinas. Artefacto en `app/wordpress/paginas/inicio-hub.html`.
- **Coherencia de CTAs:** el botón de registro de "Sobre YayaFit" (era `wp-block-button` → `/wp-login.php?action=register`, estilo gris del tema) se cambió al mismo coral + nota "muy pronto". 🐞 **Gotcha Gutenberg:** editar solo el `<a>` dentro de un bloque botón invalida el bloque y WordPress lo **borra al renderizar**; hay que sustituir el bloque `wp:buttons` **completo** por HTML libre.
- **Hallazgo importante:** `yayafit.es` (dominio pelado) muestra el **blog**, no la página Inicio. Cambiarlo (Ajustes → Lectura → página frontal estática) **requiere Administrador**. Mientras tanto, el botón "Inicio" del menú lleva al hub en `/inicio/`.
- **Pendiente (otras fases):** página frontal del dominio = Inicio (Admin); pie del tema con `trans-menu`/`trans-contacts` (Admin); imágenes en tarjetas (Fase 3). **Revocar** el Application Password "Claude navegacion" al cerrar.

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
