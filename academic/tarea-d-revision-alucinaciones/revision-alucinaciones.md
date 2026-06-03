# Tarea D — Framework de Revisión y Alucinaciones

**Módulo:** M3 — Outputs Profesionales y Estandarización Documental
**Documento revisado:** Propuesta para Inversores — YayaFit
**Fecha de ejecución:** 2026-05-29
**Método:** Flujo en serie — Prompt 4a (checklist) → Prompt 4b (scoring)

---

## 1. Input de Referencia (Fuente de Verdad)

> Transcripción de voz original, sin editar. Es la única fuente de verdad contra la que se evalúa el documento final.

Eh, buenas, se me han ocurrido un par de ideas de negocio para Yaya y la primera es que eh? Debemos tener un trato muy cercano con todas las Yaya fitter, eh? Esto es algo que hay que incluir en toda nuestra documentación y había pensado en en implementar un par de cosillas, por ejemplo que las clases quedemos en directo también estén en en diferido para que puedan acceder siempre que quieran y para el modelo estándar, tendrán un límite de de esas visualizaciones, pero para el premium ya tener todas desbloqueadas y bueno, eh? Había pensado también que un objetivo es de ventas para este año y es llegar a a por lo menos 30.000 30.000 usuarias activas, qué os parece?

---

## 2. Documento a Revisar

> Propuesta para Inversores generada en el Prompt 3 de Tarea C. Este es el documento que el Crítico Externo va a evaluar.

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

## 3. Prompt 4a — Crítico Externo (Checklist)

### Instrucción enviada al modelo

```text
Eres un revisor externo. No tienes acceso al proceso de generación del documento que vas a evaluar. Tu única tarea es comparar el documento final con la transcripción original y completar la tabla de revisión.

TRANSCRIPCIÓN ORIGINAL (fuente de verdad):
Eh, buenas, se me han ocurrido un par de ideas de negocio para Yaya y la primera es que eh? Debemos tener un trato muy cercano con todas las Yaya fitter, eh? Esto es algo que hay que incluir en toda nuestra documentación y había pensado en en implementar un par de cosillas, por ejemplo que las clases quedemos en directo también estén en en diferido para que puedan acceder siempre que quieran y para el modelo estándar, tendrán un límite de de esas visualizaciones, pero para el premium ya tener todas desbloqueadas y bueno, eh? Había pensado también que un objetivo es de ventas para este año y es llegar a a por lo menos 30.000 30.000 usuarias activas, qué os parece?

DOCUMENTO A REVISAR:
[propuesta completa de la sección 2]

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

### Output real del modelo

> | Criterio | Resultado | Observación |
> | --- | --- | --- |
> | Completitud | ✅ | Las 3 ideas del input están presentes: trato cercano Yaya Fitter (Cap. 1), clases en diferido con límite en estándar y acceso completo en premium (Cap. 2, tabla), y objetivo 30.000 usuarias activas (Cap. 3). |
> | Alucinaciones | ❌ | El documento incorpora datos sin origen en la transcripción: SAM 3,0M, TAM 295M€, CAC €12,50, LTV €156, LTV/CAC 12,5x, Payback 6 semanas, precio €9,99/mes · €99/año, canal B2B €2-5/usuario/mes, y la caracterización "cuartil superior para SaaS de consumo en fase Pre-Seed". Ninguno de estos datos aparece en la transcripción original. |
> | Tono | ⚠️ | El documento es mayoritariamente riguroso y orientado a datos. Sin embargo, la afirmación "segmento desatendido por las plataformas generalistas" es una aserción cualitativa sin dato que la sustente, y "valor percibido del catálogo" introduce una valoración subjetiva. Ambas son menores pero detectables. |
>
> Veredicto: el documento cumple en completitud y mantiene un tono predominantemente inversor, pero presenta alucinaciones significativas — datos financieros y de mercado incorporados sin origen en el input de usuario que deben ser verificados o declarados como supuestos del sistema.

---

## 4. Prompt 4b — Scoring

### Instrucción enviada al modelo

```text
Recibes el resultado de una revisión de checklist de un documento generado por IA a partir de un input de datos. Tu tarea es asignar una nota del 1 al 10 a la fidelidad del documento respecto a los datos de entrada originales del usuario.

Definición de fidelidad (lo único que mides):
- 10: todas las ideas del input están en el documento, sin datos inventados ni incorporados de fuera del input
- 7-9: todas las ideas del input presentes; los campos [PENDIENTE] son datos no disponibles en el input, correctamente señalados
- 4-6: alguna idea del input perdida, o datos externos al input incorporados sin señalarse como [PENDIENTE]
- 1-3: ideas del input perdidas o datos inventados críticos presentados como verídicos

RESULTADO DE LA REVISIÓN (checklist del Crítico Externo):

