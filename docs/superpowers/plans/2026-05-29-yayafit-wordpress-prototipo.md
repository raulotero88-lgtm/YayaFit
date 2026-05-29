# YayaFit WordPress Prototipo — Plan de Implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir un prototipo funcional de YayaFit en WordPress + BuddyPress sobre yayafit.es, con registro de usuarios, contenido de rutinas y bienestar, y comunidad básica para los compañeros de clase.

**Architecture:** WordPress CMS sobre hosting Hostinger, tema Astra con Elementor para el diseño, BuddyPress para la capa social (perfiles, actividad, grupos). Todo el contenido textual se prepara en el repo local antes de publicarlo en WordPress.

**Tech Stack:** WordPress 6.x, Astra Free, Elementor Free, BuddyPress, WP Forms Lite, Hostinger (hosting compartido).

---

## Estructura de archivos del repo

```
APP YAYAFIT (PROYECTO)/
├── configuracion/
│   ├── plugins-instalados.md       → registro de plugins y versiones
│   └── ajustes-wordpress.md        → capturas y notas de configuración clave
├── contenido/
│   ├── paginas/
│   │   ├── inicio.md               → textos de la página de inicio
│   │   ├── sobre-yayafit.md        → texto de la página "Sobre YayaFit"
│   │   └── como-funciona.md        → texto de "Cómo funciona"
│   ├── rutinas/
│   │   ├── rutina-equilibrio.md
│   │   ├── rutina-fuerza-silla.md
│   │   ├── rutina-movilidad-espalda.md
│   │   ├── rutina-cardio-caminar.md
│   │   └── rutina-yoga-calma.md
│   └── bienestar/
│       ├── articulo-dormir-mejor.md
│       ├── articulo-nutricion-sencilla.md
│       └── articulo-rutina-diaria.md
└── diseno/
    ├── paleta-colores.md            → códigos hex de la paleta YayaFit
    └── referencias-imagenes.md     → URLs de imágenes elegidas en Unsplash
```

---

## Tarea 1: Crear estructura de carpetas en el repo

**Archivos:**
- Crear: `APP YAYAFIT (PROYECTO)/configuracion/plugins-instalados.md`
- Crear: `APP YAYAFIT (PROYECTO)/configuracion/ajustes-wordpress.md`
- Crear: `APP YAYAFIT (PROYECTO)/diseno/paleta-colores.md`
- Crear: `APP YAYAFIT (PROYECTO)/diseno/referencias-imagenes.md`
- Crear: `APP YAYAFIT (PROYECTO)/contenido/paginas/inicio.md`
- Crear: `APP YAYAFIT (PROYECTO)/contenido/paginas/sobre-yayafit.md`
- Crear: `APP YAYAFIT (PROYECTO)/contenido/paginas/como-funciona.md`
- Crear: `APP YAYAFIT (PROYECTO)/contenido/rutinas/` (5 archivos)
- Crear: `APP YAYAFIT (PROYECTO)/contenido/bienestar/` (3 archivos)

- [ ] **Paso 1: Crear las carpetas y archivos vacíos**

En el explorador de archivos (o terminal), crear la siguiente estructura dentro de `05-YAYA-FIT/`:

```
APP YAYAFIT (PROYECTO)/
├── configuracion/
├── contenido/
│   ├── paginas/
│   ├── rutinas/
│   └── bienestar/
└── diseno/
```

- [ ] **Paso 2: Crear `configuracion/plugins-instalados.md` con este contenido:**

```markdown
# Plugins instalados en YayaFit

| Plugin | Versión | Fecha instalación | Para qué |
|---|---|---|---|
| BuddyPress | — | — | Perfiles, actividad, grupos |
| Astra | — | — | Tema visual |
| Elementor | — | — | Editor visual página de inicio |
| WP Forms Lite | — | — | Formulario de contacto |

> Actualizar versión y fecha al instalar cada plugin.
```

- [ ] **Paso 3: Crear `configuracion/ajustes-wordpress.md` con este contenido:**

```markdown
# Ajustes clave de WordPress

## General
- Título del sitio: YayaFit
- Descripción: Tu comunidad de segunda juventud
- URL del sitio: https://yayafit.es
- Registro abierto: Sí (Ajustes → General → Cualquiera puede registrarse: activado)
- Rol predeterminado: Suscriptor

## Lectura
- Página de inicio: Página estática → "Inicio"
- Página de entradas: "Rutinas y bienestar" (crear esta página vacía)

## Comentarios
- Permitir comentarios: Sí
- Los comentarios deben aprobarse manualmente: No (para el prototipo)

## BuddyPress
- Componentes activos: Perfiles extendidos, Actividad, Amigos, Grupos, Mensajes
- Página de actividad: /comunidad
- Página de miembros: /miembros
```

- [ ] **Paso 4: Crear `diseno/paleta-colores.md` con este contenido:**

```markdown
# Paleta de colores YayaFit

> Basada en los mockups de `DISEÑO YAYAFIT/APP YAYAFIT ESTILOS (DESIGN)/`

| Nombre | Hex | Uso |
|---|---|---|
| Coral principal | #E8634A | Botones CTA, acentos |
| Naranja suave | #F4A261 | Fondos de sección secundaria |
| Blanco cálido | #FAFAF8 | Fondo general |
| Gris texto | #3D3D3D | Texto principal |
| Verde suave | #6BAB7A | Confirmaciones, éxito |

> Ajustar estos valores revisando los mockups PNG en `DISEÑO YAYAFIT/`.
```

