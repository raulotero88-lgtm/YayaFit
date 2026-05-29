# Tarea D — Framework de Revisión y Alucinaciones — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Crear `revision-alucinaciones.md` con dos prompts ejecutados (Crítico Externo + Scoring) que evalúen el documento final de Tarea C contra la transcripción original.

**Architecture:** Flujo de dos pasos en serie. Prompt 4a actúa como revisor externo y produce una tabla de checklist (completitud / alucinaciones / tono). Prompt 4b recibe esa tabla y asigna un score 1-10 de fidelidad al input original. Ambos outputs son ejecuciones reales del modelo, documentadas sin editar.

**Tech Stack:** Markdown, Claude claude-sonnet-4-6 (via Claude Code CLI)

---

## Archivos

| Acción | Ruta |
|--------|------|
| Crear | `TRABAJO M3/TAREA-D_Revisión-Alucinaciones/revision-alucinaciones.md` |

---

### Tarea 1: Crear esqueleto del archivo

**Files:**
- Create: `TRABAJO M3/TAREA-D_Revisión-Alucinaciones/revision-alucinaciones.md`

- [ ] **Paso 1: Crear el archivo con cabecera y secciones vacías**

Crear el archivo con este contenido exacto:

```markdown
# Tarea D — Framework de Revisión y Alucinaciones

**Módulo:** M3 — Outputs Profesionales y Estandarización Documental
**Documento revisado:** Propuesta para Inversores — YayaFit
**Fecha de ejecución:** 2026-05-29
**Método:** Flujo en serie — Prompt 4a (checklist) → Prompt 4b (scoring)

---

## 1. Input de Referencia (Fuente de Verdad)

<!-- PENDIENTE: copiar transcripción original de Tarea C -->

---

## 2. Documento a Revisar

<!-- PENDIENTE: copiar propuesta final de Tarea C -->

---

## 3. Prompt 4a — Crítico Externo (Checklist)

### Instrucción enviada al modelo

<!-- PENDIENTE: escribir prompt -->

### Output real del modelo

<!-- PENDIENTE: ejecutar y documentar -->

---

## 4. Prompt 4b — Scoring

### Instrucción enviada al modelo

<!-- PENDIENTE: escribir prompt -->

### Output real del modelo

<!-- PENDIENTE: ejecutar y documentar -->

---

## 5. Análisis de Resultados

<!-- PENDIENTE: escribir tras ejecutar ambos prompts -->
```

- [ ] **Paso 2: Verificar que el archivo existe**

```powershell
Test-Path "TRABAJO M3/TAREA-D_Revisión-Alucinaciones/revision-alucinaciones.md"
```

Resultado esperado: `True`

- [ ] **Paso 3: Commit**

```bash
git add "TRABAJO M3/TAREA-D_Revisión-Alucinaciones/revision-alucinaciones.md"
git commit -m "feat: tarea-d esqueleto revision-alucinaciones"
```

---

### Tarea 2: Escribir secciones de input

**Files:**
- Modify: `TRABAJO M3/TAREA-D_Revisión-Alucinaciones/revision-alucinaciones.md`
- Reference: `TRABAJO M3/TAREA-C_Flujo-Procesamiento/flujo-completo.md`

- [ ] **Paso 1: Leer la transcripción original de Tarea C**

Leer `TRABAJO M3/TAREA-C_Flujo-Procesamiento/flujo-completo.md` — la transcripción está en la sección `## 1. Input Original`.

- [ ] **Paso 2: Sustituir la sección 1 con la transcripción original**

Reemplazar el bloque `## 1. Input de Referencia` con:

```markdown
## 1. Input de Referencia (Fuente de Verdad)

> Transcripción de voz original, sin editar. Esta es la única fuente de verdad contra la que se evalúa el documento final.

Eh, buenas, se me han ocurrido un par de ideas de negocio para Yaya y la primera es que eh? Debemos tener un trato muy cercano con todas las Yaya fitter, eh? Esto es algo que hay que incluir en toda nuestra documentación y había pensado en en implementar un par de cosillas, por ejemplo que las clases quedemos en directo también estén en en diferido para que puedan acceder siempre que quieran y para el modelo estándar, tendrán un límite de de esas visualizaciones, pero para el premium ya tener todas desbloqueadas y bueno, eh? Había pensado también que un objetivo es de ventas para este año y es llegar a a por lo menos 30.000 30.000 usuarias activas, qué os parece?
```

- [ ] **Paso 3: Leer la propuesta final de Tarea C**

En el mismo `flujo-completo.md`, la propuesta está en la sección `### Output real del modelo (Borrador Propuesta para Inversores)`.

- [ ] **Paso 4: Sustituir la sección 2 con el documento a revisar**

Reemplazar el bloque `## 2. Documento a Revisar` con la propuesta completa copiada literalmente desde `flujo-completo.md` (desde `## Propuesta para Inversores — YayaFit` hasta `*Documento generado el 2026-05-29...* `).

- [ ] **Paso 5: Commit**

```bash
git add "TRABAJO M3/TAREA-D_Revisión-Alucinaciones/revision-alucinaciones.md"
git commit -m "feat: tarea-d input-referencia y documento-a-revisar"
```

---

### Tarea 3: Diseñar y ejecutar Prompt 4a — Crítico Externo

**Files:**
- Modify: `TRABAJO M3/TAREA-D_Revisión-Alucinaciones/revision-alucinaciones.md`

- [ ] **Paso 1: Escribir el prompt 4a en la sección correspondiente**

Reemplazar `<!-- PENDIENTE: escribir prompt -->` bajo `### Instrucción enviada al modelo` con:

