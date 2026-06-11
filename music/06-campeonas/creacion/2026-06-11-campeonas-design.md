# Spec: Canción 06 YayaFit — "Campeonas"

**Fecha:** 2026-06-11
**Estado:** Letra y prompts listos · pendiente de generar en Suno
**Carpeta de proyecto:** `music/06-campeonas/`

---

## Contexto

Sexta canción del proyecto musical de YayaFit. Es el **himno mundialero épico**: las
YayaFitters viven el Mundial **a fuego** desde el barrio. No es el himno de identidad
(01 *Segunda Juventud*), ni la de fuerza (02 *Corazón Poderoso*), ni la serena
(03 *Libre*), ni el feel-good de domingo (04 *Siente el Ritmo*). Es la canción de
**pura euforia colectiva**: la peña, el salón convertido en grada, la bufanda, el gol
coreado por todas... y la copa levantada.

Encargo de Raúl: una canción del Mundial al estilo de los himnos mundialeros de Shakira
(*Waka Waka*, *La La La*), donde las yayas "lo viven a fuego". Tiene que ser **épica**.

**Gancho elegido:** voltear en femenino el cántico más famoso del fútbol español
—"Campeones, campeones, ¡oé, oé, oé!"— que el público de YayaFit (60-75) lleva
cantando toda la vida. Pegada instantánea + edad y género en positivo.

El tono sigue el manual de estilo YayaFit: cercano, motivador, concreto, comunidad.
Sin palabras prohibidas, sin lenguaje corporativo, tuteo y primera persona cercana.

---

## Evolución del título (historial de decisiones)

1. **"A Fuego"** (v1) — descartado como título; "a fuego" era buen grito pero no
   sostenía el coro él solo.
2. **"La Copa de la Yaya"** (v2, guiño a *La Copa de la Vida* de Ricky Martin) —
   descartado: el coro no tenía pegada musical (ver diagnóstico abajo).
3. **"Campeonas"** (final) — cántico real de estadio volteado en femenino. Épico
   y reconocible al instante.

### Diagnóstico de por qué v2 no funcionaba (lección de oficio)

- **Tres ganchos compitiendo** en un mismo coro ("la copa de la yaya" + "olé" +
  "¡a fuego!" + "¡gooool!"): ninguno se clavaba. Los himnos épicos repiten UN gancho.
- **Choque de vocales:** "ya-ya" remata en **á-a** pero las líneas de pago rimaban
  en **ó** ("gol", "pasión", "salón"). El coro peleaba consigo mismo fonéticamente.
- **"La vida es una copa"** era la metáfora de Ricky, no nuestra historia: caía de
  la nada, sin conexión con los versos del barrio.

**Receta aplicada en "Campeonas":** un solo gancho repetido, un solo raíl de vocal
en el coro (**o-a**: campe-**o**-n**a**s / c**o**p**a** / t**o**d**a**s), respuesta de
masa tras cada línea del gancho ("¡oé, oé, oé!") y acentos fuertes tipo cántico.

---

## Análisis de referencia (el ADN mundialero)

**No se nombran artistas en el prompt de Suno** (riesgo de copyright); el estilo se
replica describiendo género e instrumentación.

**"Waka Waka (This Time for Africa)" — Sudáfrica 2010 (Shakira)**
- Afro-pop / soca, ~127 BPM. Percusión tribal (djembe, congas), vientos brillantes,
  riff de marimba, silbatos, palmas.
- Voz femenina potente + coro de estadio en llamada-respuesta.
- Letra de garra y superación.

**"La La La (Brazil 2014)" — Brasil 2014 (Shakira)**
- Pop con percusión brasileña (samba-axé, batucada, surdo), actitud ganadora,
  energía de carnaval.

**"Dai Dai" — Mundial 2026 (Shakira + Burna Boy)** — la referencia de sonido PRINCIPAL.
- Himno oficial del Mundial 2026, presentado en la ceremonia inaugural (2026-06-11).
- **Afrobeats con tinte de reggaetón**, mid-tempo, hecho para bailar: percusión africana
  pesada, log drums, bajo profundo, horns como acentos, cánticos de estadio.
- Producción de Shakira con Benny Adam, Jon Bellion, Ed Sheeran y Alexander Castillo.
- Estribillo multilingüe ("Dai, dai, ikou, dale, allez, let's go").
- **Lección clave:** la pegada mundialera de 2026 no va de velocidad ni de orquesta;
  va de **groove y graves**.

