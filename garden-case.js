(() => {
  const gallery = document.querySelector('.badge-gallery');
  if (!gallery) return;
  const items = [...gallery.querySelectorAll('.badge-item')];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let frame = 0;

  const render = () => {
    frame = 0;
    const height = window.innerHeight;
    const columns = window.innerWidth <= 767 ? 2 : 3;
    items.forEach((item, index) => {
      const object = item.querySelector('.badge-object');
      if (reduced.matches) {
        object.style.transform = 'none';
        return;
      }
      const rect = item.getBoundingClientRect();
      // Each row follows scroll in both directions, settling before screen center.
      const progress = Math.max(0, Math.min(1, (height * .95 - rect.top) / (height * .5)));
      const remaining = 1 - progress;
      const column = index % columns;
      const fromLeft = column < columns / 2;
      const direction = fromLeft ? -1 : 1;
      const distance = fromLeft ? rect.left + rect.width : window.innerWidth - rect.left;
      const x = direction * distance * remaining;
      const scale = .35 + .65 * progress;
      object.style.transform = `translate3d(${x}px, ${remaining * 60}px, 0) scale(${scale}) rotateX(${8 * progress}deg) rotateY(${direction * 18 * progress}deg) rotateZ(${direction * remaining * 20}deg)`;
    });
  };
  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(render);
  };
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  window.addEventListener('load', schedule);
  reduced.addEventListener('change', schedule);
  render();
})();
