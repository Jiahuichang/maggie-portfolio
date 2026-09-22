// Small, local navigation controller. No hosted runtime or tracking service.
document.querySelectorAll('.w-nav').forEach(header => {
  const button = header.querySelector('.w-nav-button');
  const menu = header.querySelector('.w-nav-menu');
  if (!button || !menu) return;
  menu.id = 'main-navigation';
  button.setAttribute('aria-controls', menu.id);
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-label', 'Open menu');
  const close = () => { menu.classList.remove('menu-open'); button.setAttribute('aria-expanded', 'false'); button.setAttribute('aria-label', 'Open menu'); };
  button.addEventListener('click', () => { const open = menu.classList.toggle('menu-open'); button.setAttribute('aria-expanded', String(open)); button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', event => { if(event.key === 'Escape' && menu.classList.contains('menu-open')) { close(); button.focus(); } });
  document.addEventListener('click', event => { if(!header.contains(event.target)) close(); });
  window.addEventListener('resize', () => { if(window.innerWidth > 991) close(); });
});