**Cántico "Campeones, campeones, ¡oé, oé, oé!"** — el gancho del título.
- El canto de celebración más extendido del fútbol en español. Melodía que todo
  el público objetivo conoce de memoria. Aquí se voltea en femenino: **"¡Campeonas,
  campeonas!"** = las yayas levantando su copa.

**Patrón a clavar:** (1) UN hook de estadio que se canta sin pensar, (2) groove
afrobeats-reggaetón mid-tempo (~106 BPM) con percusión africana y bajo profundo,
(3) voz femenina potente con coros de masa en llamada-respuesta, (4) letra de garra +
celebración colectiva, (5) estructura que sube hasta el coro final con subida de tono.

---

## Decisiones de diseño (pactadas con Raúl)

| Parámetro | Decisión |
|-----------|----------|
| Título | Campeonas |
| Género | Afrobeats-reggaetón mundialero (el sonido de "Dai Dai", himno oficial 2026) |
| BPM | 106 (mid-tempo afrobeats: la pegada va de groove y graves, no de velocidad) |
| Idioma | Español (España) |
| Vocal | **Voz femenina** potente (tag `[Female Vocal]` front-loaded) + coros de masa mixta |
| Duración target | ~3:00 - 3:30 |
| Uso principal | Himno-fiesta de celebración / animar / vídeos de comunidad |
| Selección | **Mundial genérico, atemporal** (no se nombra ninguna selección → reutilizable cada Mundial) |
| Gancho | "¡Campeonas, campeonas! (¡oé, oé, oé!)" — cántico real de estadio en femenino |
| Épica | Key change (`[modulate up a key]`) en el coro final + crowd sings + belt |
| Concepto | Las YayaFitters viven el Mundial a fuego desde el barrio y levantan su propia copa: peña, salón hecho grada, bufanda, el gol coreado. Garra + celebración + comunidad, edad en positivo |

---

## Style prompt (Suno V5)

```text
Afrobeats reggaeton World Cup anthem, 106 BPM, vibrant and victorious, heavy African percussion, log drums, dembow-tinged rhythm section, deep rolling bassline, warm horn stabs, stadium crowd chants, powerful melodic female lead with Latin pop hooks and call-and-response crowd vocals, Spanish lyrics, global festive groove, polished modern production, no harsh distortion, no rock guitars, danceable sing-along energy
```

**Por qué cada elemento:**
- **Afrobeats reggaeton anthem** — la descripción exacta que la crítica hace de
  "Dai Dai" ("reggaetón-tinged Afrobeats").
- **106 BPM** — el mid-tempo bailable del afrobeats; la pegada de 2026 va de groove
  y graves, no de velocidad (el 126 anterior era el patrón de 2010).
- **Heavy African percussion + log drums + dembow** — la sección rítmica de "Dai Dai".
- **Deep rolling bassline** — los graves que pegan igual en altavoz de estadio que
  en auriculares.
- **Warm horn stabs** — los horns como acentos puntuales (no la orquesta de brass
  del Waka Waka de 2010).
- **Powerful melodic female lead with Latin pop hooks** — los ganchos melódicos marca
  de la casa de Shakira, en femenino como todo el catálogo YayaFit.
- **Stadium crowd chants + call-and-response crowd vocals** — el "oé, oé, oé" lo
  responde la masa.
- **no harsh distortion / no rock guitars** — sonido limpio y luminoso de marca.

> El key change del coro final se mantiene solo como metatag en la letra
> (`[modulate up a key]`); fuera del style prompt para no diluirlo.

---

## Letra completa con metatags

> Versión final, ya pasada por `/humanizer`. Lista para pegar en Suno.

