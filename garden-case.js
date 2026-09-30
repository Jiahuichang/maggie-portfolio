(() => {
  const gallery = document.querySelector('.badge-gallery');
  if (!gallery) return;
  const button = gallery.querySelector('.badge-motion-toggle');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let paused = reduced.matches;
  const render = () => {
    gallery.dataset.motion = paused ? 'paused' : 'playing';
    button.setAttribute('aria-pressed', String(paused));
    button.textContent = paused ? 'Play motion' : 'Pause motion';
    button.hidden = reduced.matches;
  };
  button.addEventListener('click', () => { paused = !paused; render(); });
  reduced.addEventListener('change', () => { paused = reduced.matches; render(); });
  render();
})();
