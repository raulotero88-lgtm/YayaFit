# Spec: Canción 04 YayaFit — "Siente el Ritmo"

**Fecha:** 2026-06-04
**Estado:** Letra y prompt listos · pendiente de generar en Suno + pasar por `/humanizer`
**Carpeta de proyecto:** `music/04-siente-el-ritmo/`

---

## Contexto

Cuarta canción del proyecto musical de YayaFit. Llena el hueco que faltaba en la
playlist: la canción de **pura alegría y baile**. No es el himno (01 *Segunda Juventud*),
ni la de fuerza (02 *Corazón Poderoso*), ni la serena (03 *Libre*). Es la de **domingo
por la mañana, subir el volumen y bailar en el salón**.

El tono sigue el manual de estilo YayaFit: cercano, motivador, concreto, comunidad.
Sin palabras prohibidas, sin lenguaje corporativo, tuteo siempre.

---

## Decisiones de diseño

| Parámetro | Decisión |
|-----------|----------|
| Título | Siente el Ritmo |
| Género | Disco-pop / Nu-disco |
| BPM | 118 (rango "happy/joyful" 110-130 de la guía interna; bailable) |
| Idioma | Español (España) |
| Vocal | Voz femenina luminosa y potente |
| Duración target | ~3:00 - 3:30 |
| Uso principal | Playlist feel-good / calentamiento alegre / baile suave |
| Uso secundario | Vídeos de comunidad, redes |
| Concepto | "Siente el ritmo": la música como chispa que te enciende y te levanta del sofá; el ritmo manda y el cuerpo responde |

---

## Style prompt (Suno V5)

```text
Disco-pop, nu-disco, 118 BPM, joyful and uplifting, bright string section, funky slap bass, four-on-the-floor kick, open hi-hats, handclaps, shimmering clean rhythm guitar, glittery synths, powerful luminous female vocals, Spanish lyrics, danceable feel-good groove, polished retro-modern production, no harsh distortion, no harsh distorted guitars, sunny Sunday morning energy
```

**Por qué cada elemento:**
- **Disco-pop / nu-disco** — género que da el "baile dominguero" sin repetir el electropop de 01/03.
- **118 BPM** — alegre y bailable, un punto por debajo del himno (120) para diferenciar.
- **Bright string section + funky slap bass + four-on-the-floor** — el ADN disco: cuerdas brillantes, bajo que mueve, bombo a negras.
- **Handclaps + open hi-hats + shimmering clean rhythm guitar** — la textura que pide el cuerpo bailar.
- **Powerful luminous female vocals** — coherente con la voz de marca de las otras canciones.
- **no harsh distortion / no harsh distorted guitars** — mantiene el sonido limpio y luminoso (la guitarra funky limpia sí; distorsión dura no).

---

## Letra completa con metatags

> Versión v1 (ya escrita en fraseo natural). **Pendiente de pasar por `/humanizer`**
> antes de generar en Suno, según el checklist de marca.

```text
[Intro]
[Mood: Uplifting]
[Energy: Medium]
[Instrument: Bright strings, four-on-the-floor, funky bass]

[Verse 1]
[Vocal Style: Open, Confident]
Domingo por la mañana,
el sol entra a saludar.
Suena algo en la radio
y los pies quieren bailar.

No sé qué tiene esa nota,
que me saca del sofá.
Me sé la letra de memoria
sin tener que ensayar.

[Pre-Chorus]
[Energy: Rising]
Sube, sube, sube el volumen,
que hoy el día es para mí.

[Chorus]
[Energy: High]
[Vocal Style: Power]
Siente el ritmo
y ya no puedo parar.
Siente el ritmo,
me levanta sin pensar.
(¡Sin pensar!)
Siente el ritmo,
todo el cuerpo dice "¡ya!".
Pongo el salón a bailar,
¡siente el ritmo!

[Verse 2]
[Vocal Style: Open, Confident]
[Energy: Medium]
Llamo a todas mis amigas,
que esto hay que celebrar.
La cocina es una pista
y la vida un ventanal.

Aquí nadie mira el reloj,
hoy el tiempo va al revés.
Si la radio me lo pide,
yo me pongo de pie.

[Pre-Chorus]
[Energy: Rising]
[Callback: continue with same vibe as chorus]
Sube, sube, sube el volumen,
que hoy el día es para mí.

[Chorus]
[Energy: High]
[Vocal Style: Power]
Siente el ritmo
y ya no puedo parar.
Siente el ritmo,
me levanta sin pensar.
(¡Sin pensar!)
Siente el ritmo,
todo el cuerpo dice "¡ya!".
Pongo el salón a bailar,
¡siente el ritmo!

[Bridge]
[Mood: Triumphant]
[Energy: Building]
[Instrument: Full strings, claps, funky bass up front]
Que suene fuerte, que se oiga,
que lo baile el portal.
Tengo años de buen ritmo
y aún me sé soltar.
No hay edad para esta fiesta,
solo ganas y compás.

[Breakdown]
[Energy: Drop to medium]
[Instrument: Bass and handclaps only]
[Vocal Style: Playful]
Solo el bajo y mis palmas...
(eh, eh, eh)
ya vuelve, ya vuelve...
(¡otra vez!)

[Chorus - Final]
[Energy: Maximum]
[Vocal Style: Belt]
[crowd sings]
Siente el ritmo
y ya no puedo parar.
Siente el ritmo,
me levanta sin pensar.
(¡Sin pensar!)
Siente el ritmo,
todo el cuerpo dice "¡ya!".
Pongo el salón a bailar,
¡siente el ritmo!

[Outro]
[Mood: Joyful]
[Fade Out]
Siente el ritmo...
(YayaFit, a bailar)
y ya no puedo parar...
(el ritmo, el ritmo...)
```

