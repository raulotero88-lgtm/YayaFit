# Prompt — Página Música YayaFit (cabecera)

> Plantilla para generar la imagen de la página **Música** (`/musica/`). Tratamiento
> **editorial vibrante**: hereda el sistema visual de las portadas de canciones
> (*Segunda Juventud* / *Siente el Ritmo*) — motivo del sol/halo semicircular, paleta
> lila-violeta con destellos fucsia, luz dorada de domingo, acabado cinematográfico glossy
> y saturado. Ver [`guia-estilo-yayafit-v1.md`](guia-estilo-yayafit-v1.md) § 3 (Fotografía
> → "Editorial vibrante" para héroes/portadas). Fecha: 2026-06-05.

## Enfoque

- **Casting:** mujeres 60–75 vitales (pelo plateado, cuerpos reales y diversos) bailando y
  moviéndose con alegría, en comunidad. Fuerza, dignidad, celebración.
- **Color:** aquí **sí va vibrante y saturado** — lila/violeta de marca con realces fucsia
  `#D63E78` y rosa suave, calentado por luz dorada. (Es la familia editorial vibrante, lo
  contrario que las rutinas.)
- **Motivo de marca:** sol/halo semicircular detrás de las protagonistas + acabado glossy.
- **Proporción:** 16:9 (`1472 × 704`) para cabecera; o 1:1 (`3000×3000`) como emblema cuadrado.

## Prompt principal (inglés — pégalo en Leonardo)

```
Cinematic wide website hero banner for the music page of "YayaFit", a joyful wellness
community for women aged 60 to 75. A vibrant, celebratory scene of three or four radiant
older women with silver and grey natural hair and real, diverse bodies, dancing and
moving together to music with pure joy — arms raised, fingers clicking, big genuine
open-mouthed smiles, bright alive eyes — full of strength, dignity and warm community.
Golden Sunday-morning light streaming through a large window in a warm, sunlit room.
A large soft glowing semicircular halo of light rises behind them (the YayaFit sun motif).
Bold YayaFit lilac palette: rich lavender and violet purple with soft pink and warm
fuchsia #D63E78 highlights, warmed by glowing golden sunlight; floating glitter and gentle
mirror-ball light flecks drifting through the air for a feel-good disco-pop sparkle.
High saturation, glossy modern cinematic finish, soft volumetric backlight, dreamy haze,
premium music-cover aesthetic. Composition kept open and uncluttered toward the left for
a title and menu. No text, no logos, no letters.
```

## Negative prompt

```
young woman, child, teenager, man, men, models under 55, sad or gloomy face, tired, dark,
desaturated, dull colors, washed out, blurry faces, deformed hands, extra fingers, mutated
fingers, text, letters, words, watermark, logo, signature, distorted face, cartoonish,
plastic skin, cluttered gym equipment, harsh fluorescent lighting, low resolution
```

## Ajustes en Leonardo

- **Modelo:** Leonardo Phoenix o Leonardo Diffusion XL.
- **Preset Style:** Cinematic / Dynamic · **Alchemy** activado · **Guidance ~7**.
- **Proporción:** 16:9 (`1472 × 704`) para cabecera; 1:1 (`3000×3000`) para emblema.
- **Coherencia:** sube como referencia de *Style* la portada de *Siente el Ritmo* o
  *Segunda Juventud* al 30–40 % para mantener el "aire de familia" sin copiarla.

## Notas de marca

- El título "Música YayaFit" se añade después en WordPress (Leonardo no escribe texto fiable);
  por eso se deja la izquierda despejada y el negative excluye letras.
- Guiño musical opcional y con moderación: `subtle floating music notes and soft light streaks`.
