# YayaFit

Repositorio del proyecto **YayaFit** — fitness y bienestar para mujeres de 60-75 años.
Reúne en un solo sitio la documentación de negocio, la marca, el contenido del producto,
la música y las herramientas de IA del proyecto.

## Estructura del repositorio

```
05-yayafit/
├── docs/        Documentación de negocio (plan, pitch, roadmap, financiero)
├── brand/       Identidad visual: tokens, imágenes, mockups de UI
│   ├── images/        imágenes definitivas
│   ├── ui/            componentes y mockups (jsx/html)
│   └── explorations/  exploraciones de diseño (p. ej. portadas)
├── app/         Producto web (WordPress: yayafit.es)
│   ├── content/       contenido editorial (páginas, rutinas, bienestar)
│   ├── config/        ajustes y plugins de WordPress
│   ├── wordpress/     notas de desarrollo y workspace
│   └── planning/      specs y planes del prototipo
├── music/       Canciones del proyecto (una carpeta por canción)
│   ├── NN-nombre/     audio + portada + creacion/ (producción)
│   ├── scripts/       utilidades (p. ej. incrustar portada en MP3)
│   └── planning/      diseño de playlist y notas transversales
├── skills/      Skills de IA del proyecto (p. ej. suno-music-creator)
└── academic/    Trabajo académico (Máster M3) — independiente del producto
```

## Convenciones

- **Nombres en minúsculas, `kebab-case`, sin espacios ni acentos** en carpetas y documentos.
  Excepción: los archivos de audio/portada de `music/` conservan su nombre de distribución
  (`<Nombre> - YayaFit.mp3`) a propósito.
- Una sola carpeta por concepto (documentación, marca, producto, música…).
- La configuración local de herramientas (`.claude/`, `.agents/`, `.superpowers/`) y el estado
  de ejecución (`*.pid`, `**/state/`) no se versionan — ver [`.gitignore`](.gitignore).

## Puntos de entrada

| Quiero… | Ir a |
| --- | --- |
| Entender el negocio / la inversión | [`docs/`](docs/README.md) |
| Ver la marca y los mockups | [`brand/`](brand/) |
| Editar el contenido de la web | [`app/content/`](app/content/) |
| Trabajar con WordPress (yayafit.es) | [`app/wordpress/`](app/wordpress/desarrollo-wordpress.md) |
| Escuchar / producir música | [`music/`](music/README.md) |
| Usar las skills de IA | [`skills/`](skills/) |
