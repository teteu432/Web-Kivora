const WHATSAPP_NUMBER = "";

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const revealElements = document.querySelectorAll(".reveal");
const faqQuestions = document.querySelectorAll(".faq-question");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const whatsappButton = document.querySelector("#whatsapp-button");
const currentYear = document.querySelector("#current-year");

/* =========================
   HEADER
========================= */
function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 18);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

/* =========================
   MOBILE MENU
========================= */
function closeMenu() {
  siteNav.classList.remove("open");
  menuToggle.classList.remove("active");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  document.body.classList.remove("menu-open");
}

function openMenu() {
  siteNav.classList.add("open");
  menuToggle.classList.add("active");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Fechar menu");
  document.body.classList.add("menu-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.contains("open");

  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    closeMenu();
  }
});

/* =========================
   ACTIVE NAV LINK
========================= */
const sections = [...document.querySelectorAll("main section[id], header[id]")];

function updateActiveNav() {
  const scrollPosition = window.scrollY + 160;
  let currentId = "inicio";

  sections.forEach((section) => {
    if (scrollPosition >= section.offsetTop) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const target = link.getAttribute("href").replace("#", "");
    link.classList.toggle("active", target === currentId);
  });
}

updateActiveNav();
window.addEventListener("scroll", updateActiveNav, { passive: true });

/* =========================
   SCROLL REVEAL
========================= */
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduceMotion) {
  revealElements.forEach((element) => element.classList.add("visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -45px 0px",
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

/* =========================
   FAQ ACCORDION
========================= */
faqQuestions.forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const isOpen = item.classList.contains("open");

    document.querySelectorAll(".faq-item").forEach((faqItem) => {
      faqItem.classList.remove("open");
      faqItem
        .querySelector(".faq-question")
        .setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      item.classList.add("open");
      button.setAttribute("aria-expanded", "true");
    }
  });
});

/* =========================
   FORM VALIDATION
========================= */
const formFields = {
  nome: {
    element: document.querySelector("#nome"),
    validate: (value) =>
      value.trim().length >= 2 ? "" : "Digite seu nome.",
  },
  whatsapp: {
    element: document.querySelector("#whatsapp"),
    validate: (value) => {
      const digits = value.replace(/\D/g, "");
      return digits.length >= 10 ? "" : "Digite um WhatsApp válido.";
    },
  },
  email: {
    element: document.querySelector("#email"),
    validate: (value) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(value.trim()) ? "" : "Digite um e-mail válido.";
    },
  },
  tipo: {
    element: document.querySelector("#tipo"),
    validate: (value) => (value ? "" : "Selecione o tipo de projeto."),
  },
  mensagem: {
    element: document.querySelector("#mensagem"),
    validate: (value) =>
      value.trim().length >= 10
        ? ""
        : "Conte um pouco mais sobre o projeto.",
  },
};

function setFieldError(fieldElement, message) {
  const wrapper = fieldElement.closest(".form-field");
  const errorElement = wrapper.querySelector(".field-error");

  wrapper.classList.toggle("invalid", Boolean(message));
  errorElement.textContent = message;
  fieldElement.setAttribute("aria-invalid", message ? "true" : "false");
}

function validateField(fieldConfig) {
  const message = fieldConfig.validate(fieldConfig.element.value);
  setFieldError(fieldConfig.element, message);
  return !message;
}

Object.values(formFields).forEach((fieldConfig) => {
  fieldConfig.element.addEventListener("blur", () => {
    validateField(fieldConfig);
  });

  fieldConfig.element.addEventListener("input", () => {
    const wrapper = fieldConfig.element.closest(".form-field");

    if (wrapper.classList.contains("invalid")) {
      validateField(fieldConfig);
    }
  });
});

function formatWhatsappMessage(formData) {
  const lines = [
    "Olá! Gostaria de solicitar um orçamento com a Web Kivora.",
    "",
    `Nome: ${formData.get("nome") || "-"}`,
    `Empresa: ${formData.get("empresa") || "-"}`,
    `WhatsApp: ${formData.get("whatsapp") || "-"}`,
    `E-mail: ${formData.get("email") || "-"}`,
    `Segmento: ${formData.get("segmento") || "-"}`,
    `Tipo de projeto: ${formData.get("tipo") || "-"}`,
    "",
    "Sobre o projeto:",
    formData.get("mensagem") || "-",
  ];

  return lines.join("\n");
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const validationResults = Object.values(formFields).map(validateField);
  const isFormValid = validationResults.every(Boolean);

  formStatus.className = "form-status";
  formStatus.textContent = "";

  if (!isFormValid) {
    const firstInvalid = contactForm.querySelector(".form-field.invalid input, .form-field.invalid select, .form-field.invalid textarea");

    if (firstInvalid) {
      firstInvalid.focus();
    }

    return;
  }

  const formData = new FormData(contactForm);
  const message = formatWhatsappMessage(formData);

  if (!WHATSAPP_NUMBER.trim()) {
    formStatus.classList.add("warning");
    formStatus.textContent =
      "Dados validados. Configure o número do WhatsApp no arquivo js/script.js para ativar o envio.";
    return;
  }

  const normalizedNumber = WHATSAPP_NUMBER.replace(/\D/g, "");

  if (normalizedNumber.length < 10) {
    formStatus.classList.add("warning");
    formStatus.textContent =
      "O número configurado em WHATSAPP_NUMBER parece inválido.";
    return;
  }

  const whatsappUrl = `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");

  formStatus.classList.add("success");
  formStatus.textContent =
    "Solicitação preparada. O WhatsApp foi aberto em uma nova guia.";
});

/* =========================
   WHATSAPP FLOATING BUTTON
========================= */
whatsappButton.addEventListener("click", () => {
  if (!WHATSAPP_NUMBER.trim()) {
    document.querySelector("#contato").scrollIntoView({ behavior: "smooth" });
    formStatus.className = "form-status warning";
    formStatus.textContent =
      "Adicione seu número na constante WHATSAPP_NUMBER para ativar o botão do WhatsApp.";
    return;
  }

  const normalizedNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
  const initialMessage =
    "Olá! Vim pelo site da Web Kivora e gostaria de saber mais sobre os serviços.";

  const whatsappUrl = `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(initialMessage)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});

/* =========================
   FOOTER YEAR
========================= */
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