- [ ] **Paso 5: Crear `diseno/referencias-imagenes.md` con este contenido:**

```markdown
# Referencias de imágenes para el prototipo

Todas las imágenes son de Unsplash (gratuitas para uso comercial).
Buscar en https://unsplash.com con estos términos:

- Hero página inicio: "older woman exercise happy outdoors"
- Sección rutinas: "senior woman yoga stretching"
- Sección comunidad: "group of senior women laughing"
- Perfil por defecto: avatar neutro de Unsplash

## Imágenes seleccionadas

| Sección | URL Unsplash | Archivo descargado |
|---|---|---|
| Hero | — | — |
| Rutinas | — | — |
| Comunidad | — | — |

> Completar con las URLs elegidas al buscar en Unsplash.
```

- [ ] **Paso 6: Commit**

```bash
git add "APP YAYAFIT (PROYECTO)/"
git commit -m "feat: estructura inicial APP YAYAFIT (PROYECTO) con carpetas y plantillas"
```

---

## Tarea 2: Preparar los textos de las páginas estáticas

**Archivos:**
- Crear: `APP YAYAFIT (PROYECTO)/contenido/paginas/inicio.md`
- Crear: `APP YAYAFIT (PROYECTO)/contenido/paginas/sobre-yayafit.md`
- Crear: `APP YAYAFIT (PROYECTO)/contenido/paginas/como-funciona.md`

- [ ] **Paso 1: Escribir `contenido/paginas/inicio.md`**

```markdown
# Página de Inicio — Textos

## Hero (sección principal)

**Titular:**
Tu segunda juventud empieza aquí

**Subtítulo:**
Ejercicio adaptado, comunidad de mujeres como tú, y el acompañamiento que mereces.
Sin complicaciones. Sin agobios. Solo movimiento y conexión.

**Botón CTA:**
Únete gratis

---

## Sección: Los 4 pilares

**Titular de sección:**
Todo lo que necesitas, en un solo lugar

**Pilar 1 — Movimiento adaptado**
Rutinas de fuerza, movilidad y equilibrio diseñadas para tu cuerpo y tu ritmo.
Vídeo guiado, voz clara, sin jerga técnica.

**Pilar 2 — Vida saludable**
Nutrición sencilla, descanso reparador, hábitos que suman.
Sin dietas restrictivas. Sin culpabilización.

**Pilar 3 — Comunidad**
Tu tribu de segunda juventud. Grupos, retos, quedadas y amigas
que comparten tu mismo camino.

**Pilar 4 — Acompañamiento**
Clases en directo, recordatorios cálidos y progreso visible.
Estás acompañada en cada paso.

---

## Sección: CTA final

**Titular:**
Empieza hoy. Es gratis.

**Texto:**
Más de [N] mujeres ya forman parte de YayaFit.
¿A qué esperas?

**Botón:**
Crear mi cuenta gratis
```

- [ ] **Paso 2: Escribir `contenido/paginas/sobre-yayafit.md`**

```markdown
# Página Sobre YayaFit — Textos

## Titular
YayaFit: la comunidad de la segunda juventud

## Quiénes somos
YayaFit nació de una pregunta sencilla: ¿por qué no existe una app de fitness
pensada de verdad para mujeres mayores autónomas?

No una app de "tercera edad". No algo clínico o aburrido.
Una app con energía, comunidad y el tono que merecemos: aspiracional, cercano,
sin condescendencia.

## Para quién es YayaFit
YayaFit es para ti si:
- Tienes entre 60 y 75 años y quieres mantenerte activa
- Las apps de fitness convencionales te parecen intimidantes o inadaptadas
- Echas de menos un espacio digital donde conectar con mujeres como tú
- Quieres ejercicio adaptado a tu cuerpo, sin riesgos, con voz clara

## Nuestra misión
Ser la comunidad líder de segunda juventud femenina en el mundo hispanohablante.
Porque la vida después de los 60 puede ser la mejor etapa de todas.
```

- [ ] **Paso 3: Escribir `contenido/paginas/como-funciona.md`**

```markdown
# Página Cómo Funciona — Textos

## Titular
Tres pasos para empezar tu segunda juventud

## Paso 1 — Regístrate gratis
Crea tu cuenta en menos de 2 minutos.
Solo necesitas tu email y elegir una contraseña.
Sin tarjeta de crédito. Sin compromisos.

## Paso 2 — Elige tu rutina
Explora nuestras rutinas de movimiento adaptado.
Fuerza, movilidad, equilibrio, cardio suave, yoga.
Empieza por donde quieras, a tu ritmo.

## Paso 3 — Conecta con tu comunidad
Únete al grupo de mujeres YayaFit.
Comparte tu progreso, anima a tus compañeras,
participa en retos y siente que no estás sola.

## Botón CTA
Empieza ahora — es gratis
```

- [ ] **Paso 4: Commit**

```bash
git add "APP YAYAFIT (PROYECTO)/contenido/paginas/"
git commit -m "feat: textos completos de las 3 páginas estáticas"
```

---

## Tarea 3: Preparar el contenido de rutinas

**Archivos:** 5 archivos en `APP YAYAFIT (PROYECTO)/contenido/rutinas/`

- [ ] **Paso 1: Escribir `rutinas/rutina-equilibrio.md`**

