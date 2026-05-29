# Spec: Tarea D — Framework de Revisión y Alucinaciones

**Fecha:** 2026-05-29  
**Módulo:** M3 — Outputs Profesionales y Estandarización Documental  
**Contexto:** Continuación del flujo de Tarea C. El documento a revisar es la Propuesta para Inversores generada en Prompt 3 de `TRABAJO M3/TAREA-C_Flujo-Procesamiento/flujo-completo.md`.

---

## Objetivo

Diseñar un framework de revisión de dos pasos que tome el documento final generado en Tarea C y lo evalúe con un "Crítico Externo", detectando fallos de completitud, alucinaciones y desviaciones de tono. El resultado es un checklist estructurado y un score de fidelidad 1-10.

---

## Archivo a crear

`TRABAJO M3/TAREA-D_Revisión-Alucinaciones/revision-alucinaciones.md`

---

## Estructura del documento

### 1. Input de referencia
Transcripción original copiada literalmente de Tarea C. Es la fuente de verdad contra la que se compara todo. El archivo debe ser autocontenido — no requiere abrir Tarea C para entender la revisión.

### 2. Documento a revisar
La Propuesta para Inversores completa (output de Prompt 3 de Tarea C), copiada íntegramente.

### 3. Prompt 4a — Crítico Externo (Checklist)

**Rol del modelo:** Revisor externo sin acceso al proceso de generación.

**Input que recibe:**
- Transcripción original (fuente de verdad)
- Documento final generado

**Tarea:** Evaluar exactamente 3 criterios.

**Formato de output obligatorio — solo esto:**

| Criterio | Resultado | Observación |
|---|---|---|
| Completitud | ✅/❌/⚠️ | ¿Qué idea falta o aparece incompleta? |
| Alucinaciones | ✅/❌/⚠️ | ¿Qué dato no tenía origen en el input? |
| Tono | ✅/❌/⚠️ | ¿Cumple el perfil inversor del Manual de Estilo? |

Más una línea de veredicto final. Sin prosa adicional.

**Restricciones del prompt:**
- No usar información del system prompt de generación ni del flujo de Tarea C
- Responder únicamente con la tabla + veredicto
- Los campos [PENDIENTE] del documento no cuentan como alucinación; cuentan como dato no disponible

### 4. Output real del modelo (Prompt 4a)
El output real ejecutado en el modelo, sin editar.

### 5. Prompt 4b — Scoring

**Input que recibe:** La tabla de resultados del Prompt 4a.

**Tarea:** Asignar una nota del 1 al 10 exclusivamente sobre fidelidad a los datos de entrada. No evalúa redacción ni formato.

**Formato de output obligatorio:**
```
SCORE: X/10
[2-3 líneas de justificación]
```

**Restricciones del prompt:**
- El score mide solo fidelidad al input original, no calidad del texto
- Justificación debe referenciar los hallazgos concretos de la tabla del 4a

### 6. Output real del modelo (Prompt 4b)
El output real ejecutado en el modelo, sin editar.

### 7. Análisis de resultados
Sección de conclusiones: qué detectó bien el framework, qué pasó por alto, y qué aprendizaje deja para el diseño de sistemas de revisión.

---

## Criterios de éxito

- El Crítico Externo detecta correctamente las 3 ideas del input original (completitud)
- El Crítico Externo no confunde los campos [PENDIENTE] con alucinaciones
- El score refleja la fidelidad real del flujo (se espera ≥7 dado que el flujo de Tarea C mantuvo todas las ideas)
- El documento es autocontenido y no requiere abrir Tarea C

---

## Restricciones

- Sin inventar outputs — todos los resultados son ejecuciones reales del modelo
- El checklist tiene exactamente 3 criterios, no más
- El scoring es un único número + justificación breve, no sub-scores por criterio