```text
[Intro]
[Mood: Epic, Euphoric]
[Energy: Building]
[Female Vocal]
[Instrument: Afrobeats drums, log drums, deep bass, warm horns]

[Verse 1]
[Vocal Style: Open, Confident]
Se viste el barrio de fiesta,
cuelgo la bufanda al balcón.
El salón se vuelve grada
y arranca ya la función.

No me pierdo ni un minuto,
hoy el barrio es un clamor.
Que se oiga en cada esquina:
¡esta tarde juego yo!

[Pre-Chorus]
[Energy: Rising]
Ya retumba el barrio entero,
se oye un solo corazón...

[Chorus]
[Energy: High]
[Vocal Style: Power]
¡Campeonas, campeonas!
(¡oé, oé, oé!)
¡Esta copa es nuestra,
nos la llevamos todas!
(¡oé, oé, oé!)
¡Campeonas, campeonas!
Que lo cante el mundo entero:
¡las yayas, campeonas!

[Verse 2]
[Vocal Style: Open, Confident]
[Energy: Medium]
Llamo a todas mis amigas,
que la peña está al completo.
Suenan palmas y silbatos
y un rugido sale al cielo.

Aunque tiemblen los nervios,
yo no me bajo del sofá.
Si marcamos, salta todo:
¡el vecino bajará!

[Pre-Chorus]
[Energy: Rising]
[Callback: continue with same vibe as chorus]
Ya retumba el barrio entero,
se oye un solo corazón...

[Chorus]
[Energy: High]
[Vocal Style: Power]
¡Campeonas, campeonas!
(¡oé, oé, oé!)
¡Esta copa es nuestra,
nos la llevamos todas!
(¡oé, oé, oé!)
¡Campeonas, campeonas!
Que lo cante el mundo entero:
¡las yayas, campeonas!

[Bridge]
[Mood: Triumphant]
[Energy: Building]
[Instrument: Warm horns, heavy African drums, big claps]
No hay edad para este grito,
si caemos, ¡a la carga!
Tengo cuerda y tengo garra
y una peña que me canta.
Late el mundo en una pelota:
¡esta noche se gana en casa!

[Breakdown]
[Energy: Drop to medium]
[Instrument: African drums and handclaps only]
[Vocal Style: Playful]
(¡oé!... ¡oé!...)
¿Lo oís? Ya viene el barrio...
(¡oé, oé, oé!)
¡Cantadlo conmigo!

[Chorus - Final]
[modulate up a key]
[Energy: Maximum]
[Vocal Style: Belt]
[crowd sings]
¡Campeonas, campeonas!
(¡oé, oé, oé!)
¡Esta copa es nuestra,
nos la llevamos todas!
(¡oé, oé, oé!)
¡Campeonas, campeonas!
Que lo cante el mundo entero:
¡las yayas, campeonas!

[Outro]
[Mood: Euphoric]
[Fade Out]
Campeonas... campeonas...
(YayaFit, ¡campeonas!)
que lo cante el mundo entero...
(¡oé, oé, oé!...)
```

---

## Estructura de energía

| Sección | Energy tag | Nota |
|---------|-----------|------|
| Intro | Building | Percusión afro + bajo profundo + horns, entra el groove |
| Verso 1 | Open | El barrio se viste de fiesta, "esta tarde juego yo" |
| Pre-coro | Rising | "Ya retumba el barrio entero..." (lanza al cántico) |
| Coro | High | "¡Campeonas, campeonas!" + respuesta de masa "oé" |
| Verso 2 | Medium | Comunidad: las amigas, la peña, los silbatos |
| Pre-coro | Rising | Callback al coro |
| Coro | High | Repetición |
| Bridge | Building / Triumphant | Garra: "No hay edad para este grito" |
| Breakdown | Drop a medium | Solo tambores + palmas, la grada arranca el "oé" |
| Coro final | Maximum / Belt + **key change** | crowd sings, subida de tono épica |
| Outro | Fade Out | Cierre con el cántico y guiño YayaFit |

---

## Ganchos principales

- **Coro (hook único):** "¡Campeonas, campeonas! (¡oé, oé, oé!)" — cántico real de estadio en femenino
- **Pago del coro:** "¡Esta copa es nuestra, nos la llevamos todas!"
- **Remate:** "Que lo cante el mundo entero: ¡las yayas, campeonas!"
- **Verso 1:** "¡esta tarde juego yo!" (la yaya no mira el partido: lo juega)
- **Bridge (garra):** "No hay edad para este grito / tengo cuerda y tengo garra"

**Raíl de vocal del coro:** o-a (campe**o**n**a**s / c**o**p**a** / t**o**d**a**s) —
sin choques fonéticos, todo el coro empuja en la misma dirección.

---

## Checklist de marca YayaFit

