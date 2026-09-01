(() => {
  const props=window.VERTICE_PROPERTIES||[], V=window.Vertice, cfg=window.VERTICE_CONFIG;
  const params=new URLSearchParams(location.search); const id=Number(params.get('id')); const slug=params.get('slug');
  const p=props.find(x=>x.id===id)||props.find(x=>x.slug===slug)||props[0];
  document.title=`${p.title} | Vértice Imóveis`;
  document.querySelector('#breadcrumbTitle').textContent=p.title;
  const gallery=document.querySelector('#detailGallery');
  gallery.innerHTML=p.images.slice(0,5).map((src,i)=>`<button data-image="${src}"><img src="${src}" alt="${p.title} - foto ${i+1}">${i===3?'<span class="gallery-more">Ver todas as fotos</span>':''}</button>`).join('');
  document.querySelector('#detailTitle').textContent=p.title;
  document.querySelector('#detailPlace').textContent=`${p.neighborhood} • ${p.city}/SP`;
  document.querySelector('#detailPrice').textContent=V.rentLabel(p);
  document.querySelector('#detailRef').textContent=`REF. ${p.reference}`;
  const meta=[['Dormitórios',p.bedrooms],['Suítes',p.suites],['Banheiros',p.bathrooms],['Vagas',p.parking],['Área',`${p.area} m²`]].filter(x=>x[1]!==0);
  document.querySelector('#detailMeta').innerHTML=meta.map(x=>`<div><strong>${x[1]}</strong><span>${x[0]}</span></div>`).join('');
  document.querySelector('#detailDescription').textContent=p.description;
  document.querySelector('#features').innerHTML=p.features.map(f=>`<div class="feature">${f}</div>`).join('');
  document.querySelector('#locationText').textContent=`${p.neighborhood} — ${p.city}/SP`;

  const favBtn=document.querySelector('#detailFavorite');
  const refreshFav=()=>{const yes=V.favorites().includes(p.id);favBtn.textContent=yes?'♥ Imóvel salvo':'♡ Salvar imóvel';favBtn.classList.toggle('btn-primary',yes);favBtn.classList.toggle('btn-outline',!yes)}; refreshFav();
  favBtn.addEventListener('click',()=>{V.toggleFavorite(p.id);refreshFav()});

  const waText=encodeURIComponent(`Olá! Vi no site da Vértice o imóvel:\n\n${p.title}\nREF. ${p.reference}\n${V.rentLabel(p)}\n\nGostaria de mais informações.`);
  document.querySelector('#propertyWhatsapp').href=`https://wa.me/${cfg.whatsapp}?text=${waText}`;

  const form=document.querySelector('#interestForm');
  form.querySelector('textarea').value=`Olá, gostaria de receber mais informações sobre o imóvel ${p.reference}.`;
  form.addEventListener('submit',e=>{
    e.preventDefault(); const data=Object.fromEntries(new FormData(form)); data.propertyId=p.id; data.reference=p.reference; data.createdAt=new Date().toISOString();
    const leads=JSON.parse(localStorage.getItem('vertice_leads')||'[]'); leads.push(data); localStorage.setItem('vertice_leads',JSON.stringify(leads));
    document.querySelector('#interestSuccess').classList.add('show'); form.reset();
  });

  const similar=props.filter(x=>x.id!==p.id&&(x.city===p.city||x.type===p.type)).sort((a,b)=>Math.abs(a.price-p.price)-Math.abs(b.price-p.price)).slice(0,3);
  document.querySelector('#similarGrid').innerHTML=similar.map(V.card).join('');

  const light=document.querySelector('#lightbox'), lightImg=document.querySelector('#lightboxImage');
  gallery.addEventListener('click',e=>{const btn=e.target.closest('[data-image]'); if(!btn)return; lightImg.src=btn.dataset.image;light.classList.add('open');document.body.classList.add('no-scroll')});
  document.querySelector('#lightboxClose').addEventListener('click',()=>{light.classList.remove('open');document.body.classList.remove('no-scroll')});
  light.addEventListener('click',e=>{if(e.target===light){light.classList.remove('open');document.body.classList.remove('no-scroll')}});
  V.activateReveals();
})();