```markdown
# Rutina de equilibrio para empezar

**Nivel:** Principiante
**Duración:** 15 minutos
**Material:** Una silla resistente
**Categoría WordPress:** Rutina, Equilibrio, Principiante

---

## Para qué sirve
El equilibrio es la base de tu autonomía. Esta rutina entrena los músculos
estabilizadores y mejora tu confianza al caminar y subir escaleras.

## Calentamiento (3 min)
1. Marcha estática — levanta rodillas suavemente 20 veces
2. Giros de tobillo — 10 círculos cada pie
3. Apertura de brazos — 10 repeticiones lentas

## Parte principal (10 min)
**Ejercicio 1: Apoyo en silla (equilibrio básico)**
- De pie detrás de la silla, manos en el respaldo
- Levanta un pie 5 cm del suelo, mantén 5 segundos
- Cambia de pie. Repite 8 veces cada lado.

**Ejercicio 2: Marcha con rodilla alta**
- Sujétate a la silla si lo necesitas
- Levanta cada rodilla hasta la cadera
- 10 repeticiones cada lado, ritmo lento

**Ejercicio 3: Paso lateral**
- De pie junto a la silla
- Da un paso al lado, junta el otro pie
- 10 repeticiones a cada lado

## Vuelta a la calma (2 min)
1. Respiración profunda — 5 respiraciones lentas
2. Estiramiento de pantorrilla — apoya manos en la silla, estira pierna trasera
3. Sacudida suave de brazos y piernas

## Consejo de seguridad
Realiza siempre esta rutina cerca de una pared o silla.
Si notas mareo, detente y siéntate. Tu seguridad es lo primero.
```

- [ ] **Paso 2: Escribir `rutinas/rutina-fuerza-silla.md`**

```markdown
# Fuerza suave con silla

**Nivel:** Principiante
**Duración:** 20 minutos
**Material:** Una silla resistente
**Categoría WordPress:** Rutina, Fuerza, Principiante

---

## Para qué sirve
La fuerza muscular previene caídas, facilita las tareas del día a día
y mantiene tu independencia. Esta rutina trabaja piernas, brazos y core
usando la silla como apoyo seguro.

## Calentamiento (3 min)
1. Rotación de hombros — 10 hacia adelante, 10 hacia atrás
2. Flexión-extensión de rodillas sentada — 10 repeticiones
3. Respiración con brazos — inspira subiendo brazos, espira bajándolos

## Parte principal (14 min)
**Ejercicio 1: Sentadilla con silla**
- Siéntate al borde de la silla, pies a la anchura de las caderas
- Levántate despacio usando las piernas (sin impulso de brazos si puedes)
- Siéntate despacio. 10 repeticiones. Descansa 30 seg. Repite.

**Ejercicio 2: Elevación de talones sentada**
- Sentada, pies planos en el suelo
- Levanta los talones hasta apoyarte en las puntas
- Mantén 2 segundos. 15 repeticiones.

**Ejercicio 3: Presión de rodillas con manos**
- Sentada, coloca las manos en los muslos
- Empuja las manos hacia abajo mientras los muslos empujan hacia arriba
- Tensión isométrica 5 segundos. 8 repeticiones.

**Ejercicio 4: Remo con brazos (sin peso)**
- Sentada o de pie, inclina el tronco 45° hacia adelante
- Lleva los codos hacia atrás como si remar, apretando omóplatos
- 12 repeticiones lentas.

## Vuelta a la calma (3 min)
1. Estiramiento de cuádriceps — de pie, sujeta el tobillo, mantén 20 seg cada pierna
2. Estiramiento de espalda — sentada, abraza las rodillas suavemente
3. Respiración final — 5 respiraciones profundas

## Progresión
Cuando 10 sentadillas sean fáciles, añade 2 más cada semana.
Cuando domines el movimiento, prueba sin apoyar las manos en los muslos.
```

- [ ] **Paso 3: Escribir `rutinas/rutina-movilidad-espalda.md`**

```markdown
# Movilidad de espalda por las mañanas

**Nivel:** Principiante
**Duración:** 10 minutos
**Material:** Ninguno (opcional: esterilla)
**Categoría WordPress:** Rutina, Movilidad, Mañana

---

## Para qué sirve
La espalda rígida por las mañanas es normal. Esta rutina activa la columna,
reduce la tensión acumulada durante el sueño y te prepara para el día.
Ideal hacerla antes de desayunar o justo después de levantarte.

## Secuencia (sin calentamiento previo necesario)

**1. Gatos y vacas sentada (3 min)**
- Sentada al borde de la silla, pies en el suelo
- Inspira: saca pecho y saca barriga (vaca)
- Espira: redondea la espalda y mete barriga (gato)
- Ritmo lento, coordinado con la respiración. 10 ciclos.

**2. Rotación de tronco (2 min)**
- Sentada, cruza brazos sobre el pecho
- Gira el tronco suavemente hacia la derecha, mantén 2 segundos
- Vuelve al centro. Repite hacia la izquierda.
- 8 veces a cada lado.

**3. Inclinación lateral (2 min)**
- De pie o sentada
- Lleva el brazo derecho por encima de la cabeza
- Inclínate suavemente hacia la izquierda, mantén 3 segundos
- 6 veces a cada lado.

**4. Extensión de espalda (3 min)**
- Sentada, entrelaza las manos detrás de la cabeza
- Abre los codos y echa el pecho ligeramente hacia adelante
- Mantén 5 segundos. 6 repeticiones.

## Consejo
No fuerces ningún movimiento. La movilidad mejora gradualmente.
Si sientes dolor (no incomodidad, sino dolor), detente.
```

