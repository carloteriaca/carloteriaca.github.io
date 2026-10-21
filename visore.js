// VISORE: mostra le immagini di un progetto una alla volta.
// Le immagini sono dentro <div class="viewer"> come <img data-src="...">:
// si caricano solo quando servono, così la pagina resta leggera.
(function () {
  var viewer = document.querySelector('.viewer');
  if (!viewer) return;
  var slides = Array.prototype.slice.call(viewer.querySelectorAll('.viewer__stage img'));
  var prev = viewer.querySelector('[data-prev]');
  var next = viewer.querySelector('[data-next]');
  var count = viewer.querySelector('.viewer__count');
  var i = 0;

  function load(n) {
    var img = slides[n];
    if (img && img.dataset.src && !img.src) img.src = img.dataset.src;
  }

  function show(n) {
    i = (n + slides.length) % slides.length;
    slides.forEach(function (img, k) { img.hidden = k !== i; });
    load(i); load(i + 1); load(i - 1);
    if (count) count.textContent = (i + 1) + ' / ' + slides.length;
  }

  if (slides.length < 2) {
    if (prev) prev.hidden = true;
    if (next) next.hidden = true;
    if (count) count.hidden = true;
  }
  if (prev) prev.addEventListener('click', function () { show(i - 1); });
  if (next) next.addEventListener('click', function () { show(i + 1); });

  // Frecce della tastiera, solo quando il visore è attivo.
  viewer.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { show(i - 1); e.preventDefault(); }
    if (e.key === 'ArrowRight') { show(i + 1); e.preventDefault(); }
  });

  // Scorrimento con il dito sul telefono.
  var x0 = null;
  viewer.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  viewer.addEventListener('touchend', function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) show(dx < 0 ? i + 1 : i - 1);
    x0 = null;
  });

  // Niente menu "salva immagine" e niente trascinamento: un deterrente, non una protezione.
  viewer.addEventListener('contextmenu', function (e) { e.preventDefault(); });
  slides.forEach(function (img) { img.draggable = false; });

  show(0);
})();
