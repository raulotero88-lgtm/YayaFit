# Tarea C — Flujo de Procesamiento Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ejecutar un flujo de 3 prompts secuenciales que transforma una transcripción de voz en bruto en un borrador de Propuesta para Inversores, con el proceso completo documentado y un test de coherencia entre capítulos generados de forma independiente.

**Architecture:** Los 3 prompts se ejecutan en serie; cada output alimenta el siguiente como input. El test de coherencia ejecuta Cap. 1 y Cap. 3 como prompts aislados y compara los resultados. Todo queda en un único archivo Markdown que muestra la cadena completa.

**Tech Stack:** Claude API (claude-sonnet-4-6), Python 3 + anthropic SDK, Markdown

---

## File Structure

| Acción | Ruta | Responsabilidad |
| --- | --- | --- |
| Crear | `TRABAJO M3/TAREA-C_Flujo-Procesamiento/flujo-completo.md` | Entregable final con todo el proceso documentado |
| Leer | `TRABAJO M3/TAREA-B_Tono-Persona/system-prompt-inversor.md` | System prompt para Prompt 3 (ya existe, no modificar) |

---

## Constantes del flujo

Estas constantes se usan en todos los prompts. Sustitúyelas antes de ejecutar.

```text
FECHA_ACTUAL = "2026-05-29"

INPUT_RAW = """
Eh, buenas, se me han ocurrido un par de ideas de negocio para Yaya y la primera
es que eh? Debemos tener un trato muy cercano con todas las Yaya fitter, eh?
Esto es algo que hay que incluir en toda nuestra documentación y había pensado
en en implementar un par de cosillas, por ejemplo que las clases quedemos en
directo también estén en en diferido para que puedan acceder siempre que quieran
y para el modelo estándar, tendrán un límite de de esas visualizaciones, pero
para el premium ya tener todas desbloqueadas y bueno, eh? Había pensado también
que un objetivo es de ventas para este año y es llegar a a por lo menos
30.000 30.000 usuarias activas, qué os parece?
"""
```

---

## Task 1: Crear esqueleto del entregable

**Files:**
- Crear: `TRABAJO M3/TAREA-C_Flujo-Procesamiento/flujo-completo.md`

- [ ] **Paso 1: Crear el directorio**

```bash
mkdir "TRABAJO M3/TAREA-C_Flujo-Procesamiento"
```

- [ ] **Paso 2: Crear el archivo con secciones vacías**

Crear `TRABAJO M3/TAREA-C_Flujo-Procesamiento/flujo-completo.md` con este contenido:

```markdown
# Tarea C — Flujo de Procesamiento: De la Idea al Documento

**Módulo:** M3 — Outputs Profesionales y Estandarización Documental
**Documento:** Propuesta para Inversores (YayaFit)
**Fecha de ejecución:** 2026-05-29
**Método:** Prompts secuenciales — outputs reales de Claude claude-sonnet-4-6

---

## 1. Input Original (Transcripción de Voz — Sin Editar)

> [SE AÑADE EN TASK 1]

---

## 2. Prompt 1 — Limpieza

### Instrucción enviada al modelo

> [SE AÑADE EN TASK 2]

### Output real del modelo

> [SE AÑADE EN TASK 2]

---

## 3. Prompt 2 — Clasificación por Importancia

### Instrucción enviada al modelo

> [SE AÑADE EN TASK 3]

### Output real del modelo

> [SE AÑADE EN TASK 3]

### Análisis: alucinación de fechas

> [SE AÑADE EN TASK 3]

---

## 4. Prompt 3 — Redacción del Documento

### System Prompt aplicado

> [SE AÑADE EN TASK 4]

### Instrucción enviada al modelo

> [SE AÑADE EN TASK 4]

### Output real del modelo (Borrador Propuesta para Inversores)

> [SE AÑADE EN TASK 4]

---

## 5. Test de Coherencia — Capítulo 1 vs Capítulo 3

### Capítulo 1 — Generado de forma independiente

> [SE AÑADE EN TASK 5]

### Capítulo 3 — Generado de forma independiente

> [SE AÑADE EN TASK 5]

### Tabla de verificación

> [SE AÑADE EN TASK 5]

---

## 6. Conclusiones del Flujo

> [SE AÑADE EN TASK 6]
```

