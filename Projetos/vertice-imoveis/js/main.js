(() => {
  const props = window.VERTICE_PROPERTIES || [];
  const cfg = window.VERTICE_CONFIG || {};
  const money = value => new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0}).format(value);
  const rentLabel = p => p.purpose === 'alugar' ? `${money(p.price)}/mês` : money(p.price);
  const favorites = () => JSON.parse(localStorage.getItem('vertice_favorites') || '[]');
  const saveFavorites = ids => localStorage.setItem('vertice_favorites', JSON.stringify(ids));

  window.Vertice = {
    money, rentLabel, favorites,
    toggleFavorite(id){
      const ids = favorites();
      const next = ids.includes(id) ? ids.filter(x=>x!==id) : [...ids,id];
      saveFavorites(next);
      document.querySelectorAll(`[data-favorite="${id}"]`).forEach(btn=>{
        btn.classList.toggle('active', next.includes(id));
        btn.textContent = next.includes(id) ? '♥' : '♡';
      });
      return next.includes(id);
    },
    card(p){
      const fav = favorites().includes(p.id);
      const rooms = p.bedrooms ? `<span>🛏 ${p.bedrooms}</span>` : '';
      return `<article class="property-card reveal">
        <div class="property-media">
          <a href="imovel.html?id=${p.id}" aria-label="Ver ${p.title}"><img src="${p.images[0]}" alt="${p.title}" loading="lazy"></a>
          <div class="badge-row"><span class="badge dark">${p.purpose === 'comprar' ? 'Venda' : 'Aluguel'}</span>${p.newProperty?'<span class="badge">Novo</span>':''}</div>
          <button class="favorite ${fav?'active':''}" data-favorite="${p.id}" aria-label="Favoritar imóvel">${fav?'♥':'♡'}</button>
        </div>
        <div class="property-body">
          <div class="place">${p.neighborhood} • ${p.city}/SP</div>
          <h3><a href="imovel.html?id=${p.id}">${p.title}</a></h3>
          <div class="price">${rentLabel(p)}</div>
          <div class="meta">${rooms}<span>🚿 ${p.bathrooms}</span><span>🚗 ${p.parking}</span><span>↔ ${p.area} m²</span><span class="ref">${p.reference}</span></div>
        </div>
      </article>`;
    },
    activateReveals(){
      const io = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
      document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
    }
  };

  const header = document.querySelector('.header');
  const onScroll = () => header?.classList.toggle('scrolled', scrollY > 24);
  onScroll(); addEventListener('scroll', onScroll, {passive:true});

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  toggle?.addEventListener('click',()=>{nav.classList.toggle('open');document.body.classList.toggle('no-scroll',nav.classList.contains('open'))});
  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');document.body.classList.remove('no-scroll')}));

  document.addEventListener('click', e => {
    const fav = e.target.closest('[data-favorite]');
    if(fav){e.preventDefault(); window.Vertice.toggleFavorite(Number(fav.dataset.favorite));}
  });

  const featured = document.querySelector('#featuredProperties');
  if(featured) featured.innerHTML = props.filter(p=>p.featured).slice(0,6).map(window.Vertice.card).join('');

  const search = document.querySelector('#homeSearch');
  search?.addEventListener('submit', e=>{
    e.preventDefault();
    const fd = new FormData(search); const q = new URLSearchParams();
    for(const [k,v] of fd.entries()) if(v) q.set(k,v);
    location.href = `imoveis.html?${q}`;
  });

  document.querySelectorAll('[data-category]').forEach(el=>el.addEventListener('click',e=>{
    e.preventDefault(); const q = new URLSearchParams();
    if(el.dataset.category) q.set('type',el.dataset.category);
    if(el.dataset.purpose) q.set('purpose',el.dataset.purpose);
    location.href=`imoveis.html?${q}`;
  }));

  const testimonials=[
    ['A equipe entendeu exatamente o que procurávamos e nos mostrou opções muito alinhadas ao nosso perfil.','Mariana e Lucas','Santo André'],
    ['O atendimento foi transparente do início ao fim. Encontramos nosso apartamento com muito mais segurança.','Camila Rocha','São Caetano do Sul'],
    ['Conseguimos anunciar e alugar nosso imóvel com uma apresentação muito profissional.','Eduardo Martins','São Bernardo do Campo'],
    ['Gostei principalmente da agilidade no contato e da forma clara como cada oportunidade foi apresentada.','Patrícia Almeida','Mauá']
  ];
  const quote=document.querySelector('#testimonialQuote'), name=document.querySelector('#testimonialName'), place=document.querySelector('#testimonialPlace'), dots=document.querySelector('#testimonialDots');
  if(quote&&dots){
    let idx=0;
    dots.innerHTML=testimonials.map((_,i)=>`<button class="dot ${i===0?'active':''}" data-testi="${i}" aria-label="Depoimento ${i+1}"></button>`).join('');
    const render=i=>{idx=i;quote.textContent=`“${testimonials[i][0]}”`;name.textContent=testimonials[i][1];place.textContent=testimonials[i][2];dots.querySelectorAll('.dot').forEach((d,j)=>d.classList.toggle('active',j===i));};
    dots.addEventListener('click',e=>{if(e.target.dataset.testi)render(Number(e.target.dataset.testi))});
    setInterval(()=>render((idx+1)%testimonials.length),5500);
  }

  const wa=document.querySelectorAll('[data-whatsapp]');
  const msg=encodeURIComponent('Olá! Conheci a Vértice Imóveis pelo site e gostaria de falar com um corretor.');
  wa.forEach(a=>a.href=`https://wa.me/${cfg.whatsapp}?text=${msg}`);

  window.Vertice.activateReveals();
})();