- [ ] **Paso 4: Escribir `rutinas/rutina-cardio-caminar.md`**

```markdown
# Cardio suave — caminar con propósito

**Nivel:** Principiante-Intermedio
**Duración:** 30 minutos (caminata) + 5 min preparación
**Material:** Calzado cómodo, ropa cómoda
**Categoría WordPress:** Rutina, Cardio, Exterior

---

## Para qué sirve
Caminar es el ejercicio cardiovascular más completo y seguro para esta etapa.
Mejora el corazón, los pulmones, el humor y la densidad ósea. La clave
es hacerlo "con propósito": ni paseo tranquilo, ni marcha atlética.

## Preparación (5 min)
1. Estiramiento de pantorrillas — 20 seg cada pierna contra la pared
2. Rotación de tobillos — 10 círculos cada pie
3. 2 minutos de marcha estática en casa para activar

## La caminata (30 min)

**Estructura de intervalos suaves:**
- Min 0-5: ritmo tranquilo (calentamiento)
- Min 5-10: ritmo "cómodo pero activo" — deberías poder hablar pero notando el esfuerzo
- Min 10-15: igual
- Min 15-20: igual
- Min 20-25: baja el ritmo gradualmente
- Min 25-30: ritmo tranquilo (vuelta a la calma caminando)

**Señales de un buen ritmo:**
- Puedes mantener una conversación sin jadear
- Sientes calor y algo de sudoración
- La respiración es más profunda que en reposo pero controlada

## Vuelta a la calma (5 min)
1. Estiramiento de cuádriceps — 20 seg cada pierna
2. Estiramiento de gemelos — 20 seg cada pierna
3. Respiración profunda — 5 respiraciones

## Progresión
Semana 1-2: 20 minutos. Semana 3-4: 25 minutos. Semana 5+: 30 minutos.
Cuando 30 min sean cómodos, aumenta el ritmo, no el tiempo.
```

- [ ] **Paso 5: Escribir `rutinas/rutina-yoga-calma.md`**

```markdown
# Yoga para la calma y el descanso

**Nivel:** Principiante
**Duración:** 20 minutos
**Material:** Esterilla o superficie cómoda, silla opcional
**Categoría WordPress:** Rutina, Yoga, Relajación

---

## Para qué sirve
El yoga suave mejora la flexibilidad, la respiración y el bienestar emocional.
Esta rutina está diseñada para el final del día o cuando necesites calmar
la mente y relajar el cuerpo.

## Secuencia

**1. Respiración consciente (3 min)**
- Siéntate cómodamente, espalda recta
- Inspira contando hasta 4, mantén 2, espira contando hasta 6
- Repite 10 veces. Cierra los ojos si te resulta cómodo.

**2. Estiramiento de cuello (3 min)**
- Sentada o de pie
- Inclina la cabeza hacia el hombro derecho, mantén 5 respiraciones
- Vuelve al centro. Repite al lado izquierdo.
- Gira la cabeza lentamente hacia la derecha, luego izquierda. 3 veces.

**3. Apertura de pecho (3 min)**
- Entrelaza las manos detrás de la espalda
- Saca el pecho y mira ligeramente hacia arriba
- Mantén 5 respiraciones. 3 repeticiones.

**4. Postura del árbol adaptada (4 min)**
- De pie junto a la silla o pared
- Apoya una mano para equilibrio
- Levanta el pie derecho y apóyalo en el tobillo izquierdo (no en la rodilla)
- Mantén 5 respiraciones. Cambia de lado.

**5. Postura del niño adaptada en silla (4 min)**
- Sentada, separa las rodillas a la anchura de las caderas
- Inclínate hacia adelante lentamente, dejando caer el torso entre las piernas
- Apoya los brazos en los muslos o en el asiento
- Mantén 8-10 respiraciones lentas.

**6. Relajación final (3 min)**
- Sentada cómodamente
- Cierra los ojos
- Observa tu respiración sin intentar cambiarla
- Siente el peso de tu cuerpo en la silla

## Consejo
El yoga no es competición. No hay posturas "perfectas". Adapta cada
movimiento a cómo se siente tu cuerpo hoy, no a cómo debería verse.
```

- [ ] **Paso 6: Commit**

```bash
git add "APP YAYAFIT (PROYECTO)/contenido/rutinas/"
git commit -m "feat: 5 rutinas completas listas para publicar en WordPress"
```

---

## Tarea 4: Preparar los artículos de bienestar

**Archivos:** 3 archivos en `APP YAYAFIT (PROYECTO)/contenido/bienestar/`

- [ ] **Paso 1: Escribir `bienestar/articulo-dormir-mejor.md`**

