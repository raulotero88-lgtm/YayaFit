# YayaFit — Diseño: estructura navegable v1

**Fecha:** 2026-06-03
**Tipo:** Diseño de arquitectura de información + navegación
**Dominio:** yayafit.es
**Stack:** WordPress + `hostinger-ai-theme` (sin plugins; rol Editor)
**Documento maestro relacionado:** `app/wordpress/desarrollo-wordpress.md`

---

## Problema que resuelve

Hoy yayafit.es tiene 5 páginas publicadas pero **cada una es una isla**: el tema de
Hostinger monta cada página de forma independiente y **no hay una cabecera/menú
compartido** que aparezca en todas. Síntoma reportado por el usuario: al abrir
`/musica/` se ve bien, pero **desde ahí no se puede seguir navegando** al resto del
sitio. Falta lo más básico de una web "fluida": un mapa de secciones y un menú
constante.

**Objetivo:** convertir las páginas sueltas en una web con secciones claras y
navegables desde cualquier punto, empezando con lo que ya existe y sin necesitar
permisos de Administrador.

---

## Restricciones (lo que condiciona el diseño)

- **Rol Editor**, no Administrador. Se puede **crear/editar páginas y entradas, subir
  media y gestionar categorías**; NO se pueden instalar plugins, cambiar el tema, ni
  usar el menú nativo de WordPress (requiere `edit_theme_options` = Admin).
- **El tema no renderiza menús nativos de WordPress** (confirmado en vivo: 0 clases
  `menu-item` en el HTML). Cada página trae su navegación "a mano".
- **Vía de escritura = REST API estándar** con Application Password (Basic Auth). Las
  abilities MCP de *escritura* están denegadas para rol Editor (ver Decisión D4 del
  documento maestro). El MCP sólo sirve para *lectura*.
- **Gotcha UTF-8 (Windows):** los acentos se corrompen si el JSON va inline en
  `curl --data '...'`. Solución: escribir el payload a un archivo UTF-8 y enviarlo con
  `curl --data @archivo.json`.
- **Audiencia:** mujeres de 60-75 años, muchas accediendo desde el móvil. Prioridad en
  botones grandes, letra ≥18px, alto contraste y "dónde estoy" siempre visible.

---

## Decisiones tomadas en el brainstorming

| ID | Decisión | Motivo |
|---|---|---|
| N1 | Hacerlo ordenado y didáctico (el usuario quiere aprender) | Petición explícita |
| N2 | Mapa de **5 secciones**: Inicio · Rutinas · Bienestar · Música · Sobre YayaFit | Pocas y claras para la audiencia; reutiliza el contenido existente |
| N3 | Avanzar **hoy con rol Editor**; el Admin se recupera para la fase Comunidad | No bloquea nada del trabajo actual |
| N4 | Menú = **barra HTML+CSS autónoma incrustada en cada página** (opción A) | 100% fiable con Editor + este tema; visible hoy; Claude la propaga |
| N5 | "Cómo funciona" se funde en "Sobre YayaFit"; "Himno" se enlaza desde "Música" | Pasar de 5 páginas sueltas a 5 secciones con sentido |

---

## Arquitectura de información

```
yayafit.es
│
├── 🏠 Inicio            → portada-hub: bienvenida + tarjetas a las 4 secciones
├── 🤸 Rutinas           → página índice (tarjetas) → 5 entradas existentes
│      ├─ Equilibrio (entrada 32)
│      ├─ Fuerza en silla (entrada 33)
│      ├─ Movilidad de espalda (entrada 34)
│      ├─ Cardio caminando (entrada 35)
│      └─ Yoga en calma (entrada 36)
├── 🌿 Bienestar         → página índice (tarjetas) → 3 entradas existentes
│      ├─ Dormir mejor (entrada 37)
│      ├─ Nutrición sencilla (entrada 38)
│      └─ Rutina diaria (entrada 39)
├── 🎵 Música            → /musica/ (id 20, ya hecha) — el Himno se enlaza aquí
└── ℹ️ Sobre YayaFit     → /sobre-yayafit/ (id 8) + "Cómo funciona" (id 10) fundido

(Fase futura) 👭 Comunidad → registro, comentarios, grupos. Requiere Admin + plugins.
```

**Insight clave:** el contenido de *Rutinas* y *Bienestar* **ya está publicado** como
entradas (posts id 32-39) dentro de las categorías Rutinas (id 3) y Bienestar (id 4).
No hay que crear ese contenido — sólo darle una **puerta de entrada navegable** (la
página índice) y ponerle la barra a cada entrada.

---

## Componente: la barra de navegación

Bloque **HTML + CSS en línea, autónomo** (no depende del CSS del tema), incrustado al
principio del contenido de cada página y entrada pública.

**Aspecto (escritorio):**

```
┌──────────────────────────────────────────────────────────────────┐
│  💪 YayaFit     Inicio   Rutinas   Bienestar   Música   Sobre     │
└──────────────────────────────────────────────────────────────────┘
```

