# Spec: Himno YayaFit — "Segunda Juventud"

**Fecha:** 2026-05-30
**Estado:** Aprobado, listo para producción en Suno V5
**Carpeta de proyecto:** `CANCIONES YAYAFIT/`

---

## Contexto

YayaFit es una app de fitness y comunidad para mujeres de 60-75 años. Este himno es la primera canción del proyecto musical de la marca. Su función principal es la **playlist de la app** (música durante rutinas), con uso secundario en vídeos de rutinas.

El tono sigue el manual de estilo YayaFit: cercano, motivador, concreto. Sin palabras prohibidas. Sin lenguaje corporativo.

---

## Decisiones de diseño

| Parámetro | Decisión |
|-----------|----------|
| Título | Segunda Juventud |
| Género | Electropop |
| BPM | 120 |
| Idioma | Español |
| Vocal | Voz femenina potente |
| Duración target | ~3.5 minutos |
| Uso principal | Playlist rutinas app |
| Uso secundario | Vídeos de rutinas |

---

## Style prompt Suno V5

```
Electropop, 120 BPM, uplifting, warm synth pads, four-on-the-floor kick, bright melodic hooks, powerful female vocals, Spanish lyrics, polished production, no harsh distortion, no guitars
```

---

## Letra completa con metatags

```
[Intro]
[Mood: Uplifting]
[Energy: Medium]
[Instrument: Synth Pads]

[Verse 1]
[Vocal Style: Open, Confident]
Me levanto cada mañana
Con ganas de moverme ya
No hay excusa que me frene
Este cuerpo quiere más

El ritmo ya me llama
No me puedo aguantar
Mis chicas me esperan
Vamos a por más

[Pre-Chorus]
[Energy: Rising]
Dime quién te mueve así
Dime quién te hace sentir
Solo hay una: YayaFit

[Chorus]
[Energy: High]
[Vocal Style: Power]
YAYAFIT
Mi tiempo es hoy
Me muevo, respiro
Y aquí estoy
(Aquí estoy, aquí estoy)
YAYAFIT
La vida sigue~
YayaFit, YayaFit

[Verse 2]
[Vocal Style: Open, Confident]
[Energy: Medium]
Somos miles las que un día
Dijimos "esto es para mí"
Cada reto nos une más
Esto es nuestro, es así

No buscamos la perfección
Buscamos movernos bien
Con amigas que nos ven
Y nos dicen "tú puedes"

[Pre-Chorus]
[Energy: Rising]
[Callback: continue with same vibe as chorus]
Dime quién te mueve así
Dime quién te hace sentir
Solo hay una: YayaFit

[Chorus]
[Energy: High]
[Vocal Style: Power]
YAYAFIT
Mi tiempo es hoy
Me muevo, respiro
Y aquí estoy
(Aquí estoy, aquí estoy)
YAYAFIT
La vida sigue~
YayaFit, YayaFit

[Bridge]
[Mood: Triumphant]
[Energy: Rising]
[Instrument: Synth Pads]
Vivir de frente
Sentirte fuerte
YayaFit está aquí
Con tu gente
Siempre

[Drop]
[Energy: Maximum]

[Chorus]
[Vocal Style: Belt]
[Energy: Maximum]
YAYAFIT
Mi tiempo es hoy
Me muevo, respiro
Y aquí estoy
(Aquí estoy, aquí estoy)
YAYAFIT
La vida sigue~
YayaFit, YayaFit

[Outro]
[Fade Out]
YayaFit...
Aquí estoy...
(Aquí estoy...)
```

---

## Checklist de marca YayaFit

- Sin palabras prohibidas (no "empoderar", "increíble", "holístico", "optimizar") ✓
- Frases cortas, una idea por línea ✓
- Concreto: "me levanto", "mis chicas me esperan", "vamos a por más" ✓
- Comunidad presente: "somos miles", "con amigas", "con tu gente" ✓
- Sin mención a edad, sin "tercera edad", sin "seniors" ✓
- Tono aspiracional sin culpabilizar ✓

## Checklist de producción Suno V5

- [ ] Generar 3-4 versiones con el style prompt
- [ ] Seleccionar la mejor por claridad vocal y adherencia al BPM
- [ ] Verificar BPM con songbpm.com (target: 120 ±5)
- [ ] Aplicar Remaster (Subtle) para calidad uniforme
- [ ] Exportar WAV 16-bit/44.1kHz para distribución
- [ ] Exportar MP3 320kbps para preview
- [ ] Verificar que no hay artefactos de audio
- [ ] Confirmar que la estructura Intro > V1 > PreC > C > V2 > PreC > C > Bridge > Drop > C > Outro está completa

---

## Estructura de energía

| Sección | Energy tag | BPM efectivo |
|---------|-----------|--------------|
| Intro | Medium | 120 |
| Verso 1 | Medium | 120 |
| Pre-coro | Rising | 120 |
| Coro | High | 120 |
| Verso 2 | Medium | 120 |
| Pre-coro | Rising | 120 |
| Coro | High | 120 |
| Bridge | Triumphant / Rising | 120 |
| Drop | Maximum | 120 |
| Coro final | Maximum / Belt | 120 |
| Outro | Fade Out | 120 → 0 |

---

## Próximas canciones del proyecto

Una vez validado el himno, el plan es crear:

1. **Canción 2** — Electropop 128 BPM para cardio activo
2. **Canción 3** — Electropop 105 BPM para movilidad y vuelta a la calma
3. **Playlist completa** — Curva de energía de 30 minutos con las 3 canciones + transiciones
