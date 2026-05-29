# Plantilla Parametrizada — Informe de Mercado YayaFit

## Cómo usar esta plantilla

Copia el bloque **PROMPT** en Claude, sustituye los `{{campos}}` por los datos reales y deja vacíos los que no tengas (Claude los marcará como `[PENDIENTE]`).

---

## PROMPT

```
Eres el equipo de Operaciones de YayaFit. Genera un Informe de Mercado profesional usando estrictamente el siguiente esquema. No añadas secciones que no estén en el esquema. Si un campo variable no tiene datos, escribe [PENDIENTE] en ese campo.

--- DATOS DE ENTRADA ---
Segmento analizado: {{segmento}}
TAM: {{tam}}
SAM: {{sam}}
SOM: {{som}}
Competidores identificados: {{competidores}}
Tendencias relevantes: {{tendencias}}
Hallazgos principales: {{hallazgos}}
Nivel de oportunidad (1-5): {{nivel_oportunidad}}
Recomendaciones: {{recomendaciones}}
Próximos pasos: {{proximos_pasos}}
------------------------

Usa el siguiente esquema de output exactamente:

[ENCABEZADO]
Empresa: YayaFit
Documento: Informe de Mercado
Fecha: (fecha de hoy)
Versión: {{version}}
Descargo: Este informe es de uso interno de YayaFit y no debe distribuirse sin autorización.

[RESUMEN_EJECUTIVO]
(2-3 frases que resuman la oportunidad del segmento analizado)

[ANÁLISIS_DE_MERCADO]
- TAM: 
- SAM: 
- SOM: 
- Nivel de oportunidad: /5

[PANORAMA_COMPETITIVO]
(Lista estructurada de competidores con sus características clave)

[TENDENCIAS_RELEVANTES]
(Tendencias numeradas con su implicación para YayaFit)

[HALLAZGOS_PRINCIPALES]
(Hallazgos numerados, ordenados de mayor a menor importancia)

[RECOMENDACIONES]
(Recomendaciones accionables, con responsable sugerido si se indica)

[PRÓXIMOS_PASOS]
(Lista con fecha estimada si se proporcionó)

[TABLA_DE_ACCIONES]
| Acción | Prioridad | Responsable | Fecha límite |
|--------|-----------|-------------|--------------|
(Extrae las acciones de los próximos pasos y recomendaciones)
```

---

## Ejemplo de uso rellenado

```
Segmento analizado: Mujeres autónomas 60-75 años en España
TAM: 4,2M mujeres × 70€/año = ~295M€
SAM: 3,0M mujeres digitalmente activas (73%)
SOM: 850k usuarias en 5 años → ~3,3M€ ARR
Competidores identificados: Hinge Health (EE.UU., no localizado), Silver Surfers (UK), apps genéricas de fitness (Nike Training, Fitbod) — ninguno combina comunidad + ejercicio adaptado + marca femenina en España
Tendencias relevantes: Silver Economy representa el 60% del consumo nacional; 73% mayores 55+ son usuarios digitales; longevidad femenina (80% centenarias son mujeres)
Hallazgos principales: Brecha de producto confirmada; competencia no localizada ni especializada; poder adquisitivo 65+ superior a 30-44 años
Nivel de oportunidad: 5
Recomendaciones: Priorizar validación cualitativa con 40 entrevistas JTBD antes de desarrollo de MVP
Próximos pasos: Lanzar landing A/B en junio 2026; iniciar entrevistas en julio 2026
```
