(() => {
  const props = window.VERTICE_PROPERTIES || [];
  const V = window.Vertice;
  const form = document.querySelector('#filtersForm');
  const grid = document.querySelector('#propertiesGrid');
  const count = document.querySelector('#resultsCount');
  const sort = document.querySelector('#sortProperties');
  const clear = document.querySelector('#clearFilters');
  const params = new URLSearchParams(location.search);

  const normalize=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  ['purpose','type','city'].forEach(name=>{const el=form.elements[name]; if(el&&params.get(name)) el.value=params.get(name)});

  function getFiltered(){
    const fd=new FormData(form); const purpose=fd.get('purpose'), type=fd.get('type'), city=fd.get('city'), neighborhood=normalize(fd.get('neighborhood'));
    const min=Number(fd.get('minPrice')||0), max=Number(fd.get('maxPrice')||Infinity), beds=Number(fd.get('bedrooms')||0), parking=Number(fd.get('parking')||0);
    let list=props.filter(p=>(!purpose||p.purpose===purpose)&&(!type||p.type===type)&&(!city||p.city===city)&&(!neighborhood||normalize(p.neighborhood).includes(neighborhood))&&p.price>=min&&p.price<=max&&p.bedrooms>=beds&&p.parking>=parking);
    const order=sort.value;
    if(order==='price-asc') list.sort((a,b)=>a.price-b.price);
    if(order==='price-desc') list.sort((a,b)=>b.price-a.price);
    if(order==='area-desc') list.sort((a,b)=>b.area-a.area);
    if(order==='new') list.sort((a,b)=>Number(b.newProperty)-Number(a.newProperty));
    if(order==='relevant') list.sort((a,b)=>Number(b.featured)-Number(a.featured));
    return list;
  }
  function render(){
    const list=getFiltered(); count.textContent=`${list.length} ${list.length===1?'imóvel encontrado':'imóveis encontrados'}`;
    grid.innerHTML=list.length?list.map(V.card).join(''):`<div class="empty" style="grid-column:1/-1"><h3>Nenhum imóvel encontrado.</h3><p>Tente ajustar os filtros ou fale com nossa equipe para encontrarmos outras opções.</p><a class="btn btn-primary" data-whatsapp target="_blank">Falar com um corretor</a></div>`;
    document.querySelectorAll('[data-whatsapp]').forEach(a=>a.href=`https://wa.me/${window.VERTICE_CONFIG.whatsapp}?text=${encodeURIComponent('Olá! Não encontrei o imóvel ideal nos filtros e gostaria de ajuda de um corretor.')}`);
    V.activateReveals();
  }
  form.addEventListener('submit',e=>{e.preventDefault();render()});
  sort.addEventListener('change',render);
  clear.addEventListener('click',()=>{form.reset();history.replaceState({},'',location.pathname);render()});
  render();
})();
