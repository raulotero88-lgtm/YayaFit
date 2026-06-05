# Prompt — Cabecera web YayaFit (banner del tema)

> Plantilla reutilizable para generar la **imagen de cabecera** del sitio (yayafit.es)
> siguiendo la guía de marca. Cierra el pendiente de [`guia-estilo-yayafit-v1.md`](guia-estilo-yayafit-v1.md)
> § 6 ("plantilla de prompt de Leonardo"). Fecha: 2026-06-05.

## Medida y enfoque

- **Tamaño final:** `1600 × 106 px` (≈ 15:1, franja ultra-ancha y bajita).
- A 106 px de alto **no caben rostros**: el protagonista es la **luz y el color de marca**.
  Las mujeres, si se incluyen, van como **siluetas/impresiones suaves** fundidas a la derecha.
- **Zona segura:** dejar el **tercio izquierdo limpio y claro** (ahí van el logo y el menú);
  el peso visual (sol, siluetas) va a la **derecha**.
- Marca: base **lavanda** (`#F3ECFA`, `#CDB6E3`) + acento **fucsia atardecer**
  (`#D63E78`, `#B12E62`) virando a cálido (`#F0653C`, `#FF9A3C`). Referencia de energía:
  la portada de *Segunda Juventud*. Mujeres 60–75 **vitales, fuertes y dignas** (pelo
  cano/blanco, cuerpos reales y diversos), nunca frágiles ni de catálogo.

## Prompt principal (con siluetas) — pégalo en Leonardo (inglés)

```
Ultra-wide cinematic website header banner, panoramic 15:1 horizontal band, for "YayaFit",
a joyful wellness community for women aged 60 to 75. Soft lavender base (#F3ECFA, #CDB6E3)
filling the left two-thirds and flowing into a warm golden-hour sunset gradient on the right:
deep plum #6E2C73 to vibrant fuchsia #D63E78 to warm coral #F0653C to soft gold #FF9A3C,
with a gentle glowing low sun on the right side. On the right third, gracefully blended into
the light, soft silhouettes and impressions of vital, radiant older women with silver and grey
hair and real, diverse bodies, in gentle movement — stretching, walking, dancing — full of
strength, joy and dignity, never frail. Left two-thirds calm, luminous and uncluttered with
clear negative space. Editorial, premium magazine aesthetic, smooth gradient, subtle film grain,
soft bokeh, warm sunset glow. No text, no logos, no letters.
```

## Variante abstracta (sin personas — la más segura a 106 px)

```
Ultra-wide minimalist website header band, panoramic 15:1, serene brand gradient from soft
lavender #F3ECFA and #CDB6E3 on the left into a warm sunset on the right: fuchsia #D63E78,
coral #F0653C, soft gold #FF9A3C, with a gentle glowing low sun and soft light streaks that
suggest calm movement. Atmospheric, premium, smooth, luminous, golden-hour mood. Left side kept
light and calm for logo legibility. No people, no text, no logos.
```

## Negative prompt (para ambas)

```
young women, models under 55, glossy stock-photo look, stiff catalog poses, clinical or medical
setting, fragile or sad elderly stereotype, wheelchair, harsh neon, cluttered busy background,
dark heavy left side, text, words, letters, watermark, logo, signature, deformed hands,
extra fingers, low resolution, jpeg artifacts
```

## Ajustes y recorte (importante)

- Leonardo y la mayoría de generadores **no dan 15:1** directo. Genera en el **ratio ancho
  más extremo disponible** (p. ej. *Custom* `1536 × 640` o `1472 × 704`, o 16:9) componiendo
  como **franja horizontal**, y luego **recorta/exporta a exactamente `1600 × 106 px`**.
- Mantén los elementos clave (sol, siluetas) **centrados verticalmente** para que el recorte
  no los pierda.
- Genera 3–4 variaciones y elige la que deje el **tercio izquierdo más limpio**.
- Comprueba que el texto blanco del menú (sobre la imagen) **se lee**; si la izquierda sale
  oscura, regenera o aclara esa zona.

## Para variar (rellena y repite)

- Estación/escena: `[parque al atardecer / estudio luminoso / costa / casa cálida]`
- Movimiento sugerido: `[caminar / estiramiento suave / baile / yoga / risas en grupo]`
- Intensidad del fucsia: `[sutil / media / vibrante]`
