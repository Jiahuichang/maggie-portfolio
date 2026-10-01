(() => {
  const demo = document.querySelector('.plant-demo');
  if (!demo) return;
  const figure = demo.closest('figure');
  const card = demo.querySelector('.plant-card');
  const water = demo.querySelector('.water-action');
  const harvest = demo.querySelector('.harvest-action');
  const feedback = demo.querySelector('.plant-feedback');
  const live = figure.querySelector('.plant-live');
  let selected = null;
  let watered = false;
  let collected = false;
  let busy = false;
  let timers = [];
  const later = (fn, ms) => timers.push(setTimeout(fn, ms));
  const announce = message => { live.textContent = message; };
  function closeCard() {
    card.hidden = true;
    demo.querySelectorAll('[data-plant]').forEach(el => el.setAttribute('aria-pressed', 'false'));
    selected = null;
  }
  function showCard(id) {
    selected = id;
    card.hidden = false;
    demo.querySelectorAll('[data-plant]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.plant === id)));
    const grown = id === 'three' || (id === 'one' && watered);
    card.querySelector('.plant-stage').textContent = grown ? 'Grown' : 'Seedling';
    card.dataset.grown = String(grown);
    card.querySelector('.plant-card-state').textContent = id === 'three' ? (collected ? 'Reward collected' : 'Ready to harvest') : id === 'one' ? (watered ? 'Watered · Next stage reached' : 'Ready for the next growth stage') : 'Growing · Already watered';
    const action = card.querySelector('.plant-card-action');
    action.textContent = id === 'three' ? (collected ? 'Collected' : 'Collect 60') : watered && id === 'one' ? 'Watered' : 'Water';
    action.disabled = busy || (id === 'three' ? collected : id === 'two' || watered);
  }
  function waterPlant() {
    if (watered || busy) return;
    busy = true;
    water.disabled = true;
    closeCard();
    demo.classList.add('is-watering');
    demo.querySelector('#water-count').textContent = '9';
    announce('Watering your plant.');
    later(() => {
      watered = true;
      busy = false;
      water.hidden = true;
      demo.classList.remove('is-watering');
      demo.classList.add('is-grown');
      demo.querySelector('.plant-one .plant-face img').src = 'assets/ride-and-grow/plant-grown.png';
      feedback.textContent = 'Watered';
      feedback.className = 'plant-feedback watered-feedback visible';
      announce('Watered! Your plant has grown to the next stage.');
      if (selected) showCard(selected);
      later(() => feedback.classList.remove('visible'), 1800);
    }, 1000);
  }
  function collect() {
    if (collected || busy) return;
    collected = true;
    harvest.hidden = true;
    demo.querySelector('#coin-count').textContent = '126';
    feedback.textContent = '+60';
    feedback.className = 'plant-feedback reward-feedback visible';
    announce('Collected 60 coins. Your balance is 126.');
    if (selected) showCard(selected);
    later(() => feedback.classList.remove('visible'), 1800);
  }
  water.addEventListener('click', waterPlant);
  harvest.addEventListener('click', collect);
  demo.querySelectorAll('[data-plant]').forEach(el => el.addEventListener('click', () => showCard(el.dataset.plant)));
  demo.querySelector('.plant-close').addEventListener('click', () => {
    const previous = selected;
    closeCard();
    demo.querySelector(`[data-plant="${previous}"]`)?.focus();
  });
  card.querySelector('.plant-card-action').addEventListener('click', () => selected === 'three' ? collect() : waterPlant());
  demo.addEventListener('keydown', event => { if (event.key === 'Escape') closeCard(); });
  figure.querySelector('.plant-reset').addEventListener('click', () => {
    timers.forEach(clearTimeout);
    timers = [];
    watered = collected = busy = false;
    closeCard();
    water.hidden = harvest.hidden = false;
    water.disabled = false;
    demo.classList.remove('is-watering', 'is-grown');
    demo.querySelector('.plant-one .plant-face img').src = 'assets/ride-and-grow/plant-seedling.png';
    demo.querySelector('#water-count').textContent = '10';
    demo.querySelector('#coin-count').textContent = '66';
    feedback.classList.remove('visible');
    announce('Demo reset. Try watering a plant or collecting coins.');
  });
})();