```markdown
# Cómo dormir mejor después de los 60

**Categoría WordPress:** Bienestar, Descanso
**Extracto:** El sueño cambia con la edad. Pero "diferente" no significa "peor". 
Con los hábitos adecuados, puedes descansar mejor que nunca.

---

El sueño es el gran olvidado del bienestar. Lo cuidamos menos que la alimentación
y el ejercicio, y sin embargo lo sustenta todo: la memoria, el humor, el sistema
inmune y la energía para movernos.

## Por qué cambia el sueño después de los 60

Es normal dormir menos horas seguidas. La arquitectura del sueño cambia:
menos sueño profundo, más despertares nocturnos, tendencia a madrugar más.
Esto no es insomnio — es el sueño de esta etapa.

El problema no es dormir diferente. El problema es intentar dormir "como antes"
y frustrarse cuando no funciona.

## Lo que sí funciona

**Rutina de luz:** Exponte a la luz natural por la mañana (15-20 minutos).
Esto regula tu reloj biológico mejor que cualquier suplemento.

**Temperatura:** El dormitorio fresco (17-19°C) facilita el sueño profundo.

**Sin pantallas 1 hora antes:** La luz azul del móvil retrasa la melatonina.
Sustituye por lectura, música suave o las posturas de yoga de nuestra rutina.

**Cena ligera:** El cuerpo no descansa bien cuando está digiriendo mucho.
Cenar 2-3 horas antes de acostarte marca la diferencia.

**Movimiento durante el día:** Las personas que hacen ejercicio moderado duermen
mejor. No hace falta que sea intenso — nuestras rutinas de 15-20 minutos son suficientes.

## Lo que NO funciona

- Pastillas para dormir como solución habitual (crean dependencia y empeoran la calidad del sueño profundo)
- Quedarte en cama despierta más de 20 minutos (levántate, haz algo tranquilo, vuelve cuando tengas sueño)
- Alcohol para "relajarse" (fragmenta el sueño en la segunda mitad de la noche)

## Una cosa que hacer esta noche

Elige una hora fija para acostarte y para levantarte, y mantenla también
los fines de semana durante 2 semanas. La consistencia es lo más potente
que existe para mejorar el sueño.
```

- [ ] **Paso 2: Escribir `bienestar/articulo-nutricion-sencilla.md`**

```markdown
# Nutrición sencilla: lo que de verdad importa

**Categoría WordPress:** Bienestar, Nutrición
**Extracto:** Sin dietas. Sin contar calorías. Sin prohibiciones. 
La nutrición después de los 60 tiene 3 principios y son más simples de lo que crees.

---

Hay demasiado ruido sobre nutrición. Superalimentos, ayunos, macros, suplementos.
Vamos a simplificar.

## Los 3 principios que importan después de los 60

### 1. Más proteína de lo que crees necesitar

A partir de los 60, los músculos se vuelven más "resistentes" a usar la proteína
de la dieta (fenómeno llamado resistencia anabólica). Para mantener la masa muscular,
necesitas más proteína que cuando tenías 40 años.

**Objetivo práctico:** una fuente de proteína en cada comida principal.
Huevos, legumbres, pescado, carne magra, queso fresco, yogur griego.

No hace falta pesar ni calcular. Una ración normal de cualquiera de estos
en cada comida es suficiente.

### 2. Frutas y verduras sin drama

No 5 raciones exactas. No frutas exóticas. No zumos.

Come frutas y verduras que te gusten, de temporada, de la forma que las
disfrutes. Crudas, cocinadas, en sopa, salteadas. La variedad de colores
asegura variedad de nutrientes. Eso es todo.

### 3. Agua antes de que tengas sed

La sensación de sed disminuye con la edad. Esto significa que cuando sientes
sed, ya llevas tiempo sin hidratarte bien.

**Truco simple:** un vaso de agua al levantarte, uno antes de cada comida,
uno a media tarde. Sin contar litros exactos.

## Lo que no necesitas preocuparte

- Eliminar el pan, la pasta o el arroz (el gluten no es el problema)
- Dejar el café (con moderación es inofensivo e incluso tiene beneficios)
- Tomar suplementos si comes variado (excepción: vitamina D, consulta con tu médico)
- Contar calorías

## Un cambio para esta semana

Si tienes que elegir una cosa: añade proteína al desayuno.
Un huevo, un yogur griego, un poco de queso fresco.
Es el cambio con mayor impacto en masa muscular y energía matutina.
```

- [ ] **Paso 3: Escribir `bienestar/articulo-rutina-diaria.md`**

```markdown
# El poder de la rutina diaria para tu autonomía

**Categoría WordPress:** Bienestar, Hábitos
**Extracto:** La autonomía no se pierde de golpe. Se erosiona poco a poco 
con pequeñas inactividades repetidas. Y se recupera de la misma forma.

---

Autonomía. Es la palabra que más nos importa a todas, aunque no siempre
la nombremos. Poder levantarnos sin ayuda, subir escaleras, cargar la compra,
viajar, quedar con amigas. Vivir sin depender.

La ciencia es clara: la autonomía funcional no depende principalmente de
la edad. Depende del nivel de actividad. Las personas activas a los 75 años
tienen la capacidad funcional de personas sedentarias a los 50.

## Por qué la rutina importa más que la motivación

La motivación es volátil. La rutina es fiable.

No necesitas tener ganas de hacer ejercicio. Necesitas tener una hora del día
reservada para ello, igual que tienes una hora para desayunar o una serie favorita.

Las personas que llevan años siendo activas no tienen más motivación que las demás.
Tienen mejores hábitos. Y los hábitos se construyen con repetición, no con fuerza de voluntad.

## Una rutina mínima viable

Esto es lo mínimo que sostiene la autonomía funcional:

- **Movimiento diario:** 15-30 minutos. Puede ser una de nuestras rutinas,
  una caminata, o simplemente subir escaleras en lugar de ascensor.
- **1-2 comidas con proteína:** Mantiene la masa muscular que el movimiento trabaja.
- **Salir de casa:** El contacto social y la exposición a la luz tienen
  efectos medibles en la salud física y mental.

No hace falta más. Lo que hace falta es hacerlo cada día.

## Cómo construir el hábito

**Ancla el movimiento a algo que ya haces.** Después de desayunar.
Antes de ver el telediario. Al terminar de fregar. La hora que elijas,
anclada a algo que ya es automático.

**Empieza tan pequeño que parezca ridículo.** 5 minutos es suficiente
para empezar. El objetivo no es el esfuerzo del primer día; es estar
haciéndolo todavía en 30 días.

**Registra tu racha.** Un calendario en papel con una X por cada día
que lo haces funciona mejor de lo que parece. Nadie quiere romper la racha.

## Lo que YayaFit puede hacer por ti

La comunidad es el hábito más poderoso de todos.
Cuando tienes personas que te esperan, que comparten tu reto,
que celebran tu progreso — la adherencia se multiplica.

Por eso el corazón de YayaFit no son las rutinas. Es la comunidad.
```

