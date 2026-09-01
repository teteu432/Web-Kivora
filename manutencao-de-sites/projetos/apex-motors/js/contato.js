const form = document.querySelector('#contactForm');
const status = document.querySelector('#contactStatus');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const data = new FormData(form);
  const message = `Olá! Vim pelo site da Apex Motors.\nNome: ${data.get('name')}\nTelefone: ${data.get('phone')}\nInteresse: ${data.get('interest')}\nMensagem: ${data.get('message') || '-'}`;
  window.open(`https://wa.me/${APEX_WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  status.textContent = 'Solicitação preparada. O WhatsApp foi aberto em uma nova guia.';
});
