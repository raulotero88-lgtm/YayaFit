# Libre — Plan de Producción Suno V5

> **Objetivo:** Crear una canción más tranquila pero con ritmo y muy pegadiza para YayaFit — ideal para rutinas de yoga, meditación y vuelta a la calma.

**Concepto:** Canción pop sobre libertad y autonomía con ritmo constante y gancho melódico fuerte. Ritmo relajante pero con groove, temática empoderadora. Audiencia: mujeres 60-75 años de YayaFit descubriendo su libertad sin límites.

**Architecture:** Generación en Suno V5 con Custom Mode (style prompt + letra con metatags), selección de mejor versión entre 3-4 generaciones, post-proceso con Remaster Subtle, exportación WAV + MP3.

**Referencia:** Basado en el plan exitoso de "Segunda Juventud" (véase `CANCIONES YAYAFIT/2026-05-30-segunda-juventud-plan.md`)

---

## Antes de empezar

- [ ] Cuenta Suno activa (Pro $10/mo o Premier $30/mo — ambas incluyen derechos comerciales)
- [ ] Acceso a suno.com
- [ ] Carpeta `CANCIONES YAYAFIT/` actualizada en el proyecto

---

## FASE 1: Planificación y Especificaciones

### Especificaciones técnicas de la canción

| Parámetro | Valor | Razón |
|-----------|-------|-------|
| **Género** | Electropop / Downtempo Pop | Ritmo constante, accesible, pegadizo |
| **BPM target** | 95-105 BPM | Más lento que "Segunda Juventud" (120), pero mantiene energía |
| **Mood** | Sereno, esperanzador, con groove | Tranquilo pero No aburrido |
| **Idioma** | Español (España) | Audiencia YayaFit |
| **Voz** | Femenina, cálida, confiada, no dramática | Inspiradora para el público objetivo |
| **Duración target** | 2:30 - 3:30 min | Suficiente para rutina, corta para no cansar |
| **Instrumentos clave** | Sintetizadores cálidos, beat simple pero pulso claro, bajo groovy | Crear ritmo sin complexity |
| **Energía vocal** | Media — confidencia pero sin fuerza bruta | Invita a respirar, no a gritar |
| **Estructura** | Intro → Verso → Pre-Coro → Coro (gancho) → Verso → Coro × 2 → Outro | Repetición memorizante |

---

## FASE 2: Creación de la Letra

### Tema central
**"Libre"** — Libertad, autonomía, vivir sin límites a cualquier edad. Descubrir que ahora es el momento de ser quien quiero ser.

### Estructura de la letra (con metatags) — NATURALIZADA Y HUMANIZADA

```
[Intro]
[Mood: Calm and warm]
[Energy: Low]
[Instrument: Soft synth pads, subtle beat]

[Verse 1]
[Vocal Style: Warm, confessional, intimate]
Me desperté una mañana
y algo dentro me cambió
cuántos años entregados
a lo que el mundo me pidió

Ahora que soy libre
hago lo que me dé la gana
y me siento más viva
que en cualquier otra mañana

[Pre-Chorus]
[Energy: Slightly rising]
[Vocal Style: Confident, knowing]
Este es mi momento, mi lugar
la vida me dice: a bailar

[Chorus]
[Energy: Medium-High]
[Vocal Style: Warm, powerful, genuine]
Libre, libre, libre
Eso es lo que soy
Libre, libre, libre
Y aquí me quedo yo
(Y no me voy)
Libre, libre, libre
Sin pedir permiso
Libre, libre, libre
Ese es mi destino

[Verse 2]
[Vocal Style: Open, real, conversational]
[Energy: Medium]
Con mis amigas me río
de lo que un día nos creímos
nos dijeron "ya es muy tarde"
y mira dónde seguimos

Y resulta que es al revés
hoy es cuando sé quién soy
no persigo ser perfecta
solo estar en paz con hoy

[Pre-Chorus]
[Energy: Rising]
Este es mi momento, mi lugar
la vida me dice: a bailar

[Chorus]
[Energy: High]
[Vocal Style: Powerful, unapologetic]
Libre, libre, libre
Eso es lo que soy
Libre, libre, libre
Y aquí me quedo yo
(Y no me voy)
Libre, libre, libre
Sin pedir permiso
Libre, libre, libre
Ese es mi destino

[Bridge]
[Mood: Triumphant, grounded]
[Energy: Building]
[Instrument: Full synths, beat more present]
A los sesenta y cinco, a los setenta
o a la edad que a ti te dé la gana
tú eres libre, siempre libre
y esa libertad no se acaba
lo que dicen que ya no te toca
es justo lo que más te llama

[Breakdown]
[Energy: Dropping back to medium]
[Vocal: Whispered/confidential]
Libre...
(No me voy)
Libre...
(Sin miedo)

[Chorus - Final]
[Energy: High]
[Vocal Style: Full power, celebratory]
Libre, libre, libre
Eso es lo que soy
Libre, libre, libre
Y aquí me quedo yo
(Y no me voy)
Libre, libre, libre
Sin pedir permiso
Libre, libre, libre
Ese es mi destino

YayaFit, este es mi himno
(Mi himno, mi himno)

[Outro]
[Mood: Peaceful, resolved, powerful]
[Fade Out]
Libre...
(Libre, libre...)
No me voy...
(Libre...)
```

