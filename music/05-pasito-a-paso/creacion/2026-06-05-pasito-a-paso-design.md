# Spec: Canción 05 YayaFit — "Pasito a Paso"

**Fecha:** 2026-06-05
**Estado:** Letra y prompt listos · pendiente de generar en Suno + pasar por `/humanizer`
**Carpeta de proyecto:** `music/05-pasito-a-paso/`

---

## Contexto

Quinta canción del proyecto musical de YayaFit. Llena dos huecos a la vez:

1. **El ejercicio más accesible de la comunidad: caminar.** Ninguna canción anterior
   acompaña el paseo diario, que es lo que más hacen (y mejor les sienta) las mujeres
   de 60-75 de YayaFit. Una canción pensada para sonar mientras caminan.
2. **Variedad de género.** Las cuatro anteriores son pop/electrónico anglosajón
   (electropop, disco-pop). Esta entra en **cumbia ligera acústica / latin-pop**: más
   cálida, más cercana, más de barrio.

No es el himno (01 *Segunda Juventud*), ni la de fuerza (02 *Corazón Poderoso*), ni la
serena (03 *Libre*), ni la de baile (04 *Siente el Ritmo*). Es la de **salir a la calle,
moverte sin prisa y de camino encontrarte con las amigas**.

El tono sigue el manual de estilo YayaFit: cercano, motivador, concreto, comunidad.
Sin palabras prohibidas, sin lenguaje corporativo, tuteo siempre, edad en positivo.

---

## Diferenciación respecto a "Siente el Ritmo" (importante)

La primera versión de esta canción calcó la estructura de la 04 (mismo pre-coro de
fórmula "X, X, X… para mí", mismo coro de título coreado 3 veces + remate, mismo
breakdown de contar, mismo puente "años… y aún", misma coletilla "(YayaFit, a …)").
Se descartó por eso. Esta versión usa **estructura de cumbia de verdad**:

| Recurso | 04 "Siente el Ritmo" (pop) | 05 "Pasito a Paso" (cumbia) |
|---------|----------------------------|------------------------------|
| Gancho | Título coreado 3 veces | Copla con juego de palabras "Pasito a paso, paso a paso" + remate distinto |
| Sección rítmica clave | Breakdown ("un, dos…") | **Montuno / pregón** (llamada-respuesta del coro) |
| Pre-coro | "Sube, sube, sube…" | (no hay; la cumbia va verso → estribillo) |
| Puente | "Tengo años… y aún me sé soltar" | "Hubo años de correr… ahora voy despacio" (reframe distinto) |
| Cierre | Coletilla "(YayaFit, a bailar)" | Instrumental, se aleja el grupo |

---

## Decisiones de diseño

| Parámetro | Decisión |
|-----------|----------|
| Título | Pasito a Paso |
| Género | Cumbia ligera acústica / latin-pop |
| BPM | 105 |
| Idioma | Español (España) |
| Vocal | Voz femenina cálida y luminosa + coro pequeño (montuno) |
| Duración target | ~3:00 - 3:30 |
| Uso principal | Caminar / paseo diario / calentamiento suave |
| Uso secundario | Vídeos de comunidad, redes, retos de pasos |
| Concepto | "Pasito a paso": caminar sin prisa como hábito amable; lo bueno no es la meta, es el paseo, el barrio y la compañía |

### Por qué 105 BPM (y no el 115-125 de la guía genérica)

La [guía interna de BPM](../../../skills/suno-music-creator/references/bpm-guide.md)
marca "Walking 115-125". Bajamos a **105** a propósito:

- La cadencia cómoda de una mujer de 60-75 caminando a buen paso ronda los 100-110
  pasos/min. A 105 BPM, **un paso por tiempo** cae justo en su ritmo natural.
- 105 sitúa la canción entre *Libre* (100, vuelta a la calma) y *Siente el Ritmo* (118,
  baile), como el "salir a moverte" sin llegar al cardio.
- El groove de cumbia respira de forma natural en torno a 100-108 BPM.

La diferencia de carácter con *Libre* (también ~100) la marca el **género**: *Libre* es
electropop sereno; esta es cumbia acústica de calle.

---