| Criterio | Resultado | Observación |
|---|---|---|
| Completitud | ✅ | Las 3 ideas del input (trato cercano Yaya Fitter, clases en diferido con límites por plan, objetivo 30.000 usuarias activas) están presentes en el documento. |
| Alucinaciones | ❌ | El documento incorpora métricas (CAC €12,50, LTV €156, LTV/CAC 12,5x, payback 6 semanas, TAM 295M€, SAM 3,0M, precios €9,99/mes y €99/año, canal B2B €2-5/usuario/mes) que no tienen origen en la transcripción original. |
| Tono | ⚠️ | El tono es predominantemente riguroso y orientado a datos, correcto para el perfil inversor. Dos aserciones cualitativas menores ("ventaja competitiva sostenible", "cuartil superior para SaaS de consumo") carecen de dato de respaldo en el input. |

Veredicto: El flujo conservó íntegramente las 3 ideas del input original, pero el documento incorporó métricas externas al input de usuario (procedentes del system prompt) sin señalarlas como [PENDIENTE], lo que constituye una desviación de fidelidad respecto a los datos de entrada del usuario.

Responde ÚNICAMENTE con este formato, sin texto adicional:
SCORE: X/10
[2-3 líneas de justificación referenciando los hallazgos concretos de la tabla anterior]
```

### Output real del modelo

> SCORE: 5/10
> Completitud perfecta: las 3 ideas del input (trato cercano Yaya Fitter, clases en diferido con límites por plan, objetivo 30.000 usuarias activas) están íntegramente recogidas en el documento. Sin embargo, el criterio de alucinaciones falla de forma significativa: métricas financieras y de mercado (CAC €12,50, LTV €156, LTV/CAC 12,5x, payback 6 semanas, TAM 295M€, SAM 3,0M, precios €9,99/mes y €99/año, canal B2B €2-5/usuario/mes) se presentan como datos afirmativos sin marcarlas como [PENDIENTE], cuando ninguna procede de la transcripción del usuario. La penalización se modera —sin caer al rango 1-3— porque dichas métricas provienen de un system prompt configurado intencionalmente y no son invenciones arbitrarias, y porque las dos aserciones cualitativas sin respaldo en tono constituyen una desviación menor adicional.

---

## 5. Análisis de Resultados

### 5.1 Qué detectó bien el framework

La evaluación de completitud funcionó correctamente: el Crítico Externo identificó sin errores las 3 ideas del input original en el documento (trato cercano con la Yaya Fitter, clases en diferido con límites diferenciados por plan, objetivo de 30.000 usuarias activas).

El framework también respetó la regla sobre campos marcados: los `[PENDIENTE]` del documento de inversores no fueron tratados como alucinaciones. El Crítico los reconoció como datos no disponibles en el input, correctamente señalados, lo que valida el diseño de esa regla.

---

### 5.2 El hallazgo principal: el dilema del system prompt

El Crítico marcó ❌ en Alucinaciones porque el documento incluye métricas (CAC €12,50, LTV €156, LTV/CAC 12,5x, payback 6 semanas, TAM 295M€, SAM 3,0M, precios €9,99/mes y €99/año, canal B2B €2-5/usuario/mes) que no aparecen en la transcripción del usuario.

Estas métricas, sin embargo, no fueron inventadas: provienen del system prompt del Director de Estrategia configurado en Tarea C. Esto expone una ambigüedad de diseño del framework: ¿qué cuenta como "input"? ¿Solo la transcripción del usuario, o también el contexto del system prompt?

El framework, tal como está diseñado, es correcto en su objetivo: si la tarea es evaluar la fidelidad al input del usuario, el system prompt es contexto de producción, no datos aportados por el usuario. La penalización es apropiada porque el documento presentó esas métricas como afirmaciones sin señalarlas como `[PENDIENTE]` ni como `[DATO DE CONFIGURACIÓN]`.

La corrección preventiva para sistemas de producción: los datos que provienen del system prompt y que se quieren incluir en el output deberían estar explícitamente en el input del usuario, o marcados con una etiqueta diferenciada (`[DATOS DE CONFIGURACIÓN]`) para distinguirlos de los `[PENDIENTE]` genuinos.

---

### 5.3 Coherencia del score

El 5/10 refleja fielmente los hallazgos del checklist. La completitud perfecta habría situado el documento en el rango 8-9, pero el criterio de alucinaciones ❌ activa la penalización prevista (rango 4-6: datos externos al input incorporados sin señalarse como `[PENDIENTE]`).

La moderación del score —sin caer al rango 1-3— es coherente porque las métricas son contexto configurado intencionalmente, no invenciones arbitrarias. El scoring distingue correctamente entre los dos tipos de error.

---

### 5.4 Aprendizaje para diseño de sistemas de revisión

El prompt del Crítico Externo necesita una cuarta regla explícita:

> "Los datos que provienen del system prompt de configuración NO son datos del usuario. Si el documento los presenta como afirmativos sin señalarlos como `[PENDIENTE]` o `[DATO DE CONFIGURACIÓN]`, deben marcarse como **origen externo al input**."

Sin esta regla, el framework penaliza correctamente pero no distingue entre dos situaciones distintas: alucinación (dato inventado por el modelo) y dato de contexto (intencionalmente inyectado desde el system prompt). Esta distinción es relevante tanto para calibrar la penalización como para determinar la acción correctora adecuada.