- [ ] **Paso 3: Verificar que el archivo existe**

```bash
ls "TRABAJO M3/TAREA-C_Flujo-Procesamiento/"
```

Resultado esperado: `flujo-completo.md`

- [ ] **Paso 4: Rellenar la sección 1 con el input original**

Sustituir `[SE AÑADE EN TASK 1]` bajo `## 1. Input Original` con la transcripción de voz en bruto (valor de `INPUT_RAW` de las constantes, sin ninguna modificación).

- [ ] **Paso 5: Commit**

```bash
git add "TRABAJO M3/TAREA-C_Flujo-Procesamiento/flujo-completo.md"
git commit -m "feat: tarea-c esqueleto y input original"
```

---

## Task 2: Ejecutar Prompt 1 — Limpieza

**Files:**
- Modificar: `TRABAJO M3/TAREA-C_Flujo-Procesamiento/flujo-completo.md` (sección 2)

**Criterios de éxito antes de ejecutar:**
- El output NO contiene "eh", "bueno", "qué os parece", ni repeticiones ("en en", "30.000 30.000")
- El output NO añade ideas que no estaban en el input (ej. no menciona fechas concretas, no amplía la descripción de los planes)
- El output conserva las 3 ideas originales: trato cercano, clases en diferido (estándar/premium), objetivo de usuarias

- [ ] **Paso 1: Preparar el prompt completo con el input real**

El mensaje a enviar al modelo es exactamente:

```text
Eres un editor técnico. Recibirás una transcripción de voz en bruto.

Tu única tarea es limpiar el texto:
- Elimina muletillas (eh, bueno, a ver, o sea, qué os parece)
- Corrige repeticiones de palabras (en en → en, 30.000 30.000 → 30.000)
- Añade puntuación correcta
- Divide en frases claras

Restricciones estrictas:
- NO reorganices las ideas
- NO interpretes ni amplíes el contenido
- NO añadas información que no esté en el texto original
- NO elimines ninguna idea, por pequeña que parezca

Transcripción a limpiar:
Eh, buenas, se me han ocurrido un par de ideas de negocio para Yaya y la primera
es que eh? Debemos tener un trato muy cercano con todas las Yaya fitter, eh?
Esto es algo que hay que incluir en toda nuestra documentación y había pensado
en en implementar un par de cosillas, por ejemplo que las clases quedemos en
directo también estén en en diferido para que puedan acceder siempre que quieran
y para el modelo estándar, tendrán un límite de de esas visualizaciones, pero
para el premium ya tener todas desbloqueadas y bueno, eh? Había pensado también
que un objetivo es de ventas para este año y es llegar a a por lo menos
30.000 30.000 usuarias activas, qué os parece?
```

- [ ] **Paso 2: Ejecutar el prompt**

Enviar el mensaje anterior al modelo `claude-sonnet-4-6` sin system prompt (este paso es técnico, sin personalidad de marca). Capturar el output completo.

- [ ] **Paso 3: Verificar contra los criterios de éxito**

Comprobar manualmente:
- [ ] No contiene "eh", "bueno", "qué os parece"
- [ ] No contiene "en en" ni "30.000 30.000"
- [ ] Menciona trato cercano con YayaFitters
- [ ] Menciona plan estándar con límite de visualizaciones
- [ ] Menciona plan premium con acceso ilimitado
- [ ] Menciona objetivo de usuarias activas sin convertir "este año" en fecha concreta

Si falla algún criterio, ajustar el prompt añadiendo un ejemplo de lo que NO se debe hacer y re-ejecutar.

- [ ] **Paso 4: Documentar en flujo-completo.md**

En la sección `## 2. Prompt 1 — Limpieza`:
- Sustituir `[SE AÑADE EN TASK 2]` bajo `### Instrucción enviada al modelo` con el prompt completo del Paso 1
- Sustituir `[SE AÑADE EN TASK 2]` bajo `### Output real del modelo` con el output capturado en el Paso 2

Guardar el output del Paso 2 en una variable `OUTPUT_PROMPT_1` para usarlo en el Task 3.

- [ ] **Paso 5: Commit**

```bash
git add "TRABAJO M3/TAREA-C_Flujo-Procesamiento/flujo-completo.md"
git commit -m "feat: tarea-c prompt-1 limpieza ejecutado y documentado"
```

