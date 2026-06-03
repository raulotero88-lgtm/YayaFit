# Plantilla Parametrizada — Propuesta para Inversores YayaFit

## Cómo usar esta plantilla

Copia el bloque **PROMPT** en Claude, sustituye los `{{campos}}` por los datos reales. Los campos sin datos aparecerán como `[PENDIENTE]`.

---

## PROMPT

```
Eres el equipo de Desarrollo de Negocio de YayaFit. Redacta una Propuesta para Inversores profesional y directa, usando el esquema siguiente. Tono: técnico, riguroso, orientado a datos. Sin adjetivos innecesarios. Si un campo no tiene datos, escribe [PENDIENTE].

--- DATOS DE ENTRADA ---
Ronda de financiación: {{ronda}}
Importe solicitado: {{importe}}
Nombre del inversor / fondo: {{nombre_inversor}}
Importe propuesto / participación: {{importe_propuesto}}
Uso de fondos: {{uso_fondos}}
Métricas clave actuales: {{metricas}}
Hitos alcanzados: {{hitos}}
Proyección a 12 meses: {{proyeccion_12m}}
Equipo: {{equipo}}
------------------------

Esquema de output:

[ENCABEZADO]
Empresa: YayaFit
Documento: Propuesta de Inversión — {{ronda}}
Destinatario: {{nombre_inversor}}
Fecha: (fecha de hoy)
Confidencial: Este documento contiene información confidencial de YayaFit. Su distribución requiere autorización expresa.

[RESUMEN_EJECUTIVO]
(3-4 frases: problema, solución, tracción actual, qué se pide)

[EL_PROBLEMA]
(El problema que resuelve YayaFit con datos concretos)

[LA_SOLUCIÓN]
(Descripción de YayaFit: qué es, cómo funciona, por qué es diferente)

[TRACCIÓN_Y_MÉTRICAS]
| Métrica | Valor actual | Objetivo 12 meses |
|---------|-------------|-------------------|
(Rellenar con {{metricas}} y {{proyeccion_12m}})

[HITOS_ALCANZADOS]
(Lista cronológica de hitos con fecha)

[USO_DE_FONDOS]
| Área | % | Importe (€) | Descripción |
|------|---|-------------|-------------|
(Extraer de {{uso_fondos}})

[EQUIPO]
(Descripción concisa de cada miembro: nombre, rol, relevancia)

[LA_PROPUESTA]
Importe: {{importe_propuesto}}
Participación / condiciones: (si se indica)
Uso: (resumen de 1 línea del uso principal)

[PRÓXIMOS_PASOS]
1. (Acción inmediata post-firma)
2. (Hito clave a 30 días)
3. (Hito clave a 90 días)
```

---

## Ejemplo de uso rellenado

```
Ronda de financiación: Pre-Seed
Importe solicitado: €250.000
Nombre del inversor / fondo: Lanzadera / Caixa Capital Risc
Importe propuesto / participación: €150.000 por 8% equity
Uso de fondos: 35% Producto/Tech (€87.500), 20% Contenido (€50.000), 25% Marketing (€62.500), 10% Legal/GDPR (€25.000), 10% Buffer (€25.000)
Métricas clave actuales: LTV/CAC 12,5x · CAC €12,50 · ARPU Premium €108/año · Churn objetivo <4,5% · Payback 6 semanas
Hitos alcanzados: Identidad visual completa · Plan de negocio v0.1 · Roadmap Lean para inversores · Prototipo HTML funcional · Pitch 4 variantes
Proyección a 12 meses: 15k usuarias · 800 Premium · D30 retention >30% · ARR ~€96.000 · NPS >50
Equipo: Raúl Otero (Fundador, operaciones y estrategia) · CTO cofundador (búsqueda activa) · Responsable de contenido/comunidad (búsqueda activa)
```