## Style prompt (Suno V5)

```text
Latin pop, light acoustic cumbia, 105 BPM, warm playful and uplifting, nylon acoustic guitar, bright accordion, güira and congas, light walking bass, gentle handclaps, call-and-response montuno section, bright warm female lead vocals with small backing choir, Spanish lyrics, catchy singalong hook, breezy feel-good walking groove, sunny morning street energy, organic acoustic production, relaxed danceable swing, no harsh distortion, no electronic drops, clean warm mix
```

**Por qué cada elemento:**
- **Light acoustic cumbia / latin pop** — el giro de género que faltaba; cálido y de barrio, no electrónico.
- **105 BPM** — un paso por tiempo a la cadencia real de la comunidad (ver arriba).
- **Nylon guitar + bright accordion + güira and congas** — el ADN de la cumbia acústica; suena orgánico.
- **Call-and-response montuno + small backing choir** — la sección de pregón que hace única a esta canción (no la tiene ninguna otra).
- **Catchy singalong hook** — el "Pasito a paso, paso a paso" tiene que pegarse.
- **no harsh distortion / no electronic drops** — sonido limpio, acústico y amable.

---

## Letra completa con metatags

> Versión v2 (reescrita en estructura de cumbia, tras descartar la v1 por calcar la 04).
> **Pendiente de pasar por `/humanizer`** antes de generar. La versión final humanizada
> va en `SUNO-COPIAR-PEGAR-Pasito-a-Paso.txt`.

```text
[Intro]
[Mood: Sunny, warm cumbia morning]
[Energy: Medium]
[Instrument: Accordion, güira, congas, walking bass]

[Verse 1]
[Vocal Style: Warm, Conversational]
Suena el despertador y no protesto,
hoy la cama no me va a ganar.
Me pongo lo cómodo, lo de siempre,
y bajo a ver qué cuenta la ciudad.

La panadera sube la persiana,
el quiosco huele a tinta y a café.
Le doy los buenos días al que pasa
y hasta el semáforo me deja en verde otra vez.

[Chorus]
[Energy: High]
[Vocal Style: Bright, Catchy]
Pasito a paso, paso a paso,
que la prisa no va conmigo.
Pasito a paso, paso a paso,
y el barrio entero es mi amigo.

[Verse 2]
[Vocal Style: Warm, Conversational]
[Energy: Medium]
En la esquina me esperan las de siempre,
Carmen con su gorra y su reír.
Loli cuenta lo de ayer por enésima vez
y damos la vuelta entera sin sentir.

Subimos la cuesta como quien no quiere,
presumiendo de que aún podemos más.
Y si alguna se cansa, pues paramos,
que el banco de la plaza no se va a marchar.

[Chorus]
[Energy: High]
[Vocal Style: Bright, Catchy]
Pasito a paso, paso a paso,
que la prisa no va conmigo.
Pasito a paso, paso a paso,
y el barrio entero es mi amigo.

[Bridge]
[Mood: Heartfelt, reflective]
[Energy: Building]
[Instrument: Accordion lead, soft congas]
Hubo años de correr a todas partes,
sin mirar la acera ni el jardín.
Ahora voy despacio, y me da tiempo
a ver el mundo entero antes de ir.

[Montuno]
[Call and response, choir and lead]
[Energy: High]
[Instrument: Accordion, güira, congas, handclaps]
(¡Una vuelta más!) que el cuerpo lo agradece
(¡Una vuelta más!) que la mañana crece
(¡Una vuelta más!) y mañana, otra vez

[Chorus - Final]
[Energy: Maximum]
[Vocal Style: Belt, with choir]
Pasito a paso, paso a paso, (¡una vuelta más!)
que la prisa no va conmigo.
Pasito a paso, paso a paso, (¡una vuelta más!)
y el barrio entero es mi amigo.

[Outro]
[Mood: Joyful]
[Fade Out]
[Instrument: Accordion and güira fade, footsteps]
Pasito a paso...
(el barrio se despide, pasos que se alejan)
```

---

## Estructura de energía