---

## Task 3: Ejecutar Prompt 2 — Clasificación

**Files:**
- Modificar: `TRABAJO M3/TAREA-C_Flujo-Procesamiento/flujo-completo.md` (sección 3)

**Criterios de éxito antes de ejecutar:**
- El output contiene exactamente 3 bloques `CATEGORÍA / IMPORTANCIA / IDEA`
- No contiene ninguna frase de introducción ni conclusión (solo los bloques)
- La idea de usuarias activas tiene `[PENDIENTE — confirmar fecha]` en lugar de un año concreto
- Los nombres "plan estándar" y "premium" aparecen con exactamente esa nomenclatura (se verificará contra Cap. 1 y Cap. 3 en Task 5)

- [ ] **Paso 1: Preparar el prompt completo**

El mensaje a enviar al modelo es (sustituir `<<OUTPUT_PROMPT_1>>` con el output real del Task 2):

```text
Recibirás un texto con ideas de negocio. Clasifica cada idea usando este formato exacto:

CATEGORÍA: [Marca / Producto / Métricas comerciales / Operaciones]
IMPORTANCIA: [Alta / Media / Baja]
IDEA: [descripción literal de la idea, sin parafrasear]

Reglas:
- Un bloque por idea. No agrupes ideas distintas en un solo bloque.
- NO uses prosa ni introducciones. Responde únicamente con bloques CATEGORÍA / IMPORTANCIA / IDEA.
- Si el texto contiene referencias temporales relativas como "este año", "próximo trimestre"
  o "en breve", NO las conviertas en fechas concretas. Mantenlas como están o márcalas
  como [PENDIENTE — confirmar fecha].
- Fecha actual para referencia: 2026-05-29

Texto a clasificar:
<<OUTPUT_PROMPT_1>>
```

- [ ] **Paso 2: Ejecutar el prompt**

Enviar el mensaje anterior al modelo `claude-sonnet-4-6` sin system prompt. Capturar el output completo.

- [ ] **Paso 3: Verificar contra los criterios de éxito**

- [ ] El output tiene exactamente 3 bloques CATEGORÍA/IMPORTANCIA/IDEA
- [ ] No hay texto antes ni después de los bloques
- [ ] La idea del objetivo de ventas contiene `[PENDIENTE` en lugar de "2026" o cualquier año
- [ ] Los nombres de los planes son "plan estándar" y "premium" (anotar los nombres exactos que use el modelo — se compararán en Task 5)

**Si el modelo convirtió "este año" en "2026" o cualquier año:** documentarlo explícitamente como ejemplo de alucinación detectada y re-ejecutar con la instrucción de fechas reforzada.

- [ ] **Paso 4: Documentar en flujo-completo.md**

En la sección `## 3. Prompt 2 — Clasificación por Importancia`:
- Sustituir `[SE AÑADE EN TASK 3]` bajo `### Instrucción enviada al modelo` con el prompt completo del Paso 1 (con el output real de Prompt 1 incrustado)
- Sustituir `[SE AÑADE EN TASK 3]` bajo `### Output real del modelo` con el output capturado en el Paso 2
- Sustituir `[SE AÑADE EN TASK 3]` bajo `### Análisis: alucinación de fechas` con una de estas dos frases:
  - Si el filtro funcionó: *"El modelo respetó la referencia temporal relativa 'este año' y la marcó como [PENDIENTE — confirmar fecha], evitando inferir el año por su knowledge cutoff."*
  - Si el filtro falló (y se corrigió): *"En la primera ejecución el modelo convirtió 'este año' en [AÑO]. Se añadió la instrucción de restricción temporal y se re-ejecutó. El segundo output respetó la referencia relativa."*

Guardar el output del Paso 2 en una variable `OUTPUT_PROMPT_2` para usarlo en Tasks 4 y 5.

- [ ] **Paso 5: Commit**

```bash
git add "TRABAJO M3/TAREA-C_Flujo-Procesamiento/flujo-completo.md"
git commit -m "feat: tarea-c prompt-2 clasificacion ejecutado y documentado"
```

---

## Task 4: Ejecutar Prompt 3 — Redacción del Documento

**Files:**
- Modificar: `TRABAJO M3/TAREA-C_Flujo-Procesamiento/flujo-completo.md` (sección 4)

