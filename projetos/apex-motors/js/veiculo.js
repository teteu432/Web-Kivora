const id = Number(new URLSearchParams(location.search).get('id')) || 1;
const car = APEX_CARS.find(item => item.id === id) || APEX_CARS[0];

document.title = `${car.brand} ${car.model} ${car.year} | Apex Motors`;
document.querySelector('#vehicleTitle').textContent = `${car.brand} ${car.model}`;
document.querySelector('#vehicleSubtitle').textContent = `${car.year} • ${km(car.km)} • ${car.transmission}`;
document.querySelector('#vehiclePrice').textContent = money(car.price);
document.querySelector('#vehicleDescription').textContent = car.description;
document.querySelector('#mainPhoto').src = car.gallery[0] || car.image;
document.querySelector('#mainPhoto').alt = `${car.brand} ${car.model}`;

document.querySelector('#specGrid').innerHTML = [
  ['Ano', car.year], ['Quilometragem', km(car.km)], ['Combustível', car.fuel],
  ['Câmbio', car.transmission], ['Cor', car.color], ['Categoria', car.body]
].map(([label,value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join('');

document.querySelector('#featureList').innerHTML = car.features.map(item => `<li>✓ ${item}</li>`).join('');

document.querySelector('#thumbs').innerHTML = car.gallery.map((src, index) => `<button class="thumb ${index === 0 ? 'active' : ''}" type="button"><img src="${src}" alt="Vista ${index + 1} de ${car.brand} ${car.model}"></button>`).join('');
document.querySelectorAll('.thumb').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.thumb').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  document.querySelector('#mainPhoto').src = button.querySelector('img').src;
}));

const msg = encodeURIComponent(`Olá! Tenho interesse no ${car.brand} ${car.model} ${car.year}, anunciado por ${money(car.price)}.`);
document.querySelectorAll('[data-vehicle-whatsapp]').forEach(link => link.href = `https://wa.me/${APEX_WHATSAPP}?text=${msg}`);

const related = document.querySelector('#relatedCars');
related.innerHTML = APEX_CARS.filter(item => item.id !== car.id).slice(0,3).map(carCard).join('');