````markdown
```text
Eres un revisor externo. No tienes acceso al proceso de generación del documento que vas a evaluar. Tu única tarea es comparar el documento final con la transcripción original y completar la tabla de revisión.

TRANSCRIPCIÓN ORIGINAL (fuente de verdad):
[pegar transcripción original]

DOCUMENTO A REVISAR:
[pegar propuesta para inversores]

Evalúa exactamente 3 criterios y responde ÚNICAMENTE con esta tabla y una línea de veredicto. Sin prosa adicional.

| Criterio | Resultado | Observación |
|---|---|---|
| Completitud | ✅/❌/⚠️ | ¿Alguna idea del input falta o aparece incompleta en el documento? |
| Alucinaciones | ✅/❌/⚠️ | ¿Algún dato del documento no tiene origen en la transcripción original? |
| Tono | ✅/❌/⚠️ | ¿El documento cumple el tono inversor: riguroso, orientado a datos, sin adjetivos vacíos? |

Reglas:
- Los campos [PENDIENTE] en el documento NO son alucinaciones. Son datos no disponibles en el input, correctamente señalados.
- Completitud: verifica que las 3 ideas del input original estén presentes (trato cercano Yaya Fitter / clases en diferido con límites por plan / objetivo 30.000 usuarias activas).
- Tono: evalúa solo el perfil inversor — riguroso, orientado a datos, sin adjetivos que no añadan información.

Tras la tabla, añade una única línea con el veredicto global. Nada más.
```
````

- [ ] **Paso 2: Ejecutar el prompt 4a**

Enviar el prompt al modelo con los dos bloques de texto (transcripción original + documento a revisar) rellenando los placeholders `[pegar...]`. Obtener el output real.

- [ ] **Paso 3: Documentar el output real**

Reemplazar `<!-- PENDIENTE: ejecutar y documentar -->` bajo `### Output real del modelo` con el output exacto devuelto por el modelo, sin editar, envuelto en un blockquote `>`.

- [ ] **Paso 4: Commit**

```bash
git add "TRABAJO M3/TAREA-D_Revisión-Alucinaciones/revision-alucinaciones.md"
git commit -m "feat: tarea-d prompt-4a critico-externo ejecutado y documentado"
```

---

### Tarea 4: Diseñar y ejecutar Prompt 4b — Scoring

**Files:**
- Modify: `TRABAJO M3/TAREA-D_Revisión-Alucinaciones/revision-alucinaciones.md`

- [ ] **Paso 1: Escribir el prompt 4b en la sección correspondiente**

Reemplazar `<!-- PENDIENTE: escribir prompt -->` bajo `### Instrucción enviada al modelo` de la sección `## 4. Prompt 4b` con:

````markdown
```text
Recibes el resultado de una revisión de checklist de un documento generado por IA a partir de un input de datos. Tu tarea es asignar una nota del 1 al 10 a la fidelidad del documento respecto a los datos de entrada originales.

Definición de fidelidad (lo único que mides):
- 10: todas las ideas del input están en el documento, sin datos inventados
- 7-9: todas las ideas presentes; los campos [PENDIENTE] son datos no disponibles en el input, correctamente señalados
- 4-6: alguna idea del input perdida o algún dato inventado no crítico
- 1-3: ideas del input perdidas o datos inventados críticos

RESULTADO DE LA REVISIÓN (checklist del Crítico Externo):
[pegar tabla del Prompt 4a]

Responde ÚNICAMENTE con este formato, sin texto adicional:
SCORE: X/10
[2-3 líneas de justificación referenciando los hallazgos concretos de la tabla anterior]
```
````

- [ ] **Paso 2: Ejecutar el prompt 4b**

Enviar el prompt al modelo rellenando `[pegar tabla del Prompt 4a]` con el output real obtenido en la Tarea 3.

- [ ] **Paso 3: Documentar el output real**

Reemplazar `<!-- PENDIENTE: ejecutar y documentar -->` bajo `### Output real del modelo` de la sección 4 con el output exacto devuelto por el modelo, sin editar, envuelto en un blockquote `>`.

- [ ] **Paso 4: Commit**

```bash
git add "TRABAJO M3/TAREA-D_Revisión-Alucinaciones/revision-alucinaciones.md"
git commit -m "feat: tarea-d prompt-4b scoring ejecutado y documentado"
```

---

### Tarea 5: Escribir sección de análisis y commit final

**Files:**
- Modify: `TRABAJO M3/TAREA-D_Revisión-Alucinaciones/revision-alucinaciones.md`

- [ ] **Paso 1: Escribir la sección de análisis de resultados**

Reemplazar `<!-- PENDIENTE: escribir tras ejecutar ambos prompts -->` con una sección que cubra:

1. **Qué detectó bien el framework:** qué criterios fueron evaluados correctamente
2. **Qué pasó por alto o fue ambiguo:** qué limitaciones tuvo el Crítico Externo
3. **Coherencia del score:** si el score refleja bien lo que encontró el checklist
4. **Aprendizaje para diseño de sistemas de revisión:** una observación concreta sobre cómo mejorar el prompt del Crítico Externo o el criterio de scoring

La sección debe ser factual: referencia los outputs reales obtenidos en las Tareas 3 y 4. Sin opiniones genéricas.

- [ ] **Paso 2: Verificar que no quedan placeholders `<!-- PENDIENTE`**

```powershell
Select-String -Path "TRABAJO M3/TAREA-D_Revisión-Alucinaciones/revision-alucinaciones.md" -Pattern "PENDIENTE"
```

Resultado esperado: sin matches (o solo los `[PENDIENTE]` del documento copiado de Tarea C, que son legítimos).

- [ ] **Paso 3: Commit final**

```bash
git add "TRABAJO M3/TAREA-D_Revisión-Alucinaciones/revision-alucinaciones.md"
git commit -m "feat: tarea-d analisis-resultados - entregable final"
```