**Criterios de éxito antes de ejecutar:**
- El borrador tiene al menos 3 capítulos: Propuesta de valor, Modelo de negocio, Objetivos y métricas
- Los campos sin datos del input aparecen como `[PENDIENTE]` (no inventados)
- El tono es formal, orientado a datos, sin adjetivos vacíos (aplicar checklist del Manual de Estilo)
- No contiene palabras prohibidas del Manual de Estilo YayaFit

- [ ] **Paso 1: Leer el system prompt de inversores**

Leer `TRABAJO M3/TAREA-B_Tono-Persona/system-prompt-inversor.md` y extraer el bloque de texto dentro del bloque de código ` ```text ` (desde "Eres el Director de Estrategia..." hasta "...No añadir secciones no solicitadas."). Este texto será el `system` de la llamada al modelo.

- [ ] **Paso 2: Preparar el prompt de usuario**

El mensaje de usuario a enviar (sustituir `<<OUTPUT_PROMPT_2>>` con el output real del Task 3):

```text
Genera un borrador estructurado de Propuesta para Inversores a partir de las ideas clasificadas.

Usa el siguiente esquema de campos. Si un campo no tiene información en el input,
escríbelo como [PENDIENTE]. Nunca inventes datos.

Campos disponibles:
- {{ronda}} — Ronda de financiación
- {{importe}} — Importe solicitado
- {{uso_fondos}} — Uso de fondos
- {{metricas}} — Métricas clave actuales
- {{hitos}} — Hitos alcanzados
- {{proyeccion_12m}} — Proyección a 12 meses
- {{equipo}} — Equipo
- {{nombre_inversor}} — Nombre del inversor
- {{importe_propuesto}} — Importe propuesto / participación

Fecha actual: 2026-05-29

Estructura la propuesta en estos capítulos:
- Capítulo 1: Propuesta de valor y diferenciación
- Capítulo 2: Modelo de negocio y planes
- Capítulo 3: Objetivos y métricas

Ideas clasificadas a desarrollar:
<<OUTPUT_PROMPT_2>>
```

- [ ] **Paso 3: Ejecutar el prompt con system prompt**

Enviar al modelo `claude-sonnet-4-6` con:
- `system`: contenido extraído del Paso 1
- `messages[0].content`: mensaje del Paso 2

Capturar el output completo.

- [ ] **Paso 4: Verificar contra los criterios de éxito**

- [ ] Contiene Capítulo 1, Capítulo 2 y Capítulo 3
- [ ] Los campos sin datos aparecen como `[PENDIENTE]`
- [ ] No contiene palabras prohibidas: "increíble", "fantástico", "potenciar", "optimizar", "sinergia", "holístico", "empoderar", "disruptivo", "revolucionario", "innovador"
- [ ] Menciona "plan estándar" y "premium" (anotar nombres exactos para comparar en Task 5)
- [ ] Menciona 30.000 usuarias activas en la sección de métricas

- [ ] **Paso 5: Documentar en flujo-completo.md**

En la sección `## 4. Prompt 3 — Redacción del Documento`:
- Sustituir `[SE AÑADE EN TASK 4]` bajo `### System Prompt aplicado` con el texto del system prompt del Paso 1
- Sustituir `[SE AÑADE EN TASK 4]` bajo `### Instrucción enviada al modelo` con el mensaje del Paso 2 (con el output real de Prompt 2 incrustado)
- Sustituir `[SE AÑADE EN TASK 4]` bajo `### Output real del modelo (Borrador Propuesta para Inversores)` con el output capturado en el Paso 3

- [ ] **Paso 6: Commit**

```bash
git add "TRABAJO M3/TAREA-C_Flujo-Procesamiento/flujo-completo.md"
git commit -m "feat: tarea-c prompt-3 redaccion ejecutado y documentado"
```

---

## Task 5: Test de Coherencia — Cap. 1 vs Cap. 3

**Files:**
- Modificar: `TRABAJO M3/TAREA-C_Flujo-Procesamiento/flujo-completo.md` (sección 5)

**Objetivo:** Verificar que dos capítulos generados de forma completamente independiente (sin verse el uno al otro) usan los mismos nombres de variables y el mismo tono. Este es el test del ejercicio de coherencia.

