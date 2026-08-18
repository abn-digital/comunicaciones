# COMUNICACIONES ABN Group

Comunicados y landings de ABN Group, publicados automáticamente con **GitHub Pages**.

🔗 **En vivo:** https://abn-digital.github.io/comunicaciones/

## Cómo funciona (igual que `propuestas`: drop & publish)

Este repo sirve **estáticamente desde la rama `main`**. Cualquier HTML que pushees queda publicado solo, sin build ni pasos extra.

### Para sumar una comunicación nueva
1. Creá una carpeta con un `index.html` adentro:
   ```
   mi-comunicacion/
     └── index.html
   ```
2. Commiteá y pusheá a `main`.
3. En ~1 minuto queda viva en:
   `https://abn-digital.github.io/comunicaciones/mi-comunicacion/`

> Tip: usá una carpeta con `index.html` (en vez de `mi-comunicacion.html`) para tener URLs limpias, sin el `.html`.

4. Opcional: sumá la nueva pieza al listado en el `index.html` de la raíz.

## Notas
- El HTML tiene que ser **autocontenido** (estilos y scripts inline; sin dependencias externas obligatorias). Las imágenes van dentro de la misma carpeta y se referencian con rutas relativas.
- El archivo `.nojekyll` evita que GitHub Pages ignore carpetas que empiezan con `_`.
- Look & feel: base boutique de ABN (marfil, Helvetica fina, tarjetas redondeadas). Marca ABN sin rojo; el rojo que aparece en la pieza de YouTube es de YouTube.

## Contenido actual
- `youtube-views/` — Comunicado ABN Group × YouTube: cambio en el conteo de visualizaciones (24/8/2026).