---

## Estructura de energía

| Sección | Energy tag | Nota |
|---------|-----------|------|
| Intro | Medium | Cuerdas + bombo, entra el groove |
| Verso 1 | Medium | Voz abierta, narrativa "domingo" |
| Pre-coro | Rising | "Sube el volumen" |
| Coro | High | Gancho "Siente el ritmo" |
| Verso 2 | Medium | Comunidad: las amigas |
| Pre-coro | Rising | Callback al coro |
| Coro | High | Repetición |
| Bridge | Building / Triumphant | "No hay edad para esta fiesta" |
| Breakdown | Drop a medium | Bajo + palmas, tensión |
| Coro final | Maximum / Belt | crowd sings |
| Outro | Fade Out | Cierre con guiño YayaFit |

---

## Ganchos principales

- **Coro:** "Siente el ritmo / y ya no puedo parar / me levanta sin pensar"
- **Pre-coro:** "Sube, sube, sube el volumen / que hoy el día es para mí"
- **Bridge:** "No hay edad para esta fiesta / solo ganas y compás"

---

## Checklist de marca YayaFit

- [x] Sin palabras prohibidas (sin "increíble", "empoderar", "optimizar", "holístico")
- [x] Sin "tercera edad" / "seniors" — edad en positivo ("tengo años de buen ritmo")
- [x] Frases cortas, una idea por línea, 6-12 sílabas
- [x] Concreto: "del sofá", "la cocina", "el portal", "la radio"
- [x] Comunidad presente: "llamo a todas mis amigas"
- [x] Tono alegre, aspiracional, sin culpabilizar
- [x] Tuteo / primera persona cercana
- [ ] **Pasar por `/humanizer`** (paso final obligatorio en comunicación a usuarias)

---

## Checklist de producción Suno V5

- [ ] Pasar la letra por `/humanizer` y volcar el resultado en el archivo de copiar-pegar
- [ ] Generar 3-4 versiones con el style prompt en Custom Mode
- [ ] Seleccionar la mejor por groove, claridad vocal y pegada del gancho
- [ ] Verificar BPM en songbpm.com (target 118 ±5)
- [ ] Aplicar Remaster (Subtle)
- [ ] Comprobar duración (~3:00-3:30); Extend con callback si < 2:30
- [ ] Exportar WAV 16-bit/44.1kHz (distribución) + MP3 320kbps (preview/web)
- [ ] Verificar que no hay artefactos
- [ ] Guardar `Siente el Ritmo - YayaFit.mp3` en `music/04-siente-el-ritmo/`

---

## Portada (prompt para Leonardo / generador de imagen)

Prompt final completo en `PROMPT-LEONARDO-Siente-el-Ritmo.txt` (mismo formato que
el de "Libre"). Decisiones tomadas con referencias del usuario:

- **Composición:** heroína bailando en primer plano + amigas bailando detrás
  (sala luminosa, ladrillo, luz dorada de domingo). Protagonista clara como en el
  resto del álbum, con la comunidad presente.
- **Paleta:** lila/morada de marca (ver `brand/`), no el magenta-coral de "Libre".
- **Motivo de marca:** halo/sol semicírculo + acabado glossy saturado.
- El título se añade en post (Leonardo no escribe texto fiable); se deja espacio
  limpio abajo y el negative prompt excluye texto.

---

## Lugar en la playlist

Curva de energía de la app (de la guía interna de BPM):

1. **Libre** (100, vuelta a la calma / yoga)
2. **Siente el Ritmo** (118, calentamiento alegre / feel-good) ← nueva
3. **Segunda Juventud** (120, himno)
4. **Corazón Poderoso** (alta, cardio)

---

## Notas

- Publicar en `yayafit.es/musica/` tras producir (ver `app/wordpress/desarrollo-wordpress.md`).
- Estructura de archivos según `music/README.md`.
- Título anterior de trabajo: "Suena la Canción" (descartado a favor de "Siente el Ritmo").