---

## FASE 3: Configuración en Suno

### Tarea 1: Preparar el Style Prompt

**Objetivo:** Crear el prompt exacto que define el sonido de la canción.

**Style Prompt (copiar textualmente):**

```
Electropop, 100 BPM, downtempo groove, warm synth pads, steady four-on-the-floor beat, 
groovy bass line, powerful melodic hooks, warm confident female vocals, Spanish lyrics, 
empowering yet serene, rhythmic and uplifting, polished production, no harsh sounds, no guitars, 
smooth transitions, space for vocal breathing, celebratory without being loud
```

**Explicación de cada elemento:**
- **Electropop, 100 BPM** — Define género y tempo (100 es el punto ideal para "tranquilo pero con ritmo")
- **downtempo groove** — Ritmo constante que invita a moverse lentamente pero con intención
- **warm synth pads** — Color cálido, no frío ni minimalista
- **steady four-on-the-floor beat** — Pulso constante y claro (esencial para la pegadiza)
- **groovy bass line** — Añade movimiento sin complejidad
- **soft melodic hooks** — Ganchos melódicos que se quedan en la mente
- **warm female vocals** — Voz cálida, inspiradora
- **serene but rhythmic** — Clave: tranquilo PERO con ritmo
- **no harsh sounds** — Nada de distorsión agresiva
- **no guitars** — Mantener el sonido electrónico/síntesis puro
- **smooth transitions** — Movimientos entre secciones naturales
- **breathing space between phrases** — Permitir que la voz respire (literal para una canción de respiración)

---

## FASE 4: Generación en Suno

### Tarea 2: Configurar y generar primera tanda

