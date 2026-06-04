# Guía de estilo YayaFit — v1

> **Estado:** pactado con Raúl · **Fecha:** 2026-06-04
> **Alcance:** referencia visual de marca para web (yayafit.es), redes y materiales.
> Complementa, no sustituye, a [`brand-tokens.yaml`](brand-tokens.yaml) (la fuente única de tokens técnicos).

## Por qué existe este documento

El sitio no tenía un estilo pactado y empezaban a entrar imágenes que no encajan con YayaFit
(mujeres que aparentan menos de la edad real de la comunidad, 60-75). Para fijar el listón —y
que cualquiera que suba contenido sepa a qué atenerse— partimos de la portada de la canción
**"Segunda Juventud"** ([`music/01-segunda-juventud`](../music/01-segunda-juventud)): vibrante,
impactante y con una mujer vital que sí es la mujer YayaFit.

De esa portada tomamos la **energía**, no el neón literal.

## Principio rector

**Serenidad con un pulso vivo.** Base tranquila y cálida en casi todo, y un único acento
vibrante reservado para lo que invita a actuar. Así acompañamos el "movimiento suave para vivir
mejor" sin caer en lo apagado, y mantenemos la accesibilidad como prioridad para una comunidad
de 60-75 años.

---

## 1. Color

### Base serena — Lavanda (la que ya tiene el sitio)

| Rol | Hex | Uso |
|---|---|---|
| `background` | `#F3ECFA` | Fondo general de pantalla |
| `surface` | `#FFFFFF` | Tarjetas y paneles |
| `primary` (pastel) | `#CDB6E3` | Fondos suaves, decoración |
| `primary_deep` | `#A887C9` | Iconos, detalles, eyebrow secundario |
| `ink` | `#2A2233` | Texto principal (ciruela) |
| `ink_soft` | `#6B6275` | Texto secundario / metadatos |
| `pill_bg` | `#E7DAF3` | Fondo de etiquetas/chips no activos |
| `pill_text` | `#6E5A86` | Texto sobre `pill_bg` |

### Acento vivo — Fucsia Atardecer

| Rol | Hex | Uso |
|---|---|---|
| `accent` | `#D63E78` | Botones/CTA, etiquetas activas, rellenos de acción |
| `accent_deep` | `#B12E62` | Texto y enlaces de acción sobre fondo claro |

**Regla de oro:** el fucsia aparece **solo en lo accionable** (botones, enlaces, CTAs, pestaña
activa). Nunca como fondo de página ni en grandes superficies — a pantalla completa cansa la
vista justo del público que más legibilidad necesita.

### Decisiones de color

- **Coral retirado.** El coral `#E8634A` deja de ser color de acción para no tener dos rosados
  compitiendo con el fucsia. Por defecto, fuera; si en algún momento hiciera falta variedad,
  solo como tinte decorativo muy suave, nunca en CTAs.
- **Turquesa, reservado.** El turquesa de la portada (`~#2FD9C7`) queda guardado para posibles
  micro-detalles puntuales. Por ahora no se usa.

### Accesibilidad / contraste

- Fucsia `#D63E78` con texto blanco ≈ 4.3:1 → válido para **texto grande y en negrita** (botones).
- Para **texto normal y enlaces** sobre fondo claro, usar siempre `accent_deep` `#B12E62`.
- Prioridad para 60-75: tamaños grandes, interlineado generoso, alto contraste. Ver
  [`brand-tokens.yaml`](brand-tokens.yaml) → `accessibility`.

---

## 2. Tipografía

Sin cambios respecto a la marca. Resumen (detalle en [`brand-tokens.yaml`](brand-tokens.yaml)):

- **Display (títulos):** Fraunces (serif).
- **Cuerpo:** Nunito (sans).
- Tamaños grandes y espaciado generoso. Accesibilidad primero.

---

## 3. Fotografía

Es donde más cuidado hay que tener: aquí está el problema que dio origen a esta guía.

### Casting — innegociable

- Mujeres que **se ven** de 60-75: pelo blanco/canoso, rostros con carácter (las arrugas son
  bienvenidas), cuerpos reales y diversos.
- Expresión de **alegría, vitalidad, fuerza y dignidad**. Nunca frágiles ni en clave "paciente".
- En **movimiento o acción real**, no posando como foto de banco.
- **Referente vivo:** la portada de *Segunda Juventud*.

### Qué evitar (lo que falla en las imágenes actuales fuera de marca)

- Mujeres que aparentan menos de 55.
- Estética de stock genérico: poses rígidas, sonrisas de catálogo.
- Estereotipo de "abuela frágil" o dependiente.

### Estrategia mixta de tratamiento

| Tratamiento | Dónde | Cómo |
|---|---|---|
| **Editorial vibrante** | Héroes, portadas, campañas | Generadas con IA (Leonardo, como las portadas de música). Luz de atardecer, color intenso coherente con fucsia + lavanda, escenas estilizadas. Control total del casting. |
| **Realista cálido** | Contenido del día a día: rutinas, artículos, comunidad | Entornos cotidianos (casa, parque, estudio luminoso), luz natural cálida. Creíble y cercano. |

Un **ligero grado cálido de atardecer** en el revelado ayuda a que ambas familias convivan.

---

## 4. Aplicación en el sitio

- **CTAs y enlaces de acción** → fucsia (`#D63E78` relleno / `#B12E62` texto).
- **Fondos y estructura** → se mantiene la base lavanda + pasteles actuales.
- **Imágenes fuera de casting (p. ej. las subidas por Mauricio):** quitarlas de las páginas y
  sustituirlas por imágenes acordes. **Importante:** no se borran del Media Library los archivos
  subidos por otras personas; solo se dejan de usar. (Ver memoria interna: *no borrar media
  ajena en WordPress*.)

---

## 5. Voz y tono

Sin cambios. Ver [`brand-tokens.yaml`](brand-tokens.yaml) → `voice_and_tone`. En corto: cercano y
con tuteo, empoderador sin culpabilizar, concreto, comunidad sobre producto. Tratamos a la
comunidad como **YayaFitters**, hablamos de **movimiento** (no "ejercicio") y de **comunidad**.

---

## 6. Pendiente / siguientes pasos

- Aplicar el fucsia como color de acción único en las páginas (sustituir coral).
- Crear una **plantilla de prompt de Leonardo** para la fotografía editorial (casting + luz +
  color), reutilizable.
- Definir la **fuente de las fotos realistas** (banco propio / generación / sesión).
- Revisar y sustituir las imágenes fuera de marca ya publicadas.

## Referencias

- [`brand-tokens.yaml`](brand-tokens.yaml) — tokens técnicos (fuente de verdad).
- [`paleta-colores.md`](paleta-colores.md) — paleta histórica (anterior al pacto; ver nota).
- [`music/01-segunda-juventud`](../music/01-segunda-juventud) — portada de referencia.
