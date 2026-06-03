# 🎵 Canciones YayaFit

Índice de la música del proyecto. **Una carpeta por canción**, numeradas por orden de la playlist.
Dentro de cada carpeta están el audio, la portada y los documentos de producción (plan, prompts, etc.).

| # | Canción | Estado | Carpeta |
|---|---------|--------|---------|
| 01 | **Segunda Juventud** | Publicada en `yayafit.es/himno/` | [`01-Segunda Juventud/`](01-Segunda%20Juventud/) |
| 02 | **Corazón Poderoso** | Lista para publicar en `/musica/` | [`02-Corazon Poderoso/`](02-Corazon%20Poderoso/) |
| 03 | **Libre** | Publicada en `yayafit.es/musica/` | [`03-Libre/`](03-Libre/) |

## Estructura de cada carpeta

```
NN-Nombre/
├── <Nombre> - YayaFit.mp3        ← audio (a veces también .wav / .flac)
├── Portada <Nombre> - YayaFit.jpg ← portada
└── *.md / *.txt                   ← plan, prompts de Suno/Leonardo, índices
```

## Utilidades

- [`_scripts/embed_cover.py`](_scripts/embed_cover.py) — incrusta la portada dentro del MP3 (metadatos).

## Cómo añadir una canción nueva

1. Crear carpeta `NN-Nombre/` con el siguiente número de la playlist.
2. Meter dentro el MP3, la portada y los documentos de producción.
3. Añadir una fila a la tabla de arriba.
4. Publicarla en `/musica/` de yayafit.es (ver [`WORDPRESS/DESARROLLO-WORDPRESS.md`](../WORDPRESS/DESARROLLO-WORDPRESS.md)).
