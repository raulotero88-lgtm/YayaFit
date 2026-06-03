# Módulo 3. Outputs Profesionales y Estandarización Documental

Generar todo tipo de documentación atendiendo a un estilo y forma establecidos.

---

## Contexto

Eres parte del equipo de Operaciones de IA. La empresa produce miles de informes de mercado, propuestas comerciales y auditorías técnicas al mes.

**El problema:** La calidad es inconsistente. Algunos consultores usan la IA y el resultado parece un "robot", otros no respetan la imagen de marca y, lo más grave, se han detectado errores factuales (alucinaciones) en documentos enviados a clientes.

---

## Misión

Diseñar un **"Motor de Generación Documental"** que sea capaz de tomar notas desordenadas y convertirlas en un documento final perfecto, coherente y verificado.

---

## Herramientas

Pueden usar:

- **Playgrounds de Modelos:** Anthropic Console o Google AI Studio. Son mejores que el chat convencional porque permiten separar el System Prompt del contenido.
- **Editores de Markdown:** Como StackEdit o Typora, para visualizar cómo la IA estructura el documento (negritas, tablas, jerarquías).
- **IDE VS Code o similares:** Para diseñar las "plantillas parametrizadas" (tags tipo `{{nombre_cliente}}`).

---

## Ejercicio Práctico

### Caso de Uso de Ejemplo *(Para quienes no tengan uno)*

---

### Tarea A: Modelado y Plantilla Parametrizada

> No dejes que la IA decida la estructura. Tú eres el arquitecto.

- **Identificación de Campos:** Define qué campos son fijos (ej. Fecha, ID de cliente, Descargo de responsabilidad) y cuáles son variables (ej. Hallazgos, Nivel de riesgo, Recomendación).
- **Construcción de la Plantilla:** Crea un prompt que actúe como "molde".
  - *Instrucción:* "Usa el siguiente esquema para el output: `[RESUMEN_EJECUTIVO]`, `[DETALLES_TECNICOS]`, `[TABLA_DE_ACCIONES]`. No rellenes campos que no tengan información en el input; déjalos como `[PENDIENTE]`."

---

### Tarea B: Control de Tono y Persona (System Prompt)

- **Análisis de Tono:** Define el "Manual de Estilo". Crea un System Prompt robusto.
  - *Configuración:* "Eres un Auditor Senior de Ciberseguridad. Tu tono es autoritario pero constructivo. Usa un lenguaje técnico preciso (ej. 'vulnerabilidad' en lugar de 'fallo'). Evita adjetivos innecesarios como 'increíble' o 'terrible'."
- **Experimento:** Genera el mismo informe con dos System Prompts distintos: uno **"Técnico/Formal"** y otro **"Divulgativo para Ejecutivos"**. ¿Cómo cambian los términos utilizados?

---

### Tarea C: Flujo de Procesamiento (De la Idea al Documento)

- **Procesamiento en Serie:** Toma unas notas de voz transcritas (texto sucio, con muletillas y desordenado).
- **Limpieza y Generación:** Diseña un flujo donde el modelo primero limpie los datos, luego los clasifique por importancia y finalmente redacte el documento completo.
- **Coherencia:** Pide al modelo que genere el Capítulo 1 y el Capítulo 3 del informe por separado. Verifica si mantienen los mismos nombres de variables y el mismo estilo.

---

### Tarea D: Framework de Revisión y Alucinaciones

> Aquí es donde se decide la calidad real.

- **Checklist de Validación:** Diseña un prompt de "Crítico Externo" que reciba el informe generado y lo evalúe con un checklist:
  1. ¿Se mencionan todos los hallazgos de las notas originales? *(Completitud)*
  2. ¿Se ha inventado alguna vulnerabilidad que no estaba en las notas? *(Alucinación)*
  3. ¿El tono cumple con la guía de estilo?
- **Scoring:** Pide al modelo que asigne una nota del 1 al 10 a su propia generación basándose en la fidelidad a los datos de entrada.

---

## Errores Comunes

### 1. La "Deriva del Estilo" (Style Drift)

En documentos largos, los LLMs tienden a empezar siguiendo muy bien el System Prompt pero, hacia el final, vuelven a su estilo "estándar" de asistente.

> **Consejo:** Si el documento es muy extenso, recuerda las reglas de estilo al final del prompt o procesa el documento por secciones independientes.

---

### 2. El "Efecto Teléfono Escacharrado"

Al hacer flujos (notas → resumen → informe), se pierde información en cada paso.

> **Atención:** Compara siempre el documento final con las notas originales, no con el resumen intermedio. Busca si se han perdido nombres propios, fechas o cifras específicas.

---

### 3. El Formato de Salida "Rompible"

Si pides un JSON pero no eres estricto, la IA puede añadir texto antes o después del código (ej: "Aquí tienes tu JSON: `{...}`").

> **Atención:** Asegúrate de que tu arquitectura sea capaz de manejar solo la información útil. Usa instrucciones como: "Responde únicamente con el bloque de código, sin introducciones ni comentarios".
