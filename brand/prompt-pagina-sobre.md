# Prompt — Sección "Sobre YayaFit" / Quiénes somos (héroe)

> Plantilla para generar la imagen del bloque **"Sobre YayaFit"** de la home.
> Sustituye la foto actual (mujer joven en postura de yoga) que **rompe la coherencia
> de marca**: YayaFit es *"la comunidad de la segunda juventud"* → el protagonista debe
> ser **la comunidad** (mujeres 60–75), no una modelo joven aislada. Tratamiento
> **realista cálido** (no editorial vibrante), igual que Rutinas: luz natural, entorno
> cotidiano y creíble. Ver [`guia-estilo-yayafit-v1.md`](guia-estilo-yayafit-v1.md)
> § 3 (Fotografía → "Realista cálido"). Fecha: 2026-06-05.

## Enfoque

- **Por qué cambia:** una sección "Quiénes somos" debe transmitir **comunidad y pertenencia**,
  no ejercicio individual. Quitamos a la chica joven estirando.
- **Casting innegociable:** mujeres 60–75 que se ven de su edad (pelo cano/blanco/plateado,
  cuerpos reales y diversos), alegres, fuertes y dignas. Grupo de **3–4** como amigas.
  Nunca frágiles ni de stock.
- **Color:** base lavanda (`#F3ECFA`, `#CDB6E3`); **fucsia `#D63E78` solo como acento**
  (un detalle de ropa), nunca como fondo grande.
- **Composición:** protagonistas a la **derecha**; **tercio izquierdo limpio y claro**
  (ahí van el título "Sobre YayaFit", el texto y el botón "Read More").
- **Proporción:** 3:2 (`1536 × 1024`) o 16:9 si va como banner ancho.

## Prompt principal (inglés — pégalo en Leonardo)

```
Warm, natural-light documentary lifestyle photograph for the "About us" section of
"YayaFit", a joyful wellness community for women in their second youth, aged 60 to 75.
A genuine, heartfelt group of three or four vital, radiant older women with silver, grey
and white natural hair and real, diverse body types, together as close friends — laughing,
talking and sharing a warm candid moment of belonging and community, full of strength,
dignity and joy, never frail and never posed like a stock photo. Bright, airy, welcoming
space with large windows and soft warm golden-hour daylight. Calm lavender tones in the
setting (#F3ECFA, #CDB6E3) with small warm fuchsia accents (#D63E78) on clothing or a small
detail. The women are composed toward the right side of the frame; the left third is kept
clean, light, luminous and uncluttered with soft negative space for a title and text.
Authentic candid connection, real expressions, premium lifestyle magazine aesthetic, soft
warm sunset color grade, gentle film grain, shallow depth of field, lots of clean airy space.
No text, no logos, no letters.
```

## Variante (una sola protagonista, más cercana al layout actual)

> Si prefieres mantener una sola persona (como ahora), cambia el grupo por una mujer madura
> digna y vital. Reemplaza la frase del sujeto por:

```
A single vital, radiant older woman aged 65 to 75 with silver-grey natural hair and a real,
warm body, smiling with genuine calm joy and quiet strength, sitting or standing relaxed in
a welcoming bright space, conveying confidence and belonging — never frail, never a stock pose.
```

## Negative prompt

```
young woman, single young model, models under 55, teenager, child, yoga stretch pose,
contortion, glossy stock-photo look, stiff catalog poses, fake smiles, clinical or medical
setting, fragile or sad elderly stereotype, wheelchair, harsh neon, oversaturated fuchsia
background, cluttered busy background, dark heavy left side, text, words, letters, watermark,
logo, signature, deformed hands, extra fingers, low resolution, jpeg artifacts
```

## Ajustes en Leonardo

- **Modelo:** fotográfico/realista (Leonardo Phoenix o Lifelike/PhotoReal), no ilustración.
- **PhotoReal / Alchemy:** activado · **Guidance ~7**.
- **Proporción:** 3:2 (`1536 × 1024`) o 16:9. Genera 3–4 variaciones y elige el casting más creíble
  y con el **tercio izquierdo más limpio** (ahí va el texto blanco/oscuro del bloque).
- **Coherencia:** opcional, sube `images/rutinas.jpg` como referencia de *Style* al 25–35 %
  para mantener el "aire de familia" del tratamiento realista cálido.

## Notas de marca

- **Fucsia = solo acento.** Si sale como fondo grande, regenera: cansa la vista del público 60–75.
- Descarta cualquier resultado con cara "de catálogo" o mujeres que aparenten menos de 55.
- El título "Sobre YayaFit" y el botón se ponen después en WordPress; por eso el negative excluye
  letras y se deja la izquierda despejada.
