# Tarea C — Flujo de Procesamiento: De la Idea al Documento

**Módulo:** M3 — Outputs Profesionales y Estandarización Documental  
**Fecha:** 2026-05-29  
**Documento destino:** Propuesta para Inversores (YayaFit)  
**Método de ejecución:** API Claude — outputs reales documentados en el entregable final

---

## Objetivo

Diseñar y ejecutar un flujo de 3 prompts secuenciales que transforme una transcripción de voz en bruto en un borrador estructurado de Propuesta para Inversores, documentando cada fase del proceso para demostrar cómo opera el "Motor de Generación Documental".

---

## Input Original

Transcripción de voz del CEO de YayaFit, sin editar:

> "Eh, buenas, se me han ocurrido un par de ideas de negocio para Yaya y la primera es que eh? Debemos tener un trato muy cercano con todas las Yaya fitter, eh? Esto es algo que hay que incluir en toda nuestra documentación y había pensado en en implementar un par de cosillas, por ejemplo que las clases quedemos en directo también estén en en diferido para que puedan acceder siempre que quieran y para el modelo estándar, tendrán un límite de de esas visualizaciones, pero para el premium ya tener todas desbloqueadas y bueno, eh? Había pensado también que un objetivo es de ventas para este año y es llegar a a por lo menos 30.000 30.000 usuarias activas, qué os parece?"

---

## Arquitectura del Flujo

```text
[INPUT RAW — transcripción de voz]
          ↓
  Prompt 1: Limpieza
  (elimina muletillas, repite, no interpreta)
          ↓ texto limpio
  Prompt 2: Clasificación
  (categoriza por tipo e importancia, filtra fechas ambiguas)
          ↓ estructura clasificada
  Prompt 3: Redacción
  (genera Propuesta para Inversores con plantilla Tarea A + tono Tarea B)
          ↓
  [BORRADOR — Propuesta para Inversores]
          ↓
  Test de coherencia
  (Cap. 1 y Cap. 3 generados por separado — verificar nombres y tono)
```

**Regla de activación del tono de marca:** el System Prompt del inversor (Tarea B) se aplica **únicamente en el Prompt 3**. Los pasos 1 y 2 son técnicos y no requieren personalidad de marca.

---

## Prompt 1 — Limpieza

### Instrucción del Prompt 1

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
[INPUT]
```

### Output esperado — Prompt 1

> "Propongo dos líneas de acción para YayaFit. Primero, reforzar el trato cercano con todas las YayaFitters en toda nuestra documentación. Segundo, implementar clases en diferido: el plan estándar tendrá un límite de visualizaciones y el premium las tendrá desbloqueadas. El objetivo de ventas para este año es alcanzar al menos 30.000 usuarias activas."

---

## Prompt 2 — Clasificación por Importancia

### Instrucción del Prompt 2

```text
Recibirás un texto con ideas de negocio. Clasifica cada idea usando este formato exacto:

CATEGORÍA: [Marca / Producto / Métricas comerciales / Operaciones]
IMPORTANCIA: [Alta / Media / Baja]
IDEA: [descripción literal de la idea, sin parafrasear]

Reglas:
- Un bloque por idea. No agrupes ideas distintas en un solo bloque.
- NO uses prosa ni introducciones. Responde únicamente con bloques CATEGORÍA / IMPORTANCIA / IDEA.
- Si el texto contiene referencias temporales relativas como "este año", "próximo trimestre" o "en breve",
  NO las conviertas en fechas concretas. Mantenlas como están o márcalas como [PENDIENTE — confirmar fecha].
- Fecha actual para referencia: {{fecha}}

Texto a clasificar:
[OUTPUT DEL PROMPT 1]
```

### Output esperado — Prompt 2

```text
CATEGORÍA: Marca / Experiencia de cliente
IMPORTANCIA: Alta
IDEA: Reforzar el trato cercano con todas las YayaFitters en toda la documentación

CATEGORÍA: Producto / Funcionalidad
IMPORTANCIA: Alta
IDEA: Implementar clases en diferido — plan estándar con límite de visualizaciones, premium con acceso ilimitado

