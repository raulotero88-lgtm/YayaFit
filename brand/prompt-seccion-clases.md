# Prompt — Sección "Nuestras Clases" (3 tarjetas)

> Plantilla para las **3 imágenes de tarjeta** del bloque "Nuestras Clases" de la home.
> Sustituye las fotos actuales (mujeres jóvenes en posturas de yoga avanzadas / contorsión)
> que **rompen la marca**: el casting debe ser la comunidad **60–75**, con **movimiento
> sencillo y alcanzable**, nunca acrobacias. Tratamiento **realista cálido**, igual que
> [`prompt-pagina-rutinas.md`](prompt-pagina-rutinas.md). Ver
> [`guia-estilo-yayafit-v1.md`](guia-estilo-yayafit-v1.md) § 3. Fecha: 2026-06-05.

## Enfoque

- **Tres clases distintas** para que la fila muestre variedad: Yoga suave · Fuerza con silla · Baile.
- **Casting innegociable:** mujeres 60–75 reales (pelo cano/plateado, cuerpos diversos), alegres,
  fuertes y dignas. **Ojos abiertos, despiertos y con brillo (catchlights)** — nunca mirada perdida.
- **Movimiento sencillo y alcanzable** (nada de contorsión, equilibrios extremos ni invertidas).
- **Color:** base lavanda (`#F3ECFA`, `#CDB6E3`); **fucsia `#D63E78` solo como acento** (esterilla,
  banda, detalle de ropa), nunca como fondo grande.
- **Coherencia de set:** las 3 con **mismo ratio, misma luz y mismo encuadre** para que la fila case.
- **Proporción:** **16:9** — las cajas reales del tema (vw-yoga-fitness) son `317 × 179 px`.
  Genera en 16:9 (p. ej. `1280 × 720`) y sube a ese tamaño; el tema **recorta al centro** a
  `317 × 179`, así que deja a las protagonistas **centradas**. Mismo tamaño en las tres.

## Base común (no la cambies entre tarjetas)

```text
Warm, natural-light lifestyle photograph for a class card of "YayaFit", a joyful wellness
community for women aged 60 to 75. [ACCIÓN]. Vital, radiant older women with silver and grey
natural hair and real, diverse body types, smiling with genuine joy and quiet strength.
Bright, clear, fully open and alert eyes with a focused present gaze and sharp natural
catchlights, healthy expressive eyes. Bright, airy, welcoming studio with large windows and
warm golden-hour daylight. Calm lavender tones (#F3ECFA, #CDB6E3) with small warm fuchsia
accents (#D63E78) on a mat or top. Gentle, simple, achievable movement, dignified and
confident, never frail, never posed like a stock photo. Soft warm color grade, gentle film
grain, shallow depth of field, premium lifestyle magazine aesthetic, clean balanced
16:9 horizontal composition with the women centered for a safe center crop.
No text, no logos, no letters.
```

> Sustituye `[ACCIÓN]` por la frase de cada tarjeta:

### Tarjeta 1 — Yoga suave y respiración

```text
Two older women on yoga mats doing a gentle, simple seated forward stretch and calm breathing,
serene, relaxed and grounded
```

### Tarjeta 2 — Fuerza y equilibrio con silla

```text
An older woman doing a gentle standing strength and balance exercise beside a sturdy chair,
one hand lightly resting on the chair back, focused and confident, with a soft fuchsia
resistance band
```

### Tarjeta 3 — Baile en grupo

```text
A small group of three older women dancing together with pure joy, arms gently raised,
laughing, light and playful movement
```

## Negative prompt (igual para las 3)

```text
extreme yoga contortion, advanced acrobatic pose, headstand, handstand, backbend, splits,
pretzel pose, inverted pose, young women, models under 55, teenager, blind eyes, clouded eyes,
vacant glassy stare, no catchlights, half-closed eyes, crossed eyes, glossy stock-photo look,
stiff catalog poses, fake smiles, clinical or medical setting, fragile or sad elderly
stereotype, wheelchair, walking frame, harsh neon, oversaturated fuchsia background, cluttered
busy background, text, words, letters, watermark, logo, deformed hands, extra fingers,
low resolution, jpeg artifacts
```

## Ajustes en Leonardo

- **Modelo:** fotográfico/realista (Leonardo Phoenix o Lifelike/PhotoReal), no ilustración.
- **PhotoReal / Alchemy:** activado · **Guidance ~7**.
- **Proporción:** **16:9** en las 3 (genera `1280 × 720`; el tema recorta a `317 × 179`).
- **Coherencia de set:** sube [`images/rutinas.jpg`](images/rutinas.jpg) como referencia de *Style*
  al **25–35 %** en las tres → mantiene el "aire de familia" (luz, color, casting) sin clonar.
- Genera 3–4 variaciones por tarjeta y elige las que mejor encajen entre sí.

## Notas de marca

- **Fucsia = solo acento.** Si sale fondo fucsia grande, regenera.
- Descarta caras "de catálogo", mujeres que aparenten <55, contorsiones o miradas perdidas.
- En primeros planos vigila los ojos: si una toma está casi perfecta pero falla un ojo,
  retoca con **Canvas / inpainting** en vez de regenerar entera.
