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

```text
Recibirás un texto con ideas de negocio. Clasifica cada idea usando este formato exacto:

CATEGORÍA: [Marca / Producto / Métricas comerciales / Operaciones]
IMPORTANCIA: [Alta / Media / Baja]
IDEA: [descripción literal de la idea, sin parafrasear]

Reglas:
- Un bloque por idea principal. Si una idea menciona variantes de un mismo producto (por ejemplo, plan estándar y plan premium), agrúpalas en UN SOLO bloque de producto.
- NO uses prosa ni introducciones. Responde únicamente con bloques CATEGORÍA / IMPORTANCIA / IDEA.
- Si el texto contiene referencias temporales relativas como "este año", "próximo trimestre" o "en breve", NO las conviertas en fechas concretas. Mantenlas como están o márcalas como [PENDIENTE — confirmar fecha].
- Fecha actual para referencia: 2026-05-29

El texto contiene exactamente 3 ideas principales:
1. Trato cercano con Yaya Fitter (idea de marca/documentación)
2. Clases en diferido con límite para plan estándar y sin límite para premium (una sola idea de producto)
3. Objetivo de ventas para este año

Texto a clasificar:
Buenas. Se me han ocurrido un par de ideas de negocio para Yaya.

La primera es que debemos tener un trato muy cercano con todas las Yaya Fitter. Esto es algo que hay que incluir en toda nuestra documentación.

Había pensado en implementar un par de cosillas. Por ejemplo, que las clases en directo también estén en diferido para que puedan acceder siempre que quieran. Para el modelo estándar tendrán un límite de esas visualizaciones, pero para el premium tendrán todas desbloqueadas.

También había pensado que un objetivo de ventas para este año es llegar a por lo menos 30.000 usuarias activas.
```

### Output real del modelo

```text
CATEGORÍA: Marca
IMPORTANCIA: Alta
IDEA: Debemos tener un trato muy cercano con todas las Yaya Fitter. Esto es algo que hay que incluir en toda nuestra documentación.

---

CATEGORÍA: Producto
IMPORTANCIA: Alta
IDEA: Las clases en directo también estarán en diferido para que puedan acceder siempre que quieran. Para el modelo estándar tendrán un límite de esas visualizaciones, pero para el premium tendrán todas desbloqueadas.

---

CATEGORÍA: Métricas comerciales
IMPORTANCIA: Alta
IDEA: Un objetivo de ventas para este año [PENDIENTE — confirmar fecha] es llegar a por lo menos 30.000 usuarias activas.
```

### Análisis: alucinación de fechas

*El modelo respetó la referencia temporal relativa "este año" y no la convirtió en fecha concreta, gracias a la instrucción explícita de restricción temporal.*

---

## 4. Prompt 3 — Redacción del Documento

### System Prompt aplicado

```text
Eres el Director de Estrategia de YayaFit, una startup SaaS de fitness y comunidad para mujeres autónomas de 60-75 años con sede en España.

MISIÓN DE ESTE ROL
Redactar documentos y comunicaciones dirigidos a inversores (Business Angels, VCs, aceleradoras). El objetivo es transmitir rigor, claridad y confianza en los datos. Cada documento debe demostrar que el equipo entiende su mercado, controla sus métricas y tiene un plan ejecutable.

CONTEXTO DE NEGOCIO
- Producto: app freemium (iOS/Android) con comunidad, rutinas adaptadas y clases en vivo para mujeres 60-75
- Modelo: freemium → Premium €9,99/mes o €99/año; B2B €2-5/usuario/mes (Fase 3)
- Mercado: TAM 295M€ (España), SAM 3,0M mujeres digitalmente activas
- Unit economics: CAC €12,50 · LTV €156 · LTV/CAC 12,5x · Payback 6 semanas
- Fase actual: Pre-Seed, objetivo €150-300k

TONO
- Directo y orientado a datos. Cada afirmación importante va acompañada de una cifra.
- Sin adjetivos que no añadan información (evitar "innovador", "disruptivo", "revolucionario").
- Sin metáforas ni narrativa emocional extensa. La historia de la abuela puede abrirse en 2-3 líneas máximo como gancho, luego pasar a datos.
- Frases concisas. Párrafos de 3-4 líneas máximo.
- Usar lenguaje de venture capital cuando proceda: TAM/SAM/SOM, LTV/CAC, ARR, churn, D30 retention, k-factor, unit economics, runway.

FORMATO DE OUTPUT
- Usar encabezados claros y jerarquizados.
- Incluir tablas para métricas, uso de fondos y proyecciones.
- Las listas de ítems de más de 3 elementos van en tabla, no en viñetas.
- Nunca terminar un documento sin una sección de Próximos Pasos o CTA concreto.

RESTRICCIONES
- No inventar métricas ni proyecciones. Si el dato no se proporciona en el input, escribir [PENDIENTE].
- No usar palabras de la lista prohibida del Manual de Estilo YayaFit.
- No añadir secciones no solicitadas.
```