- [ ] **Paso 4: Commit**

```bash
git add "APP YAYAFIT (PROYECTO)/contenido/bienestar/"
git commit -m "feat: 3 artículos de bienestar completos listos para publicar"
```

---

## Tarea 5: Contratar hosting y conectar dominio

> Esta tarea es externa a Git — el resultado se documenta en `configuracion/ajustes-wordpress.md`.

- [ ] **Paso 1: Contratar Hostinger**

1. Ir a hostinger.es
2. Elegir **Plan Business** (~3,99€/mes, pago anual = ~48€/año)
   - Incluye: SSL gratuito, instalador WordPress en 1 clic, 100 GB espacio
3. Completar el pago
4. Acceder al panel hPanel

- [ ] **Paso 2: Conectar el dominio yayafit.es**

En hPanel de Hostinger:
1. Ir a **Dominios** → **Añadir dominio**
2. Introducir `yayafit.es` → seleccionar "Ya tengo este dominio"
3. Copiar los nameservers de Hostinger (ej: `ns1.dns-parking.com`, `ns2.dns-parking.com`)
4. En el panel donde está registrado yayafit.es → cambiar los nameservers a los de Hostinger
5. Esperar 24-48h para la propagación DNS

- [ ] **Paso 3: Instalar WordPress**

En hPanel:
1. Ir a **Hosting** → tu plan → **WordPress** → **Instalar**
2. Configurar:
   - URL: `yayafit.es`
   - Título del sitio: `YayaFit`
   - Usuario admin: (elige uno memorable, no "admin")
   - Contraseña: (fuerte, guárdala en un gestor)
   - Email: el tuyo
3. Clic en **Instalar**

- [ ] **Paso 4: Verificar acceso**

- Acceder a `yayafit.es/wp-admin` con las credenciales creadas
- Verificar que WordPress está en español: si no, ir a **Ajustes → General → Idioma del sitio → Español**
- Verificar SSL activo: el candado aparece en la URL del navegador

- [ ] **Paso 5: Documentar en el repo**

Actualizar `APP YAYAFIT (PROYECTO)/configuracion/ajustes-wordpress.md` con:
- URL del admin
- Email del administrador
- Fecha de instalación

```bash
git add "APP YAYAFIT (PROYECTO)/configuracion/ajustes-wordpress.md"
git commit -m "docs: registro instalación WordPress en yayafit.es"
```

---

## Tarea 6: Instalar tema Astra y plugins

- [ ] **Paso 1: Instalar tema Astra**

En WordPress admin → **Apariencia → Temas → Añadir nuevo**:
1. Buscar "Astra"
2. Instalar y activar

- [ ] **Paso 2: Importar starter template de fitness**

En WordPress admin → **Apariencia → Astra Sites** (se instala automáticamente con Astra):
1. Buscar "fitness" o "health" en la galería
2. Elegir una plantilla compatible con Elementor
3. Clic en **Import Complete Site**
4. Esperar la importación (~2 minutos)

El sitio tendrá ya estructura básica, menús y estilos. Lo personalizaremos en tareas posteriores.

- [ ] **Paso 3: Instalar BuddyPress**

En WordPress admin → **Plugins → Añadir nuevo**:
1. Buscar "BuddyPress"
2. Instalar y activar
3. Ir a **Ajustes → BuddyPress → Componentes** y activar:
   - Perfiles extendidos de usuario
   - Actividad del sitio
   - Amigos de usuario
   - Grupos de usuarios
   - Mensajes privados
4. Ir a **Ajustes → BuddyPress → Páginas** y verificar que tiene páginas asignadas para: Actividad, Miembros, Grupos

- [ ] **Paso 4: Instalar Elementor**

En **Plugins → Añadir nuevo**:
1. Buscar "Elementor"
2. Instalar y activar Elementor (la versión Free)

- [ ] **Paso 5: Instalar WP Forms Lite**

En **Plugins → Añadir nuevo**:
1. Buscar "WPForms Lite"
2. Instalar y activar

- [ ] **Paso 6: Documentar plugins instalados**

Actualizar `APP YAYAFIT (PROYECTO)/configuracion/plugins-instalados.md` con la versión de cada plugin instalado.

```bash
git add "APP YAYAFIT (PROYECTO)/configuracion/plugins-instalados.md"
git commit -m "docs: versiones de plugins instalados en WordPress"
```

---

## Tarea 7: Configurar registro de usuarios y ajustes generales

