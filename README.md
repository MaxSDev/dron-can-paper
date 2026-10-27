# Dron-Can · visor PDF minimalista

`index.html` abre primero `dron-can.pdf` con el visor nativo del navegador, a pantalla completa, sin encabezados, pie de página ni botones propios. Los controles visibles son los del propio navegador (si los ofrece).

Si el navegador informa que no admite PDF en línea, el sitio muestra las cinco páginas como imágenes. El elemento HTML `<object>` también proporciona esas imágenes como contenido de respaldo cuando el navegador no puede incrustar el PDF. Algunos navegadores integrados en aplicaciones no comunican correctamente los fallos del visor: en ese caso es posible forzar la alternativa agregando `?fallback=1` a la URL. No existe detección automática infalible de PDFs que aparecen en blanco.

## Publicación en GitHub Pages

1. Descomprime este ZIP.
2. Crea o abre un repositorio público en GitHub (por ejemplo, `dron-can-paper`).
3. Sube los archivos `index.html`, `app.js`, `dron-can.pdf` y la carpeta `pages/` directamente a la raíz del repositorio. Si los archivos ya existen, reemplázalos. Puedes conservar este `README.md`.
4. Haz clic en **Commit changes**.
5. En **Settings → Pages**, selecciona **Deploy from a branch**, `main`, `/(root)` y **Save**.
6. Comparte `https://TU-USUARIO.github.io/dron-can-paper/` (no la dirección del repositorio).

Alternativas:

- URL directa al PDF: `https://TU-USUARIO.github.io/dron-can-paper/dron-can.pdf`
- Visualización garantizada mediante imágenes si el navegador puede mostrarlas: `https://TU-USUARIO.github.io/dron-can-paper/?fallback=1`

El PDF es el archivo original, sin cambios. Incluye nombres y correos de autores que serán públicos al publicar el sitio.