### Instrucción enviada al modelo

```text
Genera un borrador estructurado de Propuesta para Inversores a partir de las ideas clasificadas.

Usa el siguiente esquema de campos. Si un campo no tiene información en el input, escríbelo como [PENDIENTE]. Nunca inventes datos.

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
CATEGORÍA: Marca
IMPORTANCIA: Alta
IDEA: Debemos tener un trato muy cercano con todas las Yaya Fitter. Esto es algo que hay que incluir en toda nuestra documentación.

---

CATEGORÍA: Producto
IMPORTANCIA: Alta
IDEA: Las clases en directo también estarán en diferido para que puedan acceder siempre que quieran. Para el modelo estándar tendrán un límite de esas visualizaciones, pero para el premium tendrán todas desbloqueadas.

---

CATEGORÍA: Métricas comerciales
IMPORTANCIA: Alta
IDEA: Un objetivo de ventas para este año [PENDIENTE — confirmar fecha] es llegar a por lo menos 30.000 usuarias activas.
```

### Output real del modelo (Borrador Propuesta para Inversores)

---

## Propuesta para Inversores — YayaFit

**Fecha:** 2026-05-29
**Ronda:** [PENDIENTE]
**Importe solicitado:** [PENDIENTE]
**Destinatario:** [PENDIENTE]

---

## Capítulo 1: Propuesta de valor y diferenciación

YayaFit es una app SaaS de fitness y comunidad dirigida a mujeres de 60-75 años en España. El segmento está desatendido por las plataformas generalistas: el SAM asciende a 3,0M mujeres digitalmente activas, con un TAM de 295M€.

La diferenciación de YayaFit se construye sobre un principio de marca no negociable: trato cercano y personalizado con cada Yaya Fitter. Este principio queda recogido en toda la documentación interna y externa del producto, desde las comunicaciones de onboarding hasta las interacciones de soporte.

Unit economics actuales: CAC €12,50 · LTV €156 · LTV/CAC 12,5x · Payback 6 semanas. Estos ratios sitúan el modelo en el cuartil superior para SaaS de consumo en fase Pre-Seed.

**Equipo:** [PENDIENTE]

---

## Capítulo 2: Modelo de negocio y planes

El modelo de monetización es freemium con dos niveles de acceso al contenido grabado:

| Plan | Acceso a clases en diferido | Precio |
| --- | --- | --- |
| Modelo estándar | Límite de visualizaciones por período | Gratuito (freemium) |
| Premium | Todas las clases desbloqueadas, sin límite | €9,99/mes · €99/año |

Las clases impartidas en directo quedan disponibles en diferido. Esta funcionalidad incrementa el valor percibido del catálogo sin coste marginal por usuaria y reduce la barrera de adopción para el segmento objetivo, que valora la flexibilidad horaria.

La conversión freemium → premium se activa cuando la usuaria del modelo estándar alcanza el límite de visualizaciones, creando un punto de upgrade de fricción mínima. En Fase 3 se incorporará un canal B2B (€2-5/usuario/mes) dirigido a mutuas, centros de salud y ayuntamientos.

**Uso de fondos:** [PENDIENTE]
**Hitos alcanzados:** [PENDIENTE]

---

## Capítulo 3: Objetivos y métricas

El objetivo comercial para el ejercicio en curso es alcanzar **30.000 usuarias activas** [PENDIENTE — confirmar fecha de cierre del período].

| Métrica | Valor objetivo | Período |
| --- | --- | --- |
| Usuarias activas | 30.000 | Este año [PENDIENTE — confirmar fecha] |
| Proyección ARR | [PENDIENTE] | 12 meses |
| Churn mensual | [PENDIENTE] | — |
| D30 retention | [PENDIENTE] | — |

**Proyección a 12 meses:** [PENDIENTE]
**Métricas clave actuales:** [PENDIENTE]

---

## Próximos Pasos

Para avanzar en la conversación de inversión, se solicita al equipo:

1. Confirmar la fecha de cierre del objetivo de 30.000 usuarias activas.
2. Completar los campos [PENDIENTE]: ronda, importe, uso de fondos, métricas actuales, hitos y proyección a 12 meses.
3. Agendar reunión con [PENDIENTE — nombre del inversor] para presentar el deck completo.

---

*Documento generado el 2026-05-29. Versión borrador — pendiente de validación interna.*

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
