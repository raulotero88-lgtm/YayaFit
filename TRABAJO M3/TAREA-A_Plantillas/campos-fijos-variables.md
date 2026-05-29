# Tarea A — Identificación de Campos: Fijos vs. Variables

## Principio

No dejar que la IA decida la estructura. Los campos fijos garantizan coherencia de marca; los variables son los que aporta el usuario en cada uso.

---

## Tipos de Documentos YayaFit

| # | Tipo de Documento | Audiencia | Frecuencia |
|---|---|---|---|
| 1 | Informe de Mercado | Equipo interno / Inversores | Mensual |
| 2 | Propuesta para Inversores | Business Angels / VCs | Por ronda |
| 3 | Comunicación con Usuarias | Mujeres 60-75 años | Semanal |
| 4 | Propuesta B2B Institucional | Residencias / Mutualidades | Por lead |

---

## Mapa de Campos por Documento

### Documento 1: Informe de Mercado

| Campo | Tipo | Ejemplo |
|---|---|---|
| Nombre de la empresa | FIJO | YayaFit |
| Fecha de emisión | FIJO | `{{fecha}}` |
| Versión del informe | FIJO | `{{version}}` |
| Descargo de responsabilidad | FIJO | *"Este informe es de uso interno..."* |
| Segmento analizado | VARIABLE | `{{segmento}}` |
| TAM / SAM / SOM | VARIABLE | `{{tam}}` / `{{sam}}` / `{{som}}` |
| Competidores identificados | VARIABLE | `{{competidores}}` |
| Tendencias relevantes | VARIABLE | `{{tendencias}}` |
| Hallazgos principales | VARIABLE | `{{hallazgos}}` |
| Nivel de oportunidad (1-5) | VARIABLE | `{{nivel_oportunidad}}` |
| Recomendaciones | VARIABLE | `{{recomendaciones}}` |
| Próximos pasos | VARIABLE | `{{proximos_pasos}}` |

---

### Documento 2: Propuesta para Inversores

| Campo | Tipo | Ejemplo |
|---|---|---|
| Nombre de la empresa | FIJO | YayaFit |
| Fecha | FIJO | `{{fecha}}` |
| Ronda de financiación | VARIABLE | `{{ronda}}` |
| Importe solicitado | VARIABLE | `{{importe}}` |
| Uso de fondos | VARIABLE | `{{uso_fondos}}` |
| Métricas clave actuales | VARIABLE | `{{metricas}}` |
| Hitos alcanzados | VARIABLE | `{{hitos}}` |
| Proyección a 12 meses | VARIABLE | `{{proyeccion_12m}}` |
| Equipo | VARIABLE | `{{equipo}}` |
| Nombre del inversor | VARIABLE | `{{nombre_inversor}}` |
| Importe propuesto / participación | VARIABLE | `{{importe_propuesto}}` |

---

### Documento 3: Comunicación con Usuarias

| Campo | Tipo | Ejemplo |
|---|---|---|
| Firma de marca | FIJO | *"Con cariño, el equipo YayaFit"* |
| Enlace de baja / RGPD | FIJO | `[Darse de baja]` |
| Nombre de usuaria | VARIABLE | `{{nombre}}` |
| Logro o hito de la usuaria | VARIABLE | `{{logro}}` |
| Tema principal del mensaje | VARIABLE | `{{tema}}` |
| Llamada a la acción | VARIABLE | `{{llamada_accion}}` |
| Evento o reto activo | VARIABLE | `{{evento}}` |
| Instructora mencionada | VARIABLE | `{{instructora}}` |

---

### Documento 4: Propuesta B2B Institucional

| Campo | Tipo | Ejemplo |
|---|---|---|
| Nombre de la empresa | FIJO | YayaFit |
| Fecha | FIJO | `{{fecha}}` |
| Descargo legal | FIJO | *"Sujeto a contrato firmado..."* |
| Nombre de la institución | VARIABLE | `{{institucion}}` |
| Persona de contacto | VARIABLE | `{{contacto}}` |
| Número de beneficiarias estimadas | VARIABLE | `{{num_beneficiarias}}` |
| Precio por usuario/mes | VARIABLE | `{{precio_b2b}}` |
| Servicios incluidos | VARIABLE | `{{servicios}}` |
| Indicadores de impacto ofrecidos | VARIABLE | `{{indicadores}}` |
| Condiciones de piloto | VARIABLE | `{{piloto}}` |

---

## Regla de Uso

> Si un campo variable no tiene información en el input, dejarlo como `[PENDIENTE]` en el output. **Nunca inventar datos.**