- [ ] **Paso 1: Preparar el prompt de Capítulo 1 (aislado)**

Seleccionar del `OUTPUT_PROMPT_2` (Task 3) únicamente las ideas de categoría **Marca** y **Producto** (las que pertenecen a Cap. 1). Enviar al modelo con el mismo system prompt de inversores y este mensaje de usuario:

```text
Genera únicamente el Capítulo 1: "Propuesta de valor y diferenciación" de una
Propuesta para Inversores de YayaFit.

Fecha actual: 2026-05-29
Si un dato no está en el input, escribir [PENDIENTE]. No inventar datos.

Ideas de partida:
<<IDEAS_MARCA_Y_PRODUCTO_DE_OUTPUT_PROMPT_2>>
```

Capturar el output. Anotar los nombres exactos que usa el modelo para los planes.

- [ ] **Paso 2: Preparar el prompt de Capítulo 3 (aislado)**

Seleccionar del `OUTPUT_PROMPT_2` (Task 3) únicamente las ideas de categoría **Métricas comerciales**. Enviar al modelo con el mismo system prompt de inversores y este mensaje:

```text
Genera únicamente el Capítulo 3: "Objetivos y métricas" de una Propuesta para
Inversores de YayaFit.

Fecha actual: 2026-05-29
Si un dato no está en el input, escribir [PENDIENTE]. No inventar datos.

Ideas de partida:
<<IDEAS_METRICAS_DE_OUTPUT_PROMPT_2>>
```

Capturar el output. Anotar los nombres de los planes si aparecen en el capítulo.

- [ ] **Paso 3: Comparar nombres y tono**

Rellenar esta tabla con los valores reales observados en los outputs del Paso 1 y Paso 2:

| Variable | Cap. 1 (output real) | Cap. 3 (output real) | ¿Coinciden? |
| --- | --- | --- | --- |
| Nombre del plan básico | [anotar] | [anotar o "no aparece"] | [Sí/No] |
| Nombre del plan alto | [anotar] | [anotar o "no aparece"] | [Sí/No] |
| Métrica de usuarias | "no aplica" | [anotar] | N/A |
| Tono (adjetivo resumen) | [anotar] | [anotar] | [Sí/No] |

Si alguna variable difiere: documentarlo como **fallo de coherencia detectado**. Esto es un resultado válido — el ejercicio busca que ocurra para demostrar el problema.

- [ ] **Paso 4: Documentar en flujo-completo.md**

En la sección `## 5. Test de Coherencia`:
- Sustituir `[SE AÑADE EN TASK 5]` bajo `### Capítulo 1` con el output del Paso 1
- Sustituir `[SE AÑADE EN TASK 5]` bajo `### Capítulo 3` con el output del Paso 2
- Sustituir `[SE AÑADE EN TASK 5]` bajo `### Tabla de verificación` con la tabla rellenada del Paso 3

- [ ] **Paso 5: Commit**

```bash
git add "TRABAJO M3/TAREA-C_Flujo-Procesamiento/flujo-completo.md"
git commit -m "feat: tarea-c test-coherencia cap1-vs-cap3 documentado"
```

---

## Task 6: Conclusiones y commit final

**Files:**
- Modificar: `TRABAJO M3/TAREA-C_Flujo-Procesamiento/flujo-completo.md` (sección 6)

- [ ] **Paso 1: Escribir las conclusiones del flujo**

En la sección `## 6. Conclusiones del Flujo`, escribir un párrafo breve (5-8 líneas) que responda:
- ¿El flujo de 3 pasos conservó todas las ideas del input original?
- ¿Se detectó alguna alucinación? ¿El filtro de fechas funcionó?
- ¿El test de coherencia encontró diferencias entre Cap. 1 y Cap. 3?
- ¿Qué error del módulo es más fácil de reproducir con este input?

- [ ] **Paso 2: Verificar el documento final completo**

Abrir `TRABAJO M3/TAREA-C_Flujo-Procesamiento/flujo-completo.md` y comprobar que no hay ninguna sección con `[SE AÑADE EN TASK X]` sin rellenar.

- [ ] **Paso 3: Commit final**

```bash
git add "TRABAJO M3/TAREA-C_Flujo-Procesamiento/flujo-completo.md"
git commit -m "feat: tarea-c flujo completo documentado - entregable final"
```