**Especificación:**
- Fondo: blanco cálido `#FAFAF8`. Texto: gris `#3D3D3D`. Sección activa: coral `#E8634A`.
- Enlaces como botones grandes (área de toque ≥44px), letra ≥18px, negrita media.
- La sección actual se resalta (color coral + subrayado) para indicar "dónde estoy".
- **Responsive:** en móvil los enlaces se apilan o envuelven en botones grandes a todo
  el ancho; sin menú hamburguesa (un desplegable es peor para la audiencia que ver los
  botones directamente).
- **Logo/nombre** "💪 YayaFit" a la izquierda, enlaza a Inicio.
- **Pie (footer)** mínimo con los mismos 5 enlaces, para evitar callejones sin salida.
- **Estilos en línea por elemento** (`style="..."`) en vez de un bloque `<style>`, para
  máxima compatibilidad con cómo el tema guarda el contenido (los bloques `<style>` se
  pueden sanear; los estilos en línea sobreviven, igual que el HTML de `/musica/`).

**Enlaces del menú (destinos):**
| Botón | URL |
|---|---|
| Inicio | `https://yayafit.es/inicio/` |
| Rutinas | `https://yayafit.es/rutinas/` (página índice nueva) |
| Bienestar | `https://yayafit.es/bienestar/` (página índice nueva) |
| Música | `https://yayafit.es/musica/` |
| Sobre YayaFit | `https://yayafit.es/sobre-yayafit/` |

**Fuente única de verdad:** la barra se guarda como copia maestra en el repo
(`app/wordpress/barra-navegacion.html`). Cuando cambie (p. ej. añadir "Comunidad"), se
edita la maestra y se re-propaga a todas las piezas. La única variación por página es
qué botón va marcado como "activo".

---

## Componente: páginas índice (Rutinas y Bienestar)

Dos páginas nuevas que listan las entradas existentes como **tarjetas**:

```
┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐
│   [imagen/emoji]    │  │   [imagen/emoji]    │  │   [imagen/emoji]    │
│   Equilibrio        │  │   Fuerza en silla   │  │   Movilidad espalda │
│   Frase corta…      │  │   Frase corta…      │  │   Frase corta…      │
│   [ Ver rutina → ]  │  │   [ Ver rutina → ]  │  │   [ Ver rutina → ]  │
└─────────────────────┘  └─────────────────────┘  └─────────────────────┘
```

- Tarjeta = título + extracto (ya escrito en cada entrada) + botón coral "Ver rutina/Leer".
- Enlaza al permalink de cada entrada existente.
- HTML+CSS en línea, mismo lenguaje visual que la barra.
- Se actualiza a mano cuando se añadan entradas nuevas (escala pequeña: 5 y 3 piezas).

---

## Inventario de trabajo

**Crear (2 páginas nuevas):**
- Página **Rutinas** (`/rutinas/`) — índice con 5 tarjetas.
- Página **Bienestar** (`/bienestar/`) — índice con 3 tarjetas.

**Editar para añadir la barra (todas las piezas públicas):**
- Páginas: Inicio (9), Música (20), Sobre YayaFit (8), Himno (14), las 2 nuevas.
- Entradas: 5 rutinas (32-36) + 3 artículos (37-39).

**Reorganizar:**
- Fundir "Cómo funciona" (10) dentro de "Sobre YayaFit" (8); quitar 10 del menú.
- Enlazar "Himno" (14) desde "Música" (20); quitar 14 del menú.

---

## Cómo se construye (mecánica)

- Todo por **REST API** (`/wp-json/wp/v2/pages` y `/posts`) con la Application Password de
  Raúl (rol Editor). Claude ejecuta; Raúl aprueba.
- Payloads JSON en archivos UTF-8 enviados con `curl --data @archivo` (gotcha UTF-8).
- La barra y las páginas índice se versionan en el repo (`app/wordpress/`) como fuente de
  verdad antes de subirlas.

---

## Fases

- **Fase 1 — Navegación viva (objetivo inmediato):** crear las 2 páginas índice +
  incrustar la barra en todas las piezas + reorganización. Resultado: desde cualquier
  página se llega a las 5 secciones.
- **Fase 2 — Pulir Inicio:** convertir la portada en un hub (hero + 4 pilares + tarjetas),
  con los textos ya escritos en `app/content/paginas/inicio.md`.
- **Fase 3 — Pulir secciones:** imágenes de portada en rutinas/artículos, tarjetas con foto.
- **Fase 4 (futuro, requiere Admin):** Comunidad (registro, comentarios, grupos/plugins).

---

## Verificación

Tras la Fase 1, comprobar en vivo (vía `Invoke-WebRequest` al HTML público):
1. La barra aparece en las 5 secciones + en una entrada de rutina y una de bienestar.
2. Los 5 enlaces del menú resuelven a la URL correcta (sin 404).
3. El resaltado de "sección activa" es correcto en cada página.
4. Revisión en móvil (botones grandes, no se descuadra) — Raúl lo confirma desde el teléfono.

---

## Fuera de alcance (YAGNI)

- Menú hamburguesa / mega-menús.
- Buscador, filtros por categoría, paginación de entradas.
- Cualquier feature de Comunidad (registro, login, comentarios, perfiles) → Fase 4.
- Cambiar el tema o tocar el Personalizador (requiere Admin).
- Rediseño visual global de marca (tipografía/logo) más allá de la barra y las tarjetas.
