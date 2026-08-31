(() => {
  const form=document.querySelector('#contactForm');
  form?.addEventListener('submit',e=>{
    e.preventDefault(); const lead=Object.fromEntries(new FormData(form)); lead.createdAt=new Date().toISOString();
    const leads=JSON.parse(localStorage.getItem('vertice_contact_leads')||'[]'); leads.push(lead); localStorage.setItem('vertice_contact_leads',JSON.stringify(leads));
    form.reset(); document.querySelector('#contactSuccess').classList.add('show');
  });
})();
