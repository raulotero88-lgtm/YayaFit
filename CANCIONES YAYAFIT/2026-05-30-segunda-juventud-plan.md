# Segunda Juventud — Plan de Producción Suno V5

> **Para quien ejecute este plan:** Sigue los pasos en orden. Cada tarea tiene pasos concretos con el texto exacto a pegar en Suno. No improvises prompts — usa los que están aquí.

**Goal:** Producir el himno "Segunda Juventud" de YayaFit en Suno V5, exportado en WAV listo para usar en la playlist de la app.

**Architecture:** Generación en Suno V5 con Custom Mode (style prompt + letra con metatags), selección de la mejor versión entre 3-4 generaciones, post-proceso con Remaster Subtle, exportación WAV + MP3.

**Referencia:** Spec completa en `CANCIONES YAYAFIT/2026-05-30-segunda-juventud-design.md`

---

## Antes de empezar

- Cuenta Suno activa (Pro $10/mo o Premier $30/mo — ambas incluyen derechos comerciales)
- Acceso a suno.com
- Carpeta `CANCIONES YAYAFIT/` creada en el proyecto

---

### Tarea 1: Configurar el proyecto en Suno

**Objetivo:** Abrir Suno en modo Custom y pegar el style prompt correcto.

- [ ] **Paso 1:** Ir a [suno.com](https://suno.com) e iniciar sesión
- [ ] **Paso 2:** Hacer clic en **Create** y activar el toggle **Custom**
- [ ] **Paso 3:** En el campo **Style of Music**, pegar exactamente:

```
Electropop, 120 BPM, uplifting, warm synth pads, four-on-the-floor kick, bright melodic hooks, powerful female vocals, Spanish lyrics, polished production, no harsh distortion, no guitars
```

- [ ] **Paso 4:** En el campo **Title**, escribir:

```
Segunda Juventud — YayaFit
```

- [ ] **Paso 5:** Dejar el campo de letra vacío por ahora (se rellena en Tarea 2)

---

### Tarea 2: Pegar la letra con metatags

**Objetivo:** Introducir la estructura completa de la canción en el campo Lyrics de Suno.

- [ ] **Paso 1:** En el campo **Lyrics**, pegar exactamente el siguiente texto:

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

- [ ] **Paso 2:** Verificar que el texto se ha pegado completo (desde `[Intro]` hasta `(Aquí estoy...)`)

---

### Tarea 3: Generar las primeras versiones

**Objetivo:** Obtener 3-4 versiones y elegir la mejor base.

- [ ] **Paso 1:** Hacer clic en **Create** — Suno genera 2 versiones por defecto
- [ ] **Paso 2:** Escuchar ambas versiones de inicio a fin
- [ ] **Paso 3:** Repetir la generación una vez más para tener 4 versiones en total
- [ ] **Paso 4:** Evaluar cada versión con este criterio:

| Criterio | Qué buscar |
|----------|------------|
| BPM | Suena a ~120 — constante, sin aceleraciones raras |
| Vocal | Voz femenina clara, confiada, en español correcto |
| Coro | "YAYAFIT" se escucha potente y nítido |
| Energía | Sube visiblemente del verso al pre-coro al coro |
| Mix | Sintetizadores cálidos, sin distorsión agresiva |

- [ ] **Paso 5:** Marcar la versión ganadora con una estrella en Suno (icono de favorito)

---

### Tarea 4: Verificar BPM y estructura

**Objetivo:** Confirmar que la versión elegida cumple los parámetros técnicos.

- [ ] **Paso 1:** Descargar la versión ganadora en MP3 (botón de descarga en Suno)
- [ ] **Paso 2:** Ir a [songbpm.com](https://songbpm.com) o [tunebat.com](https://tunebat.com)
- [ ] **Paso 3:** Subir el MP3 y verificar que el BPM está entre **115 y 125**
  - Si está en ese rango: continuar a Tarea 5
  - Si está fuera del rango: volver a Tarea 3 y generar 2 versiones más
- [ ] **Paso 4:** Escuchar la canción y verificar que la estructura es completa:
  - [ ] Intro presente
  - [ ] Verso 1 con letra correcta
  - [ ] Pre-coro ("Dime quién te mueve así...")
  - [ ] Coro con "YAYAFIT" audible
  - [ ] Verso 2 presente
  - [ ] Bridge presente
  - [ ] Drop de energía máxima
  - [ ] Coro final con voz al máximo
  - [ ] Outro con fade out

---

### Tarea 5: Post-proceso — Remaster

**Objetivo:** Aplicar Remaster Subtle para uniformizar la calidad de audio.

- [ ] **Paso 1:** Abrir la versión ganadora en Suno
- [ ] **Paso 2:** Hacer clic en los tres puntos (**...**) junto a la canción
- [ ] **Paso 3:** Seleccionar **Remaster**
- [ ] **Paso 4:** Elegir la opción **Subtle** (no Medium ni Wide)
- [ ] **Paso 5:** Escuchar el resultado remasterizado y comparar con el original
  - Si suena mejor o igual: usar el remasterizado
  - Si suena peor: usar el original sin remaster
- [ ] **Paso 6:** Marcar la versión final con estrella

---

### Tarea 6: Extend si la canción queda corta (opcional)

**Objetivo:** Si la duración es menor a 2:30, extender hasta ~3:30.

- [ ] **Paso 1:** Comprobar la duración total de la versión final
  - Si dura más de 2:30: saltar a Tarea 7
  - Si dura menos: continuar con este paso
- [ ] **Paso 2:** Hacer clic en **Extend** en la canción
- [ ] **Paso 3:** En el campo de instrucciones de extend, pegar:

```
[Callback: continue with same vibe as chorus]
[Energy: High]
[Fade Out]
YayaFit...
Aquí estoy...
(Aquí estoy...)
```

- [ ] **Paso 4:** Generar la extensión y escuchar que el corte es natural
- [ ] **Paso 5:** Si el corte suena brusco, repetir Extend con:

```
[Callback: continue with same vibe as outro]
[Fade Out]
```

---

### Tarea 7: Exportar archivos finales

**Objetivo:** Descargar los archivos en los formatos correctos para uso en app y preview.

- [ ] **Paso 1:** Desde Suno, descargar la versión final en **WAV** (calidad máxima)
  - Nombre del archivo: `yayafit-segunda-juventud-v1.wav`
- [ ] **Paso 2:** Descargar también en **MP3** para preview y redes
  - Nombre del archivo: `yayafit-segunda-juventud-v1-preview.mp3`
- [ ] **Paso 3:** Guardar ambos archivos en la carpeta del proyecto:

```
CANCIONES YAYAFIT/
  yayafit-segunda-juventud-v1.wav
  yayafit-segunda-juventud-v1-preview.mp3
```

- [ ] **Paso 4:** Anotar la URL pública de Suno de la canción (para referencia futura)

---

### Tarea 8: Control de calidad final

**Objetivo:** Escucha final con el checklist completo antes de dar la canción por terminada.

- [ ] **Paso 1:** Escuchar el WAV final de inicio a fin con auriculares
- [ ] **Paso 2:** Verificar cada punto:

| Check | OK |
|-------|----|
| La voz dice "YAYAFIT" con claridad en el coro | [ ] |
| La energía sube de verso a pre-coro a coro | [ ] |
| No hay artefactos de audio (chasquidos, distorsión no deseada) | [ ] |
| El fade out del outro es natural | [ ] |
| La letra en español es inteligible | [ ] |
| La canción se puede poner en loop sin corte brusco | [ ] |
| El BPM está entre 115-125 (verificado en Tarea 4) | [ ] |

- [ ] **Paso 3:** Si todos los checks están OK — la canción está lista
- [ ] **Paso 4:** Si hay algún problema — anotar cuál y volver a la tarea correspondiente

---

### Tarea 9: Registrar en el proyecto

**Objetivo:** Documentar el resultado para mantener consistencia en canciones futuras.

- [ ] **Paso 1:** Añadir al final del archivo `2026-05-30-segunda-juventud-design.md` el bloque:

```markdown
## Resultado de producción

- **Versión final:** yayafit-segunda-juventud-v1.wav
- **URL Suno:** [pegar URL]
- **BPM verificado:** [pegar número]
- **Duración:** [pegar mm:ss]
- **Fecha de producción:** [pegar fecha]
- **Notas:** [cualquier ajuste que hayas hecho respecto al plan]
```

- [ ] **Paso 2:** Hacer commit del WAV y los cambios al design doc:

```bash
git add "CANCIONES YAYAFIT/yayafit-segunda-juventud-v1.wav"
git add "CANCIONES YAYAFIT/yayafit-segunda-juventud-v1-preview.mp3"
git add "CANCIONES YAYAFIT/2026-05-30-segunda-juventud-design.md"
git commit -m "feat: primera canción YayaFit producida — Segunda Juventud v1"
```

---

## Próximos pasos tras completar este plan

Con el himno validado, el proyecto escala con:

1. **Canción 2** — Electropop 128 BPM, letra enfocada en comunidad, para cardio activo
2. **Canción 3** — Electropop 105 BPM, letra de calma y logro, para vuelta a la calma
3. **Artwork** — Imagen 3000x3000px alineada con la identidad visual YayaFit para cada canción
4. **Playlist completa** — Curva de energía de 30 minutos con las 3 canciones en orden
