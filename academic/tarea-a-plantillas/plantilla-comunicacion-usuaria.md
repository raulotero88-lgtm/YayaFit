# Plantilla Parametrizada — Comunicación con Usuarias YayaFit

## Cómo usar esta plantilla

Copia el bloque **PROMPT** en Claude. Esta plantilla genera mensajes cálidos y cercanos para mujeres de 60-75 años. Tono: familiar, empoderador, sin jerga técnica de fitness.

---

## PROMPT

```text
Eres el equipo de Comunidad de YayaFit. Redacta un mensaje para una usuaria de la app usando el esquema siguiente. Tono: cálido, cercano, empoderador. La usuaria tiene entre 60 y 75 años. Usa frases cortas. Evita jerga técnica de fitness. No uses signos de exclamación en exceso. Si un campo no tiene datos, omite esa parte del mensaje (no escribas [PENDIENTE] en comunicaciones a usuarias).

--- DATOS DE ENTRADA ---
Nombre de usuaria: {{nombre}}
Logro o hito de la usuaria: {{logro}}
Tema principal del mensaje: {{tema}}
Llamada a la acción: {{llamada_accion}}
Evento o reto activo: {{evento}}
Instructora mencionada: {{instructora}}
------------------------

Esquema de output:

[SALUDO]
(Saludo personalizado con el nombre, una frase que reconozca su presencia en la comunidad)

[CUERPO_PRINCIPAL]
(2-3 párrafos cortos sobre {{tema}}. Si hay {{logro}}, mencionarlo con calidez en el primer párrafo. Si hay {{instructora}}, mencionarla de forma natural.)

[RETO_O_EVENTO]
(Solo si hay {{evento}}: invitación amable al reto o evento activo, sin presión)

[LLAMADA_A_LA_ACCIÓN]
(Una sola acción clara: {{llamada_accion}}. Frase corta, verbo en imperativo suave: "Únete", "Prueba", "Mira", "Cuéntanos")

[CIERRE]
Con cariño, el equipo YayaFit

---
Este mensaje ha sido enviado porque eres parte de la comunidad YayaFit.
[Gestionar preferencias] · [Darse de baja]
```

---

## Ejemplo de uso rellenado

```text
Nombre de usuaria: Carmen
Logro o hito de la usuaria: Ha completado 7 días seguidos de rutina matutina
Tema principal del mensaje: La constancia pequeña construye cambios grandes
Llamada a la acción: Ver su resumen semanal en la app
Evento o reto activo: Reto "30 días de equilibrio" — empieza el lunes
Instructora mencionada: Ana (especialista en yoga para mayores)
```

---

## Flujo de trabajo: Generar → Humanizar

Después de obtener el output del prompt anterior, aplicar siempre `/humanizer` antes de enviar. El humanizer elimina patrones típicos de escritura IA (inflación de significado, lenguaje promocional, paralelismos artificiosos, vocabulario estadístico) y ajusta el texto al tono cercano y real que espera una mujer de 60-75 años.

```text
Paso 1 → Ejecutar el PROMPT de arriba con los campos rellenados
Paso 2 → Copiar el output y ejecutar: /humanizer
Paso 3 → Revisar el resultado y ajustar por gusto propio si es necesario
```

---

## Variantes de mensaje por tipo

| Tipo | Cuándo usar | Campo clave | Instrucción /humanizer |
|------|-------------|-------------|------------------------|
| Bienvenida | Alta nueva usuaria | `{{nombre}}` + primer logro esperado | `/humanizer` — énfasis en calidez, eliminar frases de onboarding genéricas |
| Reconocimiento | Hito completado | `{{logro}}` obligatorio | `/humanizer` — eliminar hipérboles ("increíble", "fantástico"), mantener el orgullo genuino |
| Activación | Usuaria inactiva >7 días | Sin presión, foco en comunidad | `/humanizer` — eliminar urgencia artificial, que suene a un mensaje de una amiga |
| Invitación a reto | Lanzamiento de reto | `{{evento}}` obligatorio | `/humanizer` — eliminar lenguaje de marketing, que suene a invitación personal |
| Newsletter semanal | Cada semana | `{{tema}}` + `{{instructora}}` | `/humanizer` — eliminar estructura de boletín corporativo, fluidez conversacional |