- [ ] **Paso 1: Activar registro público**

En WordPress admin → **Ajustes → General**:
- Marcar: **Cualquiera puede registrarse**
- Rol predeterminado del nuevo usuario: **Suscriptor**
- Guardar cambios

- [ ] **Paso 2: Configurar páginas de WordPress**

En **Ajustes → Lectura**:
- Página de inicio: seleccionar **Página estática** → "Inicio" (la importada con Astra Sites)
- Guardar cambios

- [ ] **Paso 3: Crear página de comunidad (si BuddyPress no la creó)**

Si BuddyPress no creó automáticamente las páginas de Actividad y Miembros:
- En **Páginas → Añadir nueva** crear: "Comunidad" con slug `/comunidad`
- En **Páginas → Añadir nueva** crear: "Miembros" con slug `/miembros`
- Ir a **Ajustes → BuddyPress → Páginas** y asignar las páginas correctas

- [ ] **Paso 4: Crear grupo de BuddyPress**

1. En el frontend de yayafit.es, hacer login como admin
2. Ir a `/grupos` → **Crear un grupo**
3. Nombre: `Comunidad YayaFit Clase`
4. Descripción: `El grupo de nuestra clase. Comparte tu progreso, anímate con tus compañeras y participa en los retos.`
5. Privacidad: **Público** (cualquier miembro puede unirse)
6. Crear grupo

- [ ] **Paso 5: Crear formulario de contacto con WP Forms**

1. En WordPress admin → **WPForms → Añadir nuevo**
2. Elegir plantilla "Simple Contact Form"
3. Campos: Nombre, Email, Mensaje (ya vienen por defecto)
4. En **Ajustes → Notificaciones**: verificar que el email de notificación es el tuyo
5. Guardar el formulario
6. Crear una página: **Páginas → Añadir nueva** → Título: "Contacto" → Slug: `contacto`
7. En el editor, añadir el bloque "WPForms" y seleccionar el formulario creado
8. Publicar la página

- [ ] **Paso 6: Configurar menú de navegación**

En **Apariencia → Menús**:
- Crear menú principal con estos elementos:
  - Inicio (página)
  - Rutinas (categoría)
  - Bienestar (categoría)
  - Sobre YayaFit (página)
  - Cómo funciona (página)
  - Comunidad (página BuddyPress)
- Asignar a la ubicación "Menú principal" o "Primary"

---

## Tarea 8: Publicar contenido en WordPress

- [ ] **Paso 1: Crear categorías del blog**

En WordPress admin → **Entradas → Categorías**:
1. Crear categoría: **Rutinas** (slug: `rutinas`)
2. Crear categoría: **Bienestar** (slug: `bienestar`)
3. Dentro de Rutinas, crear subcategorías: Equilibrio, Fuerza, Movilidad, Cardio, Yoga

- [ ] **Paso 2: Crear páginas estáticas**

Para cada archivo de `contenido/paginas/`, crear la página en WordPress:

**Sobre YayaFit:**
- **Páginas → Añadir nueva** → Título: "Sobre YayaFit"
- Copiar el texto de `sobre-yayafit.md` y pegarlo en el editor
- Slug: `sobre-yayafit`
- Publicar

**Cómo funciona:**
- Título: "Cómo funciona"
- Copiar texto de `como-funciona.md`
- Slug: `como-funciona`
- Publicar

- [ ] **Paso 3: Publicar las 5 rutinas**

Para cada archivo en `contenido/rutinas/`:
1. **Entradas → Añadir nueva**
2. Copiar título y contenido del archivo `.md`
3. Asignar categoría correspondiente (Rutinas + subcategoría)
4. Añadir una imagen destacada desde Unsplash (buscar en unsplash.com, descargar, subir)
5. Completar el extracto con el texto de "Para qué sirve"
6. Publicar

Repetir para las 5 rutinas: equilibrio, fuerza con silla, movilidad espalda, cardio caminar, yoga calma.

- [ ] **Paso 4: Publicar los 3 artículos de bienestar**

Para cada archivo en `contenido/bienestar/`:
1. **Entradas → Añadir nueva**
2. Copiar título y contenido
3. Asignar categoría "Bienestar"
4. Añadir imagen destacada de Unsplash
5. Completar extracto
6. Publicar

---

## Tarea 9: Aplicar identidad visual YayaFit

- [ ] **Paso 1: Revisar los mockups de referencia**

Abrir las imágenes en `DISEÑO YAYAFIT/APP YAYAFIT ESTILOS (DESIGN)/IMAGENES/`:
- `yayafit-registro.png`
- `yayafit-comunidad.png`
- Anotar colores principales en `diseno/paleta-colores.md` (usar un color picker: colorpick.eyedropper.org)

- [ ] **Paso 2: Aplicar colores en Astra**

En WordPress admin → **Apariencia → Personalizar → Global → Colores**:
- Color primario: coral/naranja del mockup (ej: `#E8634A`)
- Color de fondo: blanco cálido (ej: `#FAFAF8`)
- Aplicar y publicar

- [ ] **Paso 3: Configurar tipografía**

En **Personalizar → Global → Tipografía**:
- Fuente del cuerpo: **Lato** o **Open Sans** (legibles, gratuitas de Google Fonts)
- Tamaño base: **18px** (más grande de lo habitual para accesibilidad)
- Fuente de titulares: la misma o **Poppins**
- Aplicar y publicar

- [ ] **Paso 4: Subir el logo**