- [x] Sin palabras prohibidas (sin "increíble", "empoderar", "optimizar", "holístico")
- [x] Sin "tercera edad" / "seniors" — edad en positivo ("no hay edad para este grito", "tengo cuerda y tengo garra")
- [x] Frases cortas, una idea por línea, 6-12 sílabas
- [x] Concreto: "la bufanda", "el balcón", "el salón", "la peña", "los silbatos", "el sofá", "el vecino", "una pelota"
- [x] Comunidad presente: "llamo a todas mis amigas", "la peña está al completo", "una peña que me canta"
- [x] Tono épico, celebratorio, sin culpabilizar
- [x] Tuteo / primera persona cercana
- [x] "Campeonas" = género y edad en positivo (el cántico de toda la vida, ahora suyo)
- [x] Pasada por `/humanizer`
- [x] Atemporal: sin nombrar selección concreta (reutilizable cada Mundial)
- [x] UN solo gancho en el coro + raíl de vocal o-a (lección de la v2)

---

## Checklist de producción Suno V5

- [ ] Generar 3-4 versiones con el style prompt en Custom Mode
- [ ] Comprobar que la solista es **femenina** en todas (el tag `[Female Vocal]` + style prompt lo blindan, pero verificar)
- [ ] Seleccionar la mejor por pegada del cántico, coros de masa y key change del final
- [ ] Verificar BPM en songbpm.com (target 106 ±5)
- [ ] Aplicar Remaster (Subtle)
- [ ] Comprobar duración (~3:00-3:30); Extend con callback si < 2:30
- [ ] Exportar WAV 16-bit/44.1kHz (distribución) + MP3 320kbps (preview/web)
- [ ] Verificar que no hay artefactos
- [ ] Guardar `Campeonas - YayaFit.mp3` en `music/06-campeonas/`
- [ ] Incrustar portada con `scripts/embed_cover.py`

---

## Portada (prompt para Leonardo / generador de imagen)

Prompt final completo en `PROMPT-LEONARDO-Campeonas.txt` (mismo formato que el resto del álbum).

- **Composición:** heroína YayaFitter **levantando una copa/trofeo dorado** en primer plano
  (euforia, bufanda lila) + amigas/peña celebrando detrás. Encaja aún mejor con el título
  "Campeonas". Protagonista clara, comunidad presente.
- **Escena:** salón convertido en grada / barrio en fiesta, luz cálida de atardecer.
- **Paleta:** lila/morada de marca + dorado cálido. **Sin colores de selección concreta**
  (atemporal): bufanda y confeti en lila/morado, no banderas nacionales.
- **Trofeo genérico:** copa dorada genérica (NO el trofeo oficial de la FIFA, marca registrada).
- **Motivo de marca:** halo/sol semicírculo detrás + acabado glossy saturado.
- El título se añade en post; se deja espacio limpio abajo y el negative prompt excluye texto.

---

## Lugar en la playlist

Curva de energía de la app (de la guía interna de BPM):

1. **Libre** (100, vuelta a la calma / yoga)
2. **Campeonas** (106, himno mundialero — mid-tempo con energía de estadio; el groove manda, no la velocidad) ← nueva
3. **Siente el Ritmo** (118, calentamiento alegre / feel-good)
4. **Segunda Juventud** (120, himno)
5. **Corazón Poderoso** (alta, cardio)

---

## Notas

- Publicar en `yayafit.es/musica/` tras producir (ver `app/wordpress/desarrollo-wordpress.md`).
- Estructura de archivos según `music/README.md`.
- No nombrar a Shakira, Ricky Martin ni a ningún artista en el prompt de Suno (riesgo de
  copyright); el estilo se replica con género + instrumentación. El cántico "campeonas, oé"
  es dominio popular de estadio.
- Títulos de trabajo anteriores: "A Fuego" → "La Copa de la Yaya" → **"Campeonas"**.
  El diagnóstico de por qué los coros anteriores no pegaban está en la sección
  "Evolución del título".
- **Estilo v3 (sonido "Dai Dai"):** las dos primeras versiones del style prompt eran
  fusión con brass tipo *Waka Waka* (patrón 2010, 126 BPM) y les faltaba pegada. Se
  cambió al afrobeats-reggaetón mid-tempo (106 BPM) del himno oficial 2026: groove +
  graves en vez de velocidad + orquesta.
- **Variante opcional** para imitar la dualidad Shakira + Burna Boy: añadir
  "with a smooth male guest verse" al style prompt y etiquetar el bridge con
  `[Male Vocal]`. Por defecto NO se usa (la voz de marca es femenina).