| Sección | Energy tag | Nota |
|---------|-----------|------|
| Intro | Medium | Acordeón + güira, entra el groove de paseo |
| Verso 1 | Medium | Voz conversacional, narrativa "me levanto y salgo" |
| Estribillo | High | Gancho "Pasito a paso, paso a paso" |
| Verso 2 | Medium | Comunidad: Carmen, Loli, la cuesta, el banco |
| Estribillo | High | Repetición |
| Puente | Building | "Hubo años de correr… ahora voy despacio" |
| Montuno | High | Pregón / llamada-respuesta "¡Una vuelta más!" |
| Estribillo final | Maximum | Con coros del montuno encima |
| Outro | Fade Out | Instrumental, el grupo se aleja |

---

## Ganchos principales

- **Estribillo:** "Pasito a paso, paso a paso / que la prisa no va conmigo"
- **Montuno:** "¡Una vuelta más!" (llamada del coro)
- **Puente:** "Ahora voy despacio, y me da tiempo / a ver el mundo entero antes de ir"

---

## Checklist de marca YayaFit

- [x] Sin palabras prohibidas (sin "increíble", "potenciar", "optimizar", "holístico", "empoderar")
- [x] Sin doble exclamación "¡¡"
- [x] Sin "tercera edad" / "seniors" — edad en positivo ("aún podemos más", "hubo años de correr… ahora voy despacio")
- [x] Frases cortas, una idea por línea
- [x] Concreto: "la panadera", "el quiosco", "el semáforo", "la gorra de Carmen", "la cuesta", "el banco de la plaza"
- [x] Comunidad presente: "las de siempre", "Carmen", "Loli"
- [x] Tono alegre, aspiracional, sin culpabilizar ni meter prisa
- [x] Tuteo / primera persona cercana
- [x] **Estructura propia** (cumbia), no calcada de la 04
- [ ] **Pasar por `/humanizer`** (paso final antes de generar)

---

## Checklist de producción Suno V5

- [ ] Pasar la letra por `/humanizer` y volcar el resultado en el archivo de copiar-pegar
- [ ] Generar 3-4 versiones con el style prompt en Custom Mode
- [ ] Seleccionar la mejor por groove de cumbia, calidez vocal y pegada del estribillo + montuno
- [ ] Verificar BPM en songbpm.com (target 105 ±5)
- [ ] Aplicar Remaster (Subtle)
- [ ] Comprobar duración (~3:00-3:30); Extend con callback si < 2:30
- [ ] Exportar WAV 16-bit/44.1kHz (distribución) + MP3 320kbps (preview/web)
- [ ] Verificar que no hay artefactos
- [ ] Guardar `Pasito a Paso - YayaFit.mp3` en `music/05-pasito-a-paso/`

---

## Portada (prompt para Leonardo / generador de imagen)

Prompt final completo en `PROMPT-LEONARDO-Pasito-a-Paso.txt` (mismo formato que el de
"Siente el Ritmo"). Decisiones:

- **Composición:** heroína caminando en primer plano + dos o tres amigas caminando con
  ella (calle de barrio luminosa, árboles, luz dorada de mañana). Protagonista clara como
  en el resto del álbum, con la comunidad presente y en movimiento.
- **Paleta:** lila/morada de marca (ver `brand/`), coherente con "Siente el Ritmo".
- **Motivo de marca:** halo/sol semicírculo + acabado glossy saturado.
- El título se añade en post (Leonardo no escribe texto fiable); se deja espacio limpio
  abajo y el negative prompt excluye texto.

---

## Lugar en la playlist

Curva de energía de la app (de la guía interna de BPM):

1. **Libre** (100, vuelta a la calma / yoga)
2. **Pasito a Paso** (105, caminar / paseo diario) ← nueva
3. **Siente el Ritmo** (118, calentamiento alegre / baile)
4. **Segunda Juventud** (120, himno)
5. **Corazón Poderoso** (alta, cardio)

---

## Notas

- Publicar en `yayafit.es/musica/` tras producir (ver `app/wordpress/desarrollo-wordpress.md`).
- Estructura de archivos según `music/README.md`.
- Título de trabajo anterior: "Paso a Paso" (cambiado a "Pasito a Paso" por el juego de
  palabras del estribillo, más pegadizo).
