# Prompt — Página Rutinas YayaFit (héroe / imagen destacada)

> Plantilla para generar la imagen de la página **Rutinas** (`/rutinas/`) siguiendo la
> guía de marca. Tratamiento **realista cálido** (no editorial vibrante): luz natural,
> entorno cotidiano y creíble. Ver [`guia-estilo-yayafit-v1.md`](guia-estilo-yayafit-v1.md)
> § 3 (Fotografía → "Realista cálido" para contenido del día a día). Fecha: 2026-06-05.
> Imagen generada y en uso: [`images/rutinas.jpg`](images/rutinas.jpg).

## Enfoque

- **Casting innegociable:** mujeres 60–75 que se ven de su edad (pelo cano/blanco, cuerpos
  reales y diversos), alegres, fuertes y dignas, en movimiento real. Nunca frágiles ni de stock.
- **Color:** base lavanda (`#F3ECFA`, `#CDB6E3`); **fucsia `#D63E78` solo como acento**
  (esterilla, banda, detalle de ropa), nunca como fondo grande.
- **Luz:** natural cálida de atardecer/dorada, entorno cotidiano (estudio luminoso, casa, parque).
- **Proporción:** 3:2 (`1536 × 1024`) para héroe, o 16:9 si va de banner.

## Prompt principal (inglés — pégalo en Leonardo)

```
Warm, natural-light editorial lifestyle photograph for "YayaFit", a joyful wellness
community for women aged 60 to 75. A small group of two or three vital, radiant older
women with silver and grey natural hair and real, diverse body types, smiling with genuine
joy and quiet strength, doing a gentle guided exercise together — light balance work and
chair-supported movement, soft stretching — in a bright, airy, welcoming studio with
large windows and warm golden-hour daylight. Calm lavender tones in the space
(#F3ECFA, #CDB6E3) with small warm fuchsia accents (#D63E78) on a yoga mat and a top.
Authentic candid moment, real movement, dignified and confident, never frail, never
posed like a stock photo. Soft warm sunset color grade, gentle film grain, shallow
depth of field, premium lifestyle magazine aesthetic, lots of clean, airy space.
No text, no logos, no letters.
```

## Negative prompt

```
young women, models under 55, glossy stock-photo look, stiff catalog poses, fake smiles,
clinical or medical setting, fragile or sad elderly stereotype, wheelchair, harsh neon,
oversaturated fuchsia background, cluttered busy background, text, words, letters,
watermark, logo, deformed hands, extra fingers, low resolution, jpeg artifacts
```

## Ajustes en Leonardo

- **Modelo:** fotográfico/realista (Leonardo Phoenix o Lifelike/Photoreal), no ilustración.
- **PhotoReal / Alchemy:** activado.
- **Proporción:** 3:2 (`1536 × 1024`) o 16:9. Genera 3–4 variaciones y elige el casting más creíble.

## Variar por tarjeta (una imagen por rutina)

Usa el mismo prompt base y cambia solo la frase de la acción (`— ... —`):

| Tarjeta | Acción |
|---|---|
| Equilibrio | `a standing balance exercise beside a sturdy chair, one hand lightly on the chair back, focused and confident` |
| Fuerza con silla | `gentle seated-and-standing strength moves using a sturdy chair, with a soft fuchsia resistance band` |
| Movilidad de espalda (mañanas) | `a gentle morning spine-and-back stretch by a sunny window, cozy fresh morning mood` |
| Cardio: caminar | `brisk, purposeful walking together outdoors in a sunny green park at golden hour, warm light` |
| Yoga / calma | `slow restorative yoga and calm breathing on mats, serene warm evening light` |

## Notas de marca

- **Fucsia = solo acento.** Si sale como fondo grande, regenera: cansa la vista del público 60–75.
- Descarta cualquier resultado con cara "de catálogo" o mujeres que aparenten menos de 55.
