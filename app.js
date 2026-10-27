// Se usa el visor PDF normal siempre que sea posible.
// Las imágenes son únicamente un respaldo; nunca reemplazan el PDF original.
(() => {
  const viewer = document.getElementById('pdf');
  if (!viewer) return;

  function showImageFallback() {
    if (!viewer.isConnected) return;
    const pages = document.getElementById('pages');
    if (!pages) return;
    // Mover las imágenes fuera del <object> para permitir el scroll normal.
    viewer.replaceWith(pages);
  }

  // A diferencia del evento load de un PDF incrustado, esta API no
  // presupone que el contenido se renderizó correctamente.
  // El propio <object> también muestra sus hijos si no puede incrustar el PDF.
  const forceFallback = new URLSearchParams(window.location.search).get('fallback') === '1';
  if (forceFallback || navigator.pdfViewerEnabled === false) {
    showImageFallback();
  } else {
    viewer.addEventListener('error', showImageFallback, { once: true });
  }
})();
