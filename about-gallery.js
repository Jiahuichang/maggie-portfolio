(() => {
  const panel = document.querySelector('.archive-preview');
  const triggers = [...document.querySelectorAll('.about-archive-trigger')];
  if (!panel || !triggers.length) return;
  const gallery = {
    panda: ['Panda Mama Screwdriver', [['panda-use', 'Panda Mama screwdriver in use.'], ['panda-parts', 'Screwdriver and stored bits.'], ['panda-model-painted', 'Painted Panda Mama physical prototype on the workbench.'], ['panda-model', 'Panda Mama physical prototype in development.']]],
    taivaun: ['Taivaun Screwdriver Set', [['taivaun-parts', 'Screwdriver bits and mountain-shaped storage.'], ['taivaun-storage', 'Opened mountain showing bit storage.'], ['taivaun-detail', 'Close-up of the mountain storage details.'], ['taivaun-sketch', 'Original hand-drawn Taivaun design sketch.']]],
    bandy: ['Bandy Tape Measure', [['bandy-measure', 'Bandy with measuring tape extended.'], ['bandy-keyring', 'Bandy used as a keyring.'], ['bandy-sketch', 'Original bear-shaped tape measure sketches.'], ['bandy-development', 'Hand-drawn tape measure form explorations.']]]
  };
  let active = null, pinned = false, timer;
  const cancelClose = () => clearTimeout(timer);
  const close = (restore = false) => {
    cancelClose();
    const previous = active;
    active = null; pinned = false; panel.hidden = true;
    triggers.forEach(button => button.setAttribute('aria-expanded', 'false'));
    if (restore && previous) previous.focus({preventScroll:true});
  };
  const position = () => {
    if (!active || panel.hidden) return;
    const margin = 16, gap = 12;
    panel.style.maxHeight = '';
    const rect = active.closest('figure').getBoundingClientRect();
    const width = panel.offsetWidth;
    if (innerWidth <= 767) {
      panel.style.left = `${(innerWidth - width) / 2}px`;
      panel.style.top = `${Math.max(margin, (innerHeight - panel.offsetHeight) / 2)}px`;
      return;
    }
    const topLimit = Math.max(margin, document.querySelector('.w-nav')?.getBoundingClientRect().bottom || 0) + gap;
    const above = rect.top - gap - topLimit;
    const below = innerHeight - margin - rect.bottom - gap;
    const placeBelow = below >= panel.offsetHeight || below >= above;
    const available = Math.max(180, placeBelow ? below : above);
    panel.style.maxHeight = `${Math.min(available, innerHeight - topLimit - margin)}px`;
    panel.style.left = `${Math.max(margin, Math.min(rect.left + rect.width / 2 - width / 2, innerWidth - width - margin))}px`;
    const top = placeBelow ? rect.bottom + gap : rect.top - gap - panel.offsetHeight;
    panel.style.top = `${Math.max(topLimit, Math.min(top, innerHeight - panel.offsetHeight - margin))}px`;
  };
  const open = button => {
    cancelClose();
    if (active !== button) {
      const [title, photos] = gallery[button.dataset.gallery];
      panel.querySelector('h2').textContent = title;
      panel.querySelector('.archive-preview-grid').replaceChildren(...photos.map(([file, alt]) => {
        const img = new Image(); img.src = `assets/about/industrial/${file}.webp`; img.alt = alt; img.decoding = 'async'; return img;
      }));
      active = button; pinned = false;
    }
    triggers.forEach(item => item.setAttribute('aria-expanded', String(item === button)));
    panel.hidden = false;
    position();
  };
  const scheduleClose = () => { cancelClose(); if (!pinned) timer = setTimeout(() => close(), 250); };
  triggers.forEach(button => {
    const card = button.closest('figure');
    card.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') open(button); });
    card.addEventListener('pointerleave', scheduleClose);
    button.addEventListener('click', () => { open(button); pinned = true; panel.querySelector('button').focus({preventScroll:true}); });
  });
  window.addEventListener('resize', position);
  window.addEventListener('scroll', () => { if (pinned) position(); else if (active) close(); }, {passive:true});
  panel.addEventListener('pointerenter', cancelClose);
  panel.addEventListener('pointerleave', scheduleClose);
  panel.querySelector('.archive-preview-close').addEventListener('click', () => close(true));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !panel.hidden) close(panel.contains(document.activeElement)); });
  document.addEventListener('click', event => { if (!panel.hidden && !panel.contains(event.target) && !triggers.some(button => button.contains(event.target))) close(); });
  document.addEventListener('focusin', event => { if (!panel.hidden && !panel.contains(event.target) && !triggers.includes(event.target)) close(); });
})();