- [ ] **Paso 1:** Ir a [suno.com](https://suno.com) e iniciar sesión
- [ ] **Paso 2:** Hacer clic en **Create** y activar el toggle **Custom Mode**
- [ ] **Paso 3:** En **Style of Music**, pegar el style prompt de arriba
- [ ] **Paso 4:** En **Title**, escribir exactamente:
  ```
  Libre — YayaFit
  ```
- [ ] **Paso 5:** En **Lyrics**, pegar la letra completa de la Fase 2
- [ ] **Paso 6:** Hacer clic en **Create** — Suno genera 2 versiones automáticamente
- [ ] **Paso 7:** Esperar a que ambas terminen de generar
- [ ] **Paso 8:** Escuchar ambas versiones de inicio a fin

### Tarea 3: Evaluar primera tanda y generar segunda (si es necesario)

**Criterios de evaluación:**

| Criterio | Qué buscar | ✓ / ✗ |
|----------|-----------|-------|
| **BPM** | Suena a ~100 BPM, constante sin aceleraciones extrañas | [ ] |
| **Voz femenina** | Clara, cálida, en español comprensible, no robótica | [ ] |
| **Gancho "Libre, libre, libre"** | El coro es memorable y pegadizo; la respuesta "(Y no me voy)" engancha | [ ] |
| **Ritmo vs Tranquilidad** | Se siente movimiento pero sin prisa; invita a respirar | [ ] |
| **Energía de curva** | Verso suave → Pre-coro sube → Coro potente → Bridge transcendente | [ ] |
| **Sin artefactos** | No hay chasquidos, cortes raros, distorsión no deseada | [ ] |
| **Instrumentos** | Sintetizadores cálidos, bajo groovy audible, beat claro | [ ] |

- [ ] **Paso 1:** Si ambas versiones fallan en 2+ criterios — generar 2 nuevas versiones (Crear → Custom → pegar todo igual)
- [ ] **Paso 2:** Si 1+ versión cumple todos los criterios — pasar a Tarea 4
- [ ] **Paso 3:** Marcar la mejor versión hasta ahora con estrella (icono de favorito en Suno)

---

## FASE 5: Validación y Post-Proceso

### Tarea 4: Descargar y verificar BPM

- [ ] **Paso 1:** Descargar la mejor versión en MP3 (botón de descarga en Suno)
- [ ] **Paso 2:** Ir a [songbpm.com](https://songbpm.com) o [tunebat.com](https://tunebat.com)
- [ ] **Paso 3:** Subir el MP3 y verificar BPM:
  - **95-105 BPM** = ✅ Continuar a Tarea 5
  - **< 95 BPM o > 110 BPM** = ❌ Volver a Tarea 3 (generar nuevas versiones)
- [ ] **Paso 4:** Anotar el BPM exacto verificado para la documentación final

### Tarea 5: Remaster y pulido de audio

- [ ] **Paso 1:** Abrir la mejor versión en Suno
- [ ] **Paso 2:** Hacer clic en los tres puntos (**...**) junto a la canción
- [ ] **Paso 3:** Seleccionar **Remaster**
- [ ] **Paso 4:** Elegir **Subtle** (No Medium ni Wide)
- [ ] **Paso 5:** Escuchar el resultado remasterizado
  - Si suena mejor o igual → usar remasterizado
  - Si suena peor → usar original sin remaster
- [ ] **Paso 6:** Marcar la versión final con estrella

### Tarea 6: Extend (si es necesario)

- [ ] **Paso 1:** Comprobar duración total
  - Si **≥ 2:30** → Saltar a Tarea 7
  - Si **< 2:30** → Continuar este paso
- [ ] **Paso 2:** Hacer clic en **Extend**
- [ ] **Paso 3:** Pegar el callback:
  ```
  [Callback: continue with same vibe as chorus but relaxing into outro]
  [Energy: Medium]
  [Fade Out]
  Libre...
  (No me voy...)
  ```
- [ ] **Paso 4:** Generar la extensión y verificar que el corte es natural
- [ ] **Paso 5:** Si suena brusco, repetir Extend con:
  ```
  [Callback: smooth fade out, maintain the warm synth pads]
  [Energy: Low]
  [Fade]
  ```

---

## FASE 6: Exportación y Documentación

### Tarea 7: Exportar en formatos finales

- [ ] **Paso 1:** Descargar en **WAV** (máxima calidad)
  - Nombre: `yayafit-ritmo-tranquilo-v1.wav`
- [ ] **Paso 2:** Descargar en **MP3** (preview y redes)
  - Nombre: `yayafit-ritmo-tranquilo-v1-preview.mp3`
- [ ] **Paso 3:** Guardar ambos en:
  ```
  CANCIONES YAYAFIT/
    yayafit-ritmo-tranquilo-v1.wav
    yayafit-ritmo-tranquilo-v1-preview.mp3
  ```
- [ ] **Paso 4:** Copiar y guardar URL pública de Suno (para referencia futura)

### Tarea 8: Control de calidad final

**Escucha activa con checklist:**

| Check | Descripción | ✓ |
|-------|------------|---|
| **Claridad vocal** | Cada palabra en español es inteligible | [ ] |
| **Gancho principal** | "Libre, libre, libre" se quedará en la mente del escucha | [ ] |
| **Energía correcta** | Tranquilo sin ser aburrido; tiene groove sin ser acelerado | [ ] |
| **Espacio vocal** | Hay aire entre frases; la voz respira y no se atropella | [ ] |
| **Estructura completa** | Intro → Versos → Coros × 2 → Bridge → Outro presente | [ ] |
| **Sin artefactos** | No hay chasquidos, cortes raros, distorsión | [ ] |
| **BPM consistente** | Verified 95-110 BPM (Tarea 4) | [ ] |
| **Loop natural** | La canción puede repetirse sin cortes bruscos | [ ] |
| **Apropiado para audiencia** | Inspira calma y movimiento a mujeres 60-75 años | [ ] |

- [ ] **Paso 1:** Si todos los checks = ✓ → Canción LISTA
- [ ] **Paso 2:** Si alguno = ✗ → Anotar cuál y volver a la tarea correspondiente

---

## FASE 7: Documentación del Proyecto

### Tarea 9: Crear archivo de diseño (Spec de referencia)

Crear nuevo archivo: `CANCIONES YAYAFIT/2026-06-03-ritmo-tranquilo-design.md`

(Contenido de ejemplo — adaptar según resultado real):

```markdown
# Ritmo Tranquilo — Especificación Técnica

> Canción 2 de la playlist YayaFit — más tranquila, groovy, muy pegadiza.

## Concepto
Downtempo pop con groove, ritmo constante a 100 BPM, ideal para yoga y vuelta a calma.
Tema: libertad y autonomía a cualquier edad, vivir sin pedir permiso, comunidad sin competición.

## Especificaciones

| Parámetro | Valor |
|-----------|-------|
| Género | Electropop / Downtempo |
| BPM | 100 ± 5 |
| Duración | 2:30 - 3:30 |
| Idioma | Español (España) |
| Voz | Femenina cálida |
| Instrumentos | Synths cálidos, beat groove, bajo melódico |

## Ganchos principales
- **Verso:** "Me desperté una mañana / y algo dentro me cambió"
- **Coro:** "Libre, libre, libre / Eso es lo que soy / (Y no me voy) / Sin pedir permiso"
- **Bridge:** "A los sesenta y cinco, a los setenta / o a la edad que a ti te dé la gana / tú eres libre, siempre libre / y esa libertad no se acaba"

## Casos de uso en la app
- Rutina de yoga
- Vuelta a la calma post-ejercicio
- Meditación guiada
- Sesión de respiración

## Nota de producción
[Se completa al terminar]
```

### Tarea 10: Git commit

```bash
cd YayaFit
git add "CANCIONES YAYAFIT/yayafit-ritmo-tranquilo-v1.wav"
git add "CANCIONES YAYAFIT/yayafit-ritmo-tranquilo-v1-preview.mp3"
git add "CANCIONES YAYAFIT/2026-06-03-ritmo-tranquilo-plan.md"
git add "CANCIONES YAYAFIT/2026-06-03-ritmo-tranquilo-design.md"
git commit -m "feat: segunda canción YayaFit — Ritmo Tranquilo v1 (100 BPM, groovy, pegadiza)"
git push origin main
```

---

## Próximos pasos tras completar

Con **"Libre"** validada, la playlist YayaFit escala con:

1. **Canción 3** — Electropop 110 BPM, alta energía, para cardio activo (ya planificada en "Segunda Juventud")
2. **Artwork** — Imagen 3000×3000px alineada con identidad visual YayaFit
3. **Playlist en Spotify** — Cargar las 3 canciones (si hay derechos)
4. **Curva de energía** — 30 minutos: intro tranquila → energía media → vuelta a calma
5. **Branding** — Usar "Libre" como lema de la comunidad

---

## Duración estimada

| Fase | Tiempo |
|------|--------|
| Planificación | ✅ Hecho |
| Generación en Suno (2-3 tandas) | 10-15 min |
| Verificación BPM y evaluación | 5 min |
| Post-proceso (Remaster + Extend) | 10-15 min |
| Exportación y documentación | 10 min |
| **Total** | **~45-55 minutos** |

---

**¿Listo para comenzar? Empieza por Tarea 1 en FASE 3 (Configuración en Suno).**
