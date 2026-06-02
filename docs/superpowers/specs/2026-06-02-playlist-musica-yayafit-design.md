# Diseño: Playlist de Música YayaFit

**Fecha**: 2026-06-02  
**Autor**: Claude Haiku 4.5  
**Estado**: Especificación para implementación  

## Objetivo
Crear una página centralizada `/musica/` que aloja todas las canciones de YayaFit de forma escalable. Las chicas pueden reproducir las canciones directamente en el navegador y ver las letras.

## Contexto
- **Sitio**: yayafit.es (WordPress en Hostinger)
- **Permisos**: Raúl es Editor (puede crear contenido y subir media)
- **MCP disponible**: sí, conectado vía adaptador de Hostinger
- **Canciones iniciales**: 
  1. "Segunda Juventud" (ya publicada como página `/himno/`)
  2. "Corazón Poderoso" (nueva, lista para publicar)
- **Futuro**: más canciones por venir → estructura debe ser escalable

## Requisitos

### Funcionales
1. Una página única `/musica/` que lista todas las canciones
2. Cada canción muestra:
   - Portada (imagen JPG)
   - Título
   - Reproductor HTML5 nativo (play, pausa, volumen, barra de progreso)
   - Letra expandible (oculta por defecto, se abre al hacer click)
3. Las canciones aparecen en orden cronológico (más reciente primero)
4. Cada canción es independiente y se puede reproducir sin afectar a las otras

### No-funcionales
- Solo reproducción en navegador (sin descarga)
- Peso mínimo: usar MP3 optimizados para web
- Escalable: agregar canciones nuevas = agregar un bloque HTML (sin código)
- Accesible: usar `<audio controls>` nativo (mejor que player custom)

## Arquitectura

### Media (WordPress)
**Subida vía MCP REST API** `/wp-json/wp/v2/media`:
- `corazon-poderoso.mp3` (optimizado para web)
- `portada-corazon-poderoso.jpg` (miniatura)
- `segunda-juventud.mp3` (ya existe)
- `portada-segunda-juventud.jpg` (ya existe)

Cada media devuelve una URL absoluta (ej: `https://yayafit.es/wp-content/uploads/2026/06/corazon-poderoso.mp3`) que se usa en los `<audio src="">`.

### Página "Música"
**Tipo**: Página WordPress  
**Slug**: `/musica/`  
**Contenido**: HTML con estructura repetida por canción

```html
<h1>Música YayaFit</h1>
<p>Escucha nuestros himnos de motivación y fuerza</p>

<!-- Canción: Corazón Poderoso (más reciente) -->
<div class="cancion">
  <img src="[URL_PORTADA_1]" alt="Corazón Poderoso" 
       style="max-width: 200px; border-radius: 8px;">
  <h3>Corazón Poderoso</h3>
  <audio src="[URL_MP3_1]" controls 
         style="width: 100%; margin: 10px 0;"></audio>
  <details style="margin: 20px 0; border: 1px solid #ccc; padding: 10px; border-radius: 4px;">
    <summary style="cursor: pointer; font-weight: bold;">Ver letra</summary>
    <pre style="margin-top: 10px; white-space: pre-wrap; font-family: inherit;">Me levanto hoy con fuego
Sin parar, sin dejar ir
...
</pre>
  </details>
</div>

<!-- Canción: Segunda Juventud (anterior) -->
<div class="cancion">
  <img src="[URL_PORTADA_2]" alt="Segunda Juventud" 
       style="max-width: 200px; border-radius: 8px;">
  <h3>Segunda Juventud</h3>
  <audio src="[URL_MP3_2]" controls 
         style="width: 100%; margin: 10px 0;"></audio>
  <details style="margin: 20px 0; border: 1px solid #ccc; padding: 10px; border-radius: 4px;">
    <summary style="cursor: pointer; font-weight: bold;">Ver letra</summary>
    <pre style="margin-top: 10px; white-space: pre-wrap; font-family: inherit;">Letra aquí...</pre>
  </details>
</div>
```

### Gestión de URLs de media
Las URLs se obtienen vía MCP al subir cada archivo. Se anotan en un lugar visible (ej: comentario en la página o nota local) para referencia futura.

## Implementación

### Paso 1: Subir media
Usar MCP para subir a WordPress Media:
1. `corazon-poderoso.mp3` → obtener URL
2. `portada-corazon-poderoso.jpg` → obtener URL
3. (Segunda Juventud ya está subida, confirmar URLs)

### Paso 2: Crear página "Música"
Vía MCP, crear página WordPress con:
- Título: "Música"
- Slug: "musica"
- Contenido: HTML bloques de canciones (ver estructura arriba)
- Estado: Publicada

### Paso 3: Agregar canción "Corazón Poderoso"
Insertar el bloque `<div class="cancion">` con:
- Portada JPG
- Reproductor MP3
- Letra proporcionada por el usuario

### Paso 4: Agregar canción "Segunda Juventud"
Integrar la ya publicada. Confirmar URLs de media existentes y replicar estructura.

## Escalabilidad futura
Cuando llegue una nueva canción:
1. Subir media vía MCP (MP3 + JPG)
2. Copiar bloque HTML de una canción existente
3. Actualizar URLs y contenido
4. Publicar

No requiere toque de código.

## Testing
- Reproducir cada canción: ✓ audio funciona
- Click en "Ver letra": ✓ se expande
- Responsive: ✓ funciona en móvil/tablet
- Navegación: ✓ menú principal enlaza a `/musica/`

## Decisiones de diseño

| Aspecto | Opción elegida | Por qué |
|--------|---|---|
| Reproductor | HTML5 nativo | Funciona en todos los navegadores, sin plugins, sin JS custom |
| Letra | `<details>` expandible | Mantiene página limpia, usuario elige leer |
| Orden | Cronológico descendente | Nuevas canciones aparecen arriba automáticamente |
| Hosting media | WordPress Media + URLs | Aprovecha MCP existente, no requiere almacenamiento externo |
| Estructura | Una página única | Escalable, menos mantenimiento que múltiples páginas |

## Riesgos y mitigaciones

| Riesgo | Mitigación |
|--------|---|
| URLs de media pueden cambiar si se mueve hosting | Documentar URLs en un lugar visible del proyecto |
| Página crece mucho con muchas canciones (100+) | Consideraria paginación o filtros en el futuro; por ahora OK |
| MP3s no optimizados = carga lenta | Verificar tamaño de archivos antes de subir |
