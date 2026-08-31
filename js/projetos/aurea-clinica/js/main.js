const treatments = {
  'limpeza-de-pele': { category:'FACIAL', name:'Limpeza de Pele', description:'Limpeza profunda para remover impurezas, renovar a aparência e proporcionar sensação de frescor.', duration:'60 minutos', price:'A partir de R$ 120', benefits:'Indicada para quem busca uma rotina de cuidado mais completa, com foco em limpeza, conforto e aparência renovada.' },
  'peeling-facial': { category:'FACIAL', name:'Peeling Facial', description:'Protocolo de renovação superficial adaptado às características e necessidades da pele.', duration:'45 minutos', price:'A partir de R$ 150', benefits:'Pode compor rotinas de cuidado voltadas à textura, luminosidade e uniformidade da aparência da pele.' },
  'microagulhamento': { category:'TECNOLOGIA', name:'Microagulhamento', description:'Protocolo individualizado realizado após avaliação profissional.', duration:'60 minutos', price:'A partir de R$ 250', benefits:'Indicado somente após avaliação, considerando objetivos, condição da pele e orientações de cuidado.' },
  'drenagem-linfatica': { category:'CORPORAL', name:'Drenagem Linfática', description:'Experiência corporal com movimentos suaves e atendimento individualizado.', duration:'60 minutos', price:'A partir de R$ 130', benefits:'Uma opção de cuidado corporal voltada ao conforto, relaxamento e bem-estar durante o atendimento.' },
  'massagem-modeladora': { category:'CORPORAL', name:'Massagem Modeladora', description:'Protocolo corporal personalizado conforme objetivos e avaliação inicial.', duration:'60 minutos', price:'A partir de R$ 140', benefits:'O atendimento é adaptado à pessoa, respeitando preferências, conforto e avaliação profissional.' },
  'depilacao-laser': { category:'TECNOLOGIA', name:'Depilação a Laser', description:'Avaliação personalizada para definir áreas, sessões e parâmetros adequados.', duration:'30–60 minutos', price:'Valor sob avaliação', benefits:'A indicação e o planejamento dependem de avaliação prévia e das características individuais.' },
  'protocolo-facial': { category:'FACIAL', name:'Protocolo Facial', description:'Combinação personalizada de técnicas e cuidados faciais.', duration:'60 minutos', price:'A partir de R$ 180', benefits:'Pensado para adaptar a experiência às necessidades identificadas durante a avaliação.' },
  'protocolo-corporal': { category:'CORPORAL', name:'Protocolo Corporal', description:'Plano de cuidado corporal personalizado.', duration:'60–90 minutos', price:'Valor sob avaliação', benefits:'O plano pode combinar diferentes recursos de acordo com avaliação e objetivo do atendimento.' }
};

const testimonials = [
  {text:'Desde o primeiro atendimento me senti muito bem recebida. O ambiente é lindo e todo o processo foi explicado com muito cuidado.',name:'Amanda Souza',service:'Limpeza de Pele'},
  {text:'Gostei principalmente da atenção aos detalhes. O agendamento foi simples e a experiência toda transmitiu muita confiança.',name:'Fernanda Oliveira',service:'Protocolo Facial'},
  {text:'A equipe foi muito acolhedora e o espaço é extremamente agradável. Voltaria com certeza para outros cuidados.',name:'Carolina Mendes',service:'Drenagem Linfática'},
  {text:'Tudo muito organizado, desde o primeiro contato até o atendimento. A proposta personalizada fez diferença para mim.',name:'Juliana Costa',service:'Microagulhamento'}
];

