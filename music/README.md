# 🎵 Canciones YayaFit

Índice de la música del proyecto. **Una carpeta por canción**, numeradas por orden de la playlist.
Dentro de cada carpeta están el audio, la portada y, en `creacion/`, los documentos de producción (plan, prompts, etc.).

| # | Canción | Estado | Carpeta |
|---|---------|--------|---------|
| 01 | **Segunda Juventud** | Publicada en `yayafit.es/himno/` | [`01-segunda-juventud/`](01-segunda-juventud/) |
| 02 | **Corazón Poderoso** | Lista para publicar en `/musica/` | [`02-corazon-poderoso/`](02-corazon-poderoso/) |
| 03 | **Libre** | Publicada en `yayafit.es/musica/` | [`03-libre/`](03-libre/) |
| 04 | **Siente el Ritmo** | Publicada en `yayafit.es/musica/` | [`04-siente-el-ritmo/`](04-siente-el-ritmo/) |

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

1. Crear carpeta `NN-nombre/` con el siguiente número de la playlist.
2. Meter dentro el MP3, la portada y una subcarpeta `creacion/` con los documentos de producción.
3. Añadir una fila a la tabla de arriba.
4. Publicarla en `/musica/` de yayafit.es (ver [`app/wordpress/desarrollo-wordpress.md`](../app/wordpress/desarrollo-wordpress.md)).
