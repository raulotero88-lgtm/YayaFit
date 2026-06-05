# 🎵 Canciones YayaFit

Índice de la música del proyecto. **Una carpeta por canción**, numeradas por orden de la playlist.
Dentro de cada carpeta están el audio, la portada y, en `creacion/`, los documentos de producción (plan, prompts, etc.).

| # | Canción | Estado | Carpeta |
|---|---------|--------|---------|
| 01 | **Segunda Juventud** | Publicada en `yayafit.es/himno/` | [`01-segunda-juventud/`](01-segunda-juventud/) |
| 02 | **Corazón Poderoso** | Lista para publicar en `/musica/` | [`02-corazon-poderoso/`](02-corazon-poderoso/) |
| 03 | **Libre** | Publicada en `yayafit.es/musica/` | [`03-libre/`](03-libre/) |
| 04 | **Siente el Ritmo** | Publicada en `yayafit.es/musica/` | [`04-siente-el-ritmo/`](04-siente-el-ritmo/) |
| 05 | **Pasito a Paso** | Letra y prompts listos · pendiente de generar en Suno | [`05-pasito-a-paso/`](05-pasito-a-paso/) |

## Estructura de cada carpeta

```
NN-nombre/
├── <Nombre> - YayaFit.mp3          ← audio (a veces también .wav / .flac)
├── Portada <Nombre> - YayaFit.jpg  ← portada
└── creacion/                       ← plan, prompts de Suno/Leonardo, índices
```

> Los nombres de los archivos de audio y portada se mantienen en su forma "de distribución"
> (`<Nombre> - YayaFit.mp3`) a propósito, porque son los nombres con los que se publican.

## Utilidades

- [`scripts/embed_cover.py`](scripts/embed_cover.py) — incrusta la portada dentro del MP3 (metadatos).
- [`planning/`](planning/) — diseño de la playlist y notas de producción transversales.

## Cómo añadir una canción nueva

> **Paso 0 — Acordar ANTES de escribir.** Antes de inventar título o letra, preguntar al
> usuario y cerrar juntos: hueco en la playlist, género y BPM, concepto, título candidato,
> dirección de la letra y ganchos. **No se escribe título ni letra sin validar esto primero.**
> (Aprendido en la canción 05: escribir primero y luego iterar cuesta el doble.)

Con el concepto ya validado:

1. Escribir la letra siguiendo el [manual de estilo](../academic/tarea-b-tono-persona/manual-estilo-yayafit.md)
   y pasarla por `/humanizer` (paso obligatorio antes de generar).
2. Crear la carpeta `NN-nombre/` (slug = título) con una subcarpeta `creacion/`, y generar
   **de una vez** los tres documentos de producción:
   - `AAAA-MM-DD-nombre-design.md` — spec (decisiones, estructura, ganchos, checklists).
   - `SUNO-COPIAR-PEGAR-Nombre.txt` — listo para pegar en Suno (style + title + lyrics).
   - `PROMPT-LEONARDO-Nombre.txt` — prompt de portada (paleta lila de marca).
3. Generar el audio en Suno y la portada en Leonardo; guardar `Nombre - YayaFit.mp3` y
   `Portada Nombre - YayaFit.jpg` en la carpeta. Incrustar la portada con
   [`scripts/embed_cover.py`](scripts/embed_cover.py).
4. Añadir una fila a la tabla de arriba.
5. Publicarla en `/musica/` de yayafit.es (ver [`app/wordpress/desarrollo-wordpress.md`](../app/wordpress/desarrollo-wordpress.md)).
