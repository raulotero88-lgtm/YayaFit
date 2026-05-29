# YayaFit — Diseño del Prototipo WordPress (Trabajo de Clase)

**Fecha:** 2026-05-29
**Tipo:** Prototipo funcional para trabajo académico
**Dominio:** yayafit.es
**Stack:** WordPress + BuddyPress

---

## Estructura de carpetas del repo

Todo el trabajo del prototipo se organiza bajo:

```
05-YAYA-FIT/
├── APP YAYAFIT (PROYECTO)/   ← toda la app vive aquí
│   ├── configuracion/        → capturas, exports de ajustes WordPress
│   ├── contenido/            → textos de rutinas, artículos, páginas
│   ├── diseno/               → imágenes, paleta, referencias visuales
│   └── documentacion/        → guías de instalación, notas de progreso
├── DISEÑO YAYAFIT/           → mockups y brand (negocio)
└── DOCUMENTACION/            → plan de negocio (negocio)
```

El objetivo es mantener el prototipo técnico separado de la documentación de negocio existente.

---

## Contexto

YayaFit es una app de fitness y bienestar para mujeres 60-75 años. Este documento describe el diseño del **prototipo funcional de clase** — no el MVP de producción del plan de negocio. El objetivo es tener algo funcional que todos los compañeros de clase puedan usar: registrarse, ver contenido y participar en la comunidad.

**Restricciones del prototipo:**
- Desarrollador nivel básico/intermedio (B-C)
- Plazo: 1-2 meses
- Presupuesto: ~35€ (solo hosting)
- Features requeridas: registro/login + contenido + comunidad básica (comentarios, perfiles)

---

## Arquitectura

```
Hosting Hostinger (~3€/mes)
│
├── WordPress CMS
│   ├── Tema: Astra (gratis)
│   │
│   ├── Plugins
│   │   ├── BuddyPress          → perfiles, actividad, grupos, comunidad
│   │   └── WP Forms Lite       → formularios de contacto
│   │
│   └── Contenido
│       ├── Páginas estáticas   → Inicio, Sobre YayaFit, Cómo funciona
│       ├── Entradas (blog)     → Rutinas y artículos de bienestar
│       └── Grupos BuddyPress   → Comunidad de clase
```

**Flujo del usuario:**
1. Llega a yayafit.es → ve landing con claim y CTA "Únete gratis"
2. Se registra con email + contraseña → confirmación por email
3. Completa su perfil (foto, bio) via BuddyPress
4. Navega rutinas y artículos de bienestar
5. Entra al grupo "Comunidad YayaFit Clase" → comenta → conecta

---

## Páginas

### Públicas (sin login)

| URL | Contenido |
|---|---|
| `/` | Hero con claim, CTA "Únete gratis", preview de secciones |
| `/sobre-yayafit` | Qué es YayaFit, para quién, los 4 pilares |
| `/como-funciona` | 3 pasos: regístrate → elige rutina → conecta |
| `/rutinas` | Listado de rutinas (entradas con categoría "Rutina") |
| `/bienestar` | Artículos de nutrición, descanso, hábitos |

### Privadas (requieren login)

| URL | Contenido |
|---|---|
| `/mi-perfil` | Foto, nombre, bio — gestionado por BuddyPress |
| `/comunidad` | Feed de actividad global de todos los usuarios |
| `/grupos/yayafit-clase` | Grupo cerrado para compañeros — posts y comentarios |
| `/miembros` | Directorio de usuarios registrados |
| `/registro` | Formulario de alta |
| `/login` | Acceso con email y contraseña |

---

## Visual y marca

| Elemento | Configuración |
|---|---|
| Tema base | Astra Free — ligero, accesible, compatible con BuddyPress |
| Starter template | Importar plantilla de fitness de la biblioteca de Astra |
| Tipografía | Grande y legible (configurado desde Astra Personalizar) |
| Colores | Tonos cálidos alineados con mockups de `DISEÑO YAYAFIT/` |
| Tono | Cercano, positivo, "segunda juventud" — nada clínico |
| Imágenes | Mujeres 60-75 activas (Unsplash / Pexels, gratuitos) |
| Accesibilidad | Fuente base grande, contraste alto, botones grandes |
| Editor de página inicio | Elementor Free (drag & drop, sin código) |

---

## Contenido mínimo para el prototipo

**Rutinas (5 entradas de blog):**
- Rutina de equilibrio para empezar (nivel básico)
- Fuerza suave con silla (nivel básico)
- Movilidad de espalda por las mañanas
- Cardio suave — caminar con propósito
- Yoga para la calma y el descanso

**Artículos de bienestar (3 entradas):**
- Cómo dormir mejor después de los 60
- Nutrición sencilla: lo que de verdad importa
- El poder de la rutina diaria para tu autonomía

---

## Plugins necesarios

| Plugin | Versión | Para qué |
|---|---|---|
| BuddyPress | Gratis | Perfiles, actividad, grupos, miembros |
| Astra | Gratis | Tema visual |
| Elementor | Free | Editor visual página de inicio |
| WP Forms Lite | Gratis | Formulario de contacto |

Sin plugins de pago. Todo el prototipo funciona con la capa gratuita.

---

## Plan de implementación (8 semanas)

### Semana 1-2 — Base técnica
1. Contratar Hostinger (plan Business) y conectar dominio yayafit.es
2. Instalar WordPress desde el panel de Hostinger (1 clic)
3. Instalar Astra + importar starter template de fitness
4. Instalar y configurar BuddyPress
5. Activar registro público (Ajustes → General → Cualquiera puede registrarse)

### Semana 3-4 — Contenido y comunidad
6. Crear páginas estáticas (Inicio, Sobre YayaFit, Cómo funciona)
7. Crear grupo en BuddyPress: "Comunidad YayaFit Clase"
8. Publicar 5 rutinas de ejemplo como entradas
9. Publicar 3 artículos de bienestar

### Semana 5-6 — Diseño y marca
10. Aplicar colores y tipografía YayaFit desde el Personalizador de Astra
11. Diseñar página de inicio con Elementor Free (hero, CTA, secciones)
12. Añadir imágenes de Unsplash/Pexels

### Semana 7-8 — Pruebas y refinamiento
13. Invitar a compañeros a registrarse y probar
14. Verificar flujo completo: registro → perfil → contenido → comunidad
15. Ajustes finales de diseño y contenido

---

## Costes

| Concepto | Coste |
|---|---|
| Hosting Hostinger 12 meses | ~35€ |
| Dominio yayafit.es | Ya disponible |
| Plugins y tema | 0€ |
| **Total** | **~35€** |

---

## Fuera de alcance (prototipo de clase)

Lo siguiente pertenece al MVP real del plan de negocio (Fase 1, pre-seed) y **no** se construye en este prototipo:

- Capa freemium/premium con pagos
- App móvil nativa (iOS/Android)
- Vídeos de rutina propios grabados con entrenadoras
- Sistema de retos colectivos con gamificación
- Integración con wearables o APIs de salud
- Panel de analítica y métricas de retención
