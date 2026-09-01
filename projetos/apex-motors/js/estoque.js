const form = document.querySelector('#filters');
const grid = document.querySelector('#inventoryGrid');
const count = document.querySelector('#resultCount');
const empty = document.querySelector('#emptyState');

const params = new URLSearchParams(location.search);
['brand', 'body', 'maxPrice', 'sort'].forEach(name => {
  if (params.get(name) && form.elements[name]) form.elements[name].value = params.get(name);
});

function render() {
  const data = new FormData(form);
  const brand = data.get('brand');
  const body = data.get('body');
  const maxPrice = Number(data.get('maxPrice') || 0);
  const sort = data.get('sort');

  let cars = APEX_CARS.filter(car => (!brand || car.brand === brand) && (!body || car.body === body) && (!maxPrice || car.price <= maxPrice));
  if (sort === 'price-asc') cars.sort((a,b) => a.price - b.price);
  if (sort === 'price-desc') cars.sort((a,b) => b.price - a.price);
  if (sort === 'year-desc') cars.sort((a,b) => b.year - a.year);
  if (sort === 'km-asc') cars.sort((a,b) => a.km - b.km);

  grid.innerHTML = cars.map(carCard).join('');
  count.textContent = `${cars.length} ${cars.length === 1 ? 'veículo encontrado' : 'veículos encontrados'}`;
  empty.hidden = cars.length > 0;

  const newParams = new URLSearchParams();
  for (const [key, value] of data.entries()) if (value) newParams.set(key, value);
  history.replaceState(null, '', `${location.pathname}${newParams.toString() ? `?${newParams}` : ''}`);
}

form.addEventListener('change', render);
form.addEventListener('submit', e => { e.preventDefault(); render(); });
document.querySelector('#clearFilters').addEventListener('click', () => { form.reset(); render(); });
render();
