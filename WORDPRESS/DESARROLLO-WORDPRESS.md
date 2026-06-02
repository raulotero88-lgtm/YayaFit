# YayaFit — Desarrollo WordPress

> **Documento único y vivo del desarrollo de la web/app en WordPress.**
> Es la fuente de verdad para las 3 personas del equipo. Cada vez que avances:
> 1. Anota lo que vas a tocar en **Bloqueantes / Sesiones** antes de empezar.
> 2. Marca la casilla de la tarea en el **Tracker** al terminar.
> 3. Si cambias algo importante de rumbo, apúntalo en **Decisiones**.
>
> Última actualización: **2026-06-02**

---

## 1. Qué es esto

YayaFit es una app de fitness y comunidad para mujeres de 60-75 años. Construimos
un **prototipo funcional** sobre WordPress en el dominio **https://yayafit.es**.
El contexto de negocio (plan, pitch, marca) vive en `../DOCUMENTACION/` y `../DISEÑO YAYAFIT/`.
**Este documento solo cubre el desarrollo técnico en WordPress.**

El corazón del producto es la **comunidad** ("no vendemos gimnasio, vendemos
compañía con excusa de deporte"). Todo lo que construyamos debe servir a eso.

---

## 2. Estado actual del sitio (real, 2026-06-02)

| Elemento | Estado | Notas |
|---|---|---|
| Hosting | ✅ Hostinger activo | SSL + LiteSpeed cache funcionando |
| Dominio | ✅ yayafit.es en producción | — |
| Tema activo | `hostinger-ai-theme` | Generado por el asistente IA de Hostinger (ver Decisión D1) |
| Plugins clave | ❌ Pendientes | No hay BuddyPress / Elementor / formularios aún |
| Páginas publicadas | 4 | Inicio, Sobre YayaFit, Cómo funciona, Himno |
| Entradas publicadas | 1 ("Hello world") | Demo de WordPress — borrar cuando empecemos las rutinas |
| Categorías | 1 ("Uncategorized") | Faltan Rutinas y Bienestar |
| Medios | Portada (id 13) + MP3 del himno (id 12) | FLAC eliminado (redundante). Queda 1 png ajena (id 7) por borrar |
| Conexión Claude (MCP) | ✅ Conectada | Ver sección 6 |

**Contenido ya escrito en local** (en `../APP YAYAFIT (PROYECTO)/contenido/`):
- 3 páginas: ✅ publicadas (Inicio, Sobre YayaFit, Cómo funciona)
- 5 rutinas: ⏳ pendientes de publicar (equilibrio, fuerza-silla, movilidad-espalda, cardio-caminar, yoga-calma)
- 3 artículos de bienestar: ⏳ pendientes (dormir-mejor, nutricion-sencilla, rutina-diaria)
- Himno "Segunda Juventud": ✅ publicado en `/himno/` (portada + reproductor + letra)

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
- [ ] Crear categorías Rutinas (+ subcategorías) y Bienestar
- [ ] Crear cuentas Editor para compañeros 2 y 3

**Fase 2 — Contenido, diseño y comunidad**
- [x] Publicar página Inicio — 2026-06-02 (placeholder, se rediseñará en Fase 2) · https://yayafit.es/inicio/
- [x] Publicar página Sobre YayaFit — 2026-06-02 (Claude, vía REST API) · https://yayafit.es/sobre-yayafit/
- [x] Publicar página Cómo funciona — 2026-06-02 · https://yayafit.es/como-funciona/
- [x] Publicar página Himno de YayaFit (portada + reproductor MP3 + letra) — 2026-06-02 · https://yayafit.es/himno/
- [ ] Publicar 5 rutinas (con categoría, extracto e imagen)
- [ ] Publicar 3 artículos de bienestar
- [ ] Aplicar paleta y tipografía de marca
- [ ] Subir logo y favicon
- [ ] Diseñar página de Inicio (hero + pilares + CTA)
- [ ] Activar comunidad (perfiles, grupo, miembros, muro)
- [ ] Configurar menú de navegación

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

---

## 10. Bloqueantes / Notas

| Fecha | Tema | Estado |
|---|---|---|
| 2026-06-02 | Falta acceso Administrador (cuenta `mkhzipgd@gmail.com`) | Abierto — bloquea instalar plugins y gestionar usuarios |

---

## 11. Historial de sesiones

### 2026-06-02 — Raúl + Claude
- Radiografía real del sitio: vivo en Hostinger, tema IA de Hostinger, sin plugins del plan, contenido vacío.
- Conectado Claude por MCP nativo (`/wp-json/mcp/mcp-adapter-default-server`), verificado (50 abilities).
- Decidido mantener el tema de Hostinger (D1).
- Creado este documento de desarrollo independiente.
- Publicadas las 3 páginas estáticas (Inicio placeholder, Sobre YayaFit, Cómo funciona).
- Publicada la página **Himno de YayaFit** (`/himno/`): subido MP3 (~4 MB) + portada, con reproductor y letra.
- Borrado el FLAC redundante de Medios (id 11) para liberar espacio; master a salvo en local.
- **Siguiente:** publicar las 5 rutinas y 3 artículos; resolver acceso Administrador; aplicar marca global; añadir páginas al menú; borrar la entrada "Hello world" y la imagen ajena (png id 7).