En **Personalizar → Identidad del sitio**:
- Subir el logo de YayaFit (si existe en `DISEÑO YAYAFIT/`)
- Si no existe un logo en PNG, usar el nombre "YayaFit" en texto con la fuente elegida
- El favicon: usar la misma imagen recortada a formato cuadrado

- [ ] **Paso 5: Documentar paleta final**

Actualizar `diseno/paleta-colores.md` con los códigos hex definitivos usados.

```bash
git add "APP YAYAFIT (PROYECTO)/diseno/"
git commit -m "docs: paleta de colores definitiva aplicada en WordPress"
```

---

## Tarea 10: Diseñar la página de inicio con Elementor

- [ ] **Paso 1: Abrir la página de inicio en Elementor**

En WordPress → **Páginas** → "Inicio" → **Editar con Elementor**

- [ ] **Paso 2: Construir la sección Hero**

En Elementor, eliminar o reemplazar el hero del starter template:
1. Añadir sección de pantalla completa
2. Imagen de fondo: la imagen de Unsplash seleccionada (mujer mayor activa)
3. Superposición oscura semi-transparente (20-30%) para que el texto sea legible
4. Widget Heading: `Tu segunda juventud empieza aquí` — fuente grande (48-60px), color blanco
5. Widget Text: el subtítulo de `contenido/paginas/inicio.md`
6. Widget Button: `Únete gratis` → enlace a `/wp-login.php?action=register`
   - Color de fondo: coral principal
   - Texto: blanco, negrita
   - Tamaño: grande (padding 15px 40px)
   - Esquinas redondeadas: 30px

- [ ] **Paso 3: Construir la sección de los 4 pilares**

1. Añadir nueva sección con 4 columnas
2. En cada columna: icono + título del pilar + descripción corta
3. Iconos sugeridos (Elementor Icons library):
   - Movimiento: `fa-running` o `fa-heart-pulse`
   - Vida saludable: `fa-apple-alt` o `fa-leaf`
   - Comunidad: `fa-users`
   - Acompañamiento: `fa-hands-helping`
4. Color de iconos: coral principal

- [ ] **Paso 4: Construir la sección CTA final**

1. Sección con fondo de color naranja suave (o coral claro)
2. Heading: `Empieza hoy. Es gratis.`
3. Texto: el párrafo de `contenido/paginas/inicio.md`
4. Botón: `Crear mi cuenta gratis` → mismo estilo que el del hero

- [ ] **Paso 5: Publicar**

Clic en **Publicar** en Elementor. Verificar en modo incógnito que la página se ve correctamente.

---

## Tarea 11: Pruebas y ajustes finales

- [ ] **Paso 1: Probar el flujo completo como usuario nuevo**

Abrir una ventana de incógnito en el navegador y:
1. Ir a `yayafit.es` — verificar que la página de inicio carga correctamente
2. Clic en "Únete gratis" → llega al formulario de registro
3. Registrarse con un email de prueba (usa un email alternativo tuyo)
4. Verificar que llega el email de confirmación
5. Confirmar el email y hacer login
6. Verificar que aparece el perfil de BuddyPress
7. Editar el perfil (añadir foto y bio)
8. Ir a `/comunidad` — verificar el feed de actividad
9. Ir a `/grupos` — unirse al grupo "Comunidad YayaFit Clase"
10. Publicar un post en el grupo
11. Ir a `/rutinas` — verificar que se ven las 5 rutinas
12. Abrir una rutina y dejar un comentario

- [ ] **Paso 2: Prueba en móvil**

Desde el móvil (o usando las herramientas de desarrollo del navegador, modo responsive):
- Verificar que el menú hamburguesa funciona
- Verificar que los textos son legibles sin zoom
- Verificar que los botones son pulsables con el dedo

- [ ] **Paso 3: Ajustes de los problemas encontrados**

Anotar cualquier problema encontrado en los pasos anteriores y corregirlo en WordPress.

- [ ] **Paso 4: Invitar a los compañeros**

Enviar a cada compañero de clase:
- URL: `yayafit.es`
- Instrucciones: "Crea tu cuenta en Únete gratis, completa tu perfil y únete al grupo Comunidad YayaFit Clase"

- [ ] **Paso 5: Commit final de documentación**

```bash
git add "APP YAYAFIT (PROYECTO)/"
git commit -m "docs: documentación completa del prototipo - listo para presentar"
```

---

## Resumen de tareas

| # | Tarea | Tipo | Tiempo estimado |
|---|---|---|---|
| 1 | Crear estructura de carpetas en repo | Local/Git | 30 min |
| 2 | Preparar textos de páginas estáticas | Contenido | 1 hora |
| 3 | Preparar contenido de rutinas | Contenido | 2 horas |
| 4 | Preparar artículos de bienestar | Contenido | 1,5 horas |
| 5 | Contratar hosting y conectar dominio | Externo | 1 hora + 24h DNS |
| 6 | Instalar tema Astra y plugins | WordPress | 1 hora |
| 7 | Configurar registro y ajustes | WordPress | 1 hora |
| 8 | Publicar contenido en WordPress | WordPress | 2 horas |
| 9 | Aplicar identidad visual YayaFit | WordPress | 1,5 horas |
| 10 | Diseñar página de inicio con Elementor | WordPress | 2 horas |
| 11 | Pruebas y ajustes finales | Testing | 1 hora |
| | **Total** | | **~14 horas** |
