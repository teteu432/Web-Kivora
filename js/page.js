
const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const currentYear = document.querySelector('#current-year');
if (currentYear) currentYear.textContent = new Date().getFullYear();
function headerState(){ if(header) header.classList.toggle('scrolled', window.scrollY > 18); }
headerState(); window.addEventListener('scroll', headerState, {passive:true});
if(menuToggle && siteNav){
  menuToggle.addEventListener('click',()=>{
    const open = siteNav.classList.toggle('open');
    menuToggle.classList.toggle('active',open);
    menuToggle.setAttribute('aria-expanded',String(open));
    menuToggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');
    document.body.classList.toggle('menu-open',open);
  });
  siteNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    siteNav.classList.remove('open'); menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded','false'); document.body.classList.remove('menu-open');
  }));
}
