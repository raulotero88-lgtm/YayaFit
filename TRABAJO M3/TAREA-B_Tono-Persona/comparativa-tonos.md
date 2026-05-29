# Comparativa de Tonos — Mismo Input, Tres Audiencias

## Propósito

Este documento demuestra cómo el mismo hecho (YayaFit logra un D30 retention del 32% en su prototipo) se comunica de forma radicalmente distinta según la audiencia. Es el experimento de la Tarea B del ejercicio.

---

## Input común

```text
Dato a comunicar: En la fase de prototipo de YayaFit (50 testers, mayo 2026),
hemos alcanzado un D30 retention del 32%. El benchmark del sector SaaS de consumo
está entre el 22% y el 25% según Andreessen Horowitz.
```

---

## Output 1 — Tono Inversor

*(Generado con `system-prompt-inversor.md`)*

> **Tracción: retención validada en prototipo**
>
> D30 retention del 32% con 50 testers (mayo 2026). El benchmark SaaS de consumo se sitúa entre el 22% y el 25% (Andreessen Horowitz). Superamos el estándar del sector en +7 puntos porcentuales en fase de prototipo, antes de producto finalizado.
>
> Este dato sugiere que el problema de retención —el mayor riesgo en apps de fitness— está siendo resuelto desde las fases tempranas. Lo atribuimos a la combinación comunidad + contenido adaptado, que crea un vínculo de pertenencia que las apps genéricas no ofrecen.
>
> **Implicación para la ronda:** el D30 actual reduce el riesgo de churn en las proyecciones de LTV. Con churn mensual <4,5% y ARPU de €108/año, el LTV/CAC de 12,5x es sostenible.

---

## Output 2 — Tono Usuaria

*(Generado con `system-prompt-usuaria.md` + `/humanizer`)*

> Hola,
>
> Hay algo que queremos contarte.
>
> Llevamos un mes con un grupo de mujeres probando YayaFit. El 32% sigue abriendo la app cada día, un mes después de empezar. Eso no lo hace casi ninguna app de ejercicio.
>
> Lo que nos dicen es que vuelven por las personas, no por los vídeos.
>
> Eso es lo que queremos construir contigo.
>
> Con cariño, el equipo YayaFit

---

## Output 3 — Tono B2B Institucional

*(Generado con `system-prompt-b2b.md`)*

> **Dato de adherencia — Prototipo mayo 2026**
>
> En nuestra fase de validación con 50 participantes, YayaFit alcanzó un D30 retention del 32%. El referente del sector (Andreessen Horowitz) sitúa la media de apps SaaS de consumo entre el 22% y el 25%.
>
> Para una institución, este indicador es relevante por una razón concreta: la adherencia a los 30 días es el predictor más fiable de impacto en salud a largo plazo. Un programa con alta adherencia reduce el coste por resultado.
>
> En términos operativos: con 500 beneficiarias y un D30 del 32%, estimamos 160 usuarias activas al mes, frente a las 110-125 que generaría un programa con adherencia media del sector.

---

## Análisis de Diferencias

| Dimensión | Inversor | Usuaria | B2B |
|-----------|----------|---------|-----|
| **Primer elemento** | La cifra con benchmark | Contexto humano | La cifra con contexto |
| **Lenguaje clave** | LTV, churn, riesgo, ronda | Personas, volver, construir | Adherencia, coste, beneficiarias |
| **Extensión** | Media (orientado a decisión) | Corta (orientado a emoción) | Media (orientado a KPI) |
| **Llamada a la acción** | Implícita (invertir) | Explícita y suave | Implícita (pilotar) |
| **Tono emocional** | Neutro-técnico | Cálido | Neutro-profesional |
| **Uso de /humanizer** | No necesario | Obligatorio | No necesario |

---

## Conclusión

El mismo hecho pasa de ser un argumento de inversión (Inversor) a una prueba de comunidad (Usuaria) a un indicador de ROI (B2B). El System Prompt correcto no cambia los datos; cambia qué datos importan y por qué.
