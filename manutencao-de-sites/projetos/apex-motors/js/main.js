function carCard(car) {
  return `
    <article class="car-card reveal visible">
      <a class="car-image" href="veiculo.html?id=${car.id}" aria-label="Ver ${car.brand} ${car.model}">
        <img src="${car.image}" alt="${car.brand} ${car.model}" loading="lazy">
        <span>${car.year}</span>
      </a>
      <div class="car-body">
        <div class="car-title"><div><small>${car.brand}</small><h3>${car.model}</h3></div><strong>${money(car.price)}</strong></div>
        <div class="car-specs"><span>${km(car.km)}</span><span>${car.transmission}</span><span>${car.fuel}</span></div>
        <a class="text-link" href="veiculo.html?id=${car.id}">Ver detalhes →</a>
      </div>
    </article>`;
}

const featured = document.querySelector('#featuredCars');
if (featured) featured.innerHTML = APEX_CARS.filter(car => car.featured).slice(0, 3).map(carCard).join('');

const homeSearch = document.querySelector('#homeSearch');
if (homeSearch) {
  homeSearch.addEventListener('submit', (event) => {
    event.preventDefault();
    const params = new URLSearchParams(new FormData(homeSearch));
    [...params.keys()].forEach(key => { if (!params.get(key)) params.delete(key); });
    location.href = `estoque.html${params.toString() ? `?${params}` : ''}`;
  });
}

document.querySelectorAll('[data-whatsapp]').forEach(link => {
  const msg = encodeURIComponent('Olá! Vim pelo projeto Apex Motors e gostaria de saber mais sobre os veículos.');
  link.href = `https://wa.me/${APEX_WHATSAPP}?text=${msg}`;
});

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => nav.classList.toggle('open'));
}