const faqs = [
  ['Preciso fazer uma avaliação antes?','Alguns procedimentos podem exigir uma avaliação prévia. No projeto demonstrativo, essa indicação aparece nos tratamentos que dependem de análise individual.'],
  ['Como funciona o agendamento?','Você escolhe o tratamento, a especialista, a data e um horário disponível. Depois informa seus dados e confirma a reserva demonstrativa.'],
  ['Posso remarcar meu horário?','Em uma versão real, a clínica poderia permitir remarcação pelo painel ou pelo atendimento no WhatsApp. Nesta demo, o painel administrativo permite alterar o status do agendamento.'],
  ['Quais formas de pagamento são aceitas?','As informações de pagamento são ilustrativas. Uma versão comercial poderia exibir Pix, cartão, dinheiro ou integrar uma solução de pagamento.'],
  ['Quanto tempo antes devo chegar?','Como exemplo, recomendamos chegar de 5 a 10 minutos antes para realizar o atendimento com tranquilidade.'],
  ['Os tratamentos possuem contraindicações?','Alguns procedimentos podem possuir contraindicações e devem ser avaliados por profissional habilitado. O site evita promessas ou recomendações clínicas individualizadas.']
];

const header=document.getElementById('siteHeader');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>30));
const menuToggle=document.getElementById('menuToggle'),mobileMenu=document.getElementById('mobileMenu');
menuToggle.addEventListener('click',()=>{const open=mobileMenu.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobileMenu.classList.remove('open')));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const modal=document.getElementById('treatmentModal');
document.querySelectorAll('.details-btn').forEach(btn=>btn.addEventListener('click',()=>{
  const id=btn.closest('[data-treatment]').dataset.treatment,t=treatments[id];
  document.getElementById('modalCategory').textContent=t.category;document.getElementById('modalTitle').textContent=t.name;document.getElementById('modalDescription').textContent=t.description;document.getElementById('modalInfo').innerHTML=`<span><b>Duração</b><br>${t.duration}</span><span><b>Investimento</b><br>${t.price}</span><span><b>Sessões</b><br>Conforme avaliação</span>`;document.getElementById('modalBenefits').textContent=t.benefits;document.getElementById('modalBook').href=`agendamento.html?servico=${id}`;modal.classList.add('open');document.body.classList.add('modal-open');modal.setAttribute('aria-hidden','false');
}));
function closeModal(){modal.classList.remove('open');document.body.classList.remove('modal-open');modal.setAttribute('aria-hidden','true')}modal.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',closeModal));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

const range=document.getElementById('compareRange'),afterWrap=document.getElementById('afterWrap'),sliderLine=document.getElementById('sliderLine'),beforeAfter=document.getElementById('beforeAfter'),afterImg=afterWrap.querySelector('.after-img');function updateCompare(){afterWrap.style.width=`${range.value}%`;sliderLine.style.left=`${range.value}%`;afterImg.style.width=`${beforeAfter.clientWidth}px`}range.addEventListener('input',updateCompare);window.addEventListener('resize',updateCompare);updateCompare();

const track=document.getElementById('testimonialTrack');track.innerHTML=testimonials.map(t=>`<article class="testimonial"><div class="stars">★★★★★</div><blockquote>“${t.text}”</blockquote><strong>${t.name}</strong><p>${t.service}</p></article>`).join('');let testIndex=0;function testimonialMax(){return Math.max(0,testimonials.length-(window.innerWidth<=720?1:3))}function updateTestimonials(){const card=track.querySelector('.testimonial');if(!card)return;testIndex=Math.min(testIndex,testimonialMax());const gap=18;track.style.transform=`translateX(-${testIndex*(card.offsetWidth+gap)}px)`}document.getElementById('testimonialNext').addEventListener('click',()=>{testIndex=Math.min(testIndex+1,testimonialMax());updateTestimonials()});document.getElementById('testimonialPrev').addEventListener('click',()=>{testIndex=Math.max(testIndex-1,0);updateTestimonials()});window.addEventListener('resize',updateTestimonials);

const faqList=document.getElementById('faqList');faqList.innerHTML=faqs.map(([q,a],i)=>`<div class="faq-item"><button class="faq-question" aria-expanded="false"><span>${q}</span><b>+</b></button><div class="faq-answer"><p>${a}</p></div></div>`).join('');faqList.querySelectorAll('.faq-question').forEach(btn=>btn.addEventListener('click',()=>{const item=btn.parentElement;item.classList.toggle('open');btn.setAttribute('aria-expanded',String(item.classList.contains('open')));btn.querySelector('b').textContent=item.classList.contains('open')?'−':'+'}));