CATEGORÍA: Métricas comerciales
IMPORTANCIA: Alta
IDEA: Objetivo de ventas para este año: 30.000 usuarias activas [PENDIENTE — confirmar fecha exacta]
```

### Nota sobre alucinación de fechas

Si no se inyecta `{{fecha}}` ni se añade la restricción de fechas relativas, el modelo puede inferir el año por su knowledge cutoff y escribir "en 2025" cuando el input solo dice "para este año". Este filtro convierte una alucinación silenciosa en un dato marcado como pendiente.

---

## Prompt 3 — Redacción del Documento

### System Prompt (de Tarea B)

Aplicar el contenido de `TRABAJO M3/TAREA-B_Tono-Persona/system-prompt-inversor.md` como system prompt para garantizar tono riguroso, orientado a datos y sin relleno.

### Instrucción del Prompt 3

```text
Eres un redactor de propuestas para inversores de YayaFit. Recibirás ideas clasificadas
y debes generar un borrador estructurado de Propuesta para Inversores.

Usa el siguiente esquema de campos (de la plantilla Tarea A):
- {{ronda}} — Ronda de financiación
- {{importe}} — Importe solicitado
- {{uso_fondos}} — Uso de fondos
- {{metricas}} — Métricas clave actuales
- {{hitos}} — Hitos alcanzados
- {{proyeccion_12m}} — Proyección a 12 meses
- {{equipo}} — Equipo
- {{nombre_inversor}} — Nombre del inversor
- {{importe_propuesto}} — Importe propuesto / participación

Reglas:
- Si un campo no tiene información en el input, escríbelo como [PENDIENTE]. Nunca inventes datos.
- Fecha actual: {{fecha}}
- Aplica el tono del Manual de Estilo YayaFit para inversores: riguroso, orientado a datos,
  sin adjetivos vacíos, sin hipérboles.
- Estructura la propuesta en capítulos. Los capítulos mínimos son:
  - Capítulo 1: Propuesta de valor y diferenciación
  - Capítulo 2: Modelo de negocio y planes
  - Capítulo 3: Objetivos y métricas

Ideas clasificadas a desarrollar:
[OUTPUT DEL PROMPT 2]
```

---

## Test de Coherencia — Cap. 1 vs Cap. 3

Generados con prompts independientes, usando únicamente las ideas relevantes para cada capítulo. El prompt de cada capítulo es igual al Prompt 3 pero con el campo `Ideas clasificadas a desarrollar` limitado solo a las ideas del capítulo en cuestión.

### Qué verificar

| Variable | Cap. 1 esperado | Cap. 3 esperado | ¿Coinciden? |
| --- | --- | --- | --- |
| Nombre del plan básico | "plan estándar" | "plan estándar" | Por verificar |
| Nombre del plan alto | "premium" | "premium" | Por verificar |
| Métrica de usuarias | — | "30.000 usuarias activas" | Por verificar |
| Tono | Formal / datos | Formal / datos | Por verificar |

Si los nombres de variables difieren entre capítulos (ej. "plan básico" vs "plan estándar"), se documenta como fallo de coherencia — exactamente el escenario que este ejercicio busca detectar.

---

## Entregable Final

Un único archivo Markdown (`TAREA-C_Flujo-Procesamiento/flujo-completo.md`) que muestra:

1. Input original (transcripción sin editar)
2. Prompt 1 + output real del modelo
3. Prompt 2 + output real del modelo
4. Prompt 3 + output real del modelo (borrador completo)
5. Test de coherencia: Cap. 1 aislado + Cap. 3 aislado + tabla de verificación

---

## Errores Documentados del Módulo

| Error | Dónde aparece | Cómo se mitiga |
| --- | --- | --- |
| Alucinación de fecha ("en 2025") | Prompt 2 sin filtro | Instrucción explícita + inyección de `{{fecha}}` |
| Formato rompible en clasificación | Prompt 2 | Instrucción "solo bloques, sin prosa" |
| Style drift en documentos largos | Prompt 3 capítulos largos | Generar capítulos por separado con reminder de estilo |
| Efecto teléfono escacharrado | Entre Prompt 1→2→3 | Comparar output final con input original, no con intermedios |
