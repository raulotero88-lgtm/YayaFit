# Tarea C — Flujo de Procesamiento: De la Idea al Documento

**Módulo:** M3 — Outputs Profesionales y Estandarización Documental
**Documento:** Propuesta para Inversores (YayaFit)
**Fecha de ejecución:** 2026-05-29
**Método:** Prompts secuenciales — outputs reales de Claude claude-sonnet-4-6

---

## 1. Input Original (Transcripción de Voz — Sin Editar)

Eh, buenas, se me han ocurrido un par de ideas de negocio para Yaya y la primera es que eh? Debemos tener un trato muy cercano con todas las Yaya fitter, eh? Esto es algo que hay que incluir en toda nuestra documentación y había pensado en en implementar un par de cosillas, por ejemplo que las clases quedemos en directo también estén en en diferido para que puedan acceder siempre que quieran y para el modelo estándar, tendrán un límite de de esas visualizaciones, pero para el premium ya tener todas desbloqueadas y bueno, eh? Había pensado también que un objetivo es de ventas para este año y es llegar a a por lo menos 30.000 30.000 usuarias activas, qué os parece?

---

## 2. Prompt 1 — Limpieza

### Instrucción enviada al modelo

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
Eh, buenas, se me han ocurrido un par de ideas de negocio para Yaya y la primera es que eh? Debemos tener un trato muy cercano con todas las Yaya fitter, eh? Esto es algo que hay que incluir en toda nuestra documentación y había pensado en en implementar un par de cosillas, por ejemplo que las clases quedemos en directo también estén en en diferido para que puedan acceder siempre que quieran y para el modelo estándar, tendrán un límite de de esas visualizaciones, pero para el premium ya tener todas desbloqueadas y bueno, eh? Había pensado también que un objetivo es de ventas para este año y es llegar a a por lo menos 30.000 30.000 usuarias activas, qué os parece?
```

### Output real del modelo

> Buenas. Se me han ocurrido un par de ideas de negocio para Yaya.
>
> La primera es que debemos tener un trato muy cercano con todas las Yaya Fitter. Esto es algo que hay que incluir en toda nuestra documentación.
>
> Había pensado en implementar un par de cosillas. Por ejemplo, que las clases en directo también estén en diferido para que puedan acceder siempre que quieran. Para el modelo estándar tendrán un límite de esas visualizaciones, pero para el premium tendrán todas desbloqueadas.
>
> También había pensado que un objetivo de ventas para este año es llegar a por lo menos 30.000 usuarias activas.

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
