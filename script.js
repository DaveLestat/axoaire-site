// year
document.getElementById("year").textContent = new Date().getFullYear();

// reveal on scroll
const els = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("is-visible");
  });
}, { threshold: 0.12 });

els.forEach(el => io.observe(el));

// WhatsApp handler
document.getElementById("waSend")?.addEventListener("click", () => {
  const name = document.querySelector('input[name="name"]')?.value?.trim() || "";
  const zone = document.querySelector('input[name="zone"]')?.value?.trim() || "";
  const service = document.querySelector('select[name="service"]')?.value?.trim() || "";
  const msg  = document.querySelector('textarea[name="message"]')?.value?.trim() || "";

  if (!name && !zone && !msg) {
    alert("Escribe al menos tu nombre o un mensaje para continuar.");
    return;
  }

  const phone = "12533017242"; // moi number

  const text = `
Hola AxoAiré,
Nombre: ${name || "(no indicado)"}
Zona/Colonia: ${zone || "(no indicado)"}
Tipo de servicio: ${service || "(no indicado)"}
Mensaje:
${msg || "(sin mensaje)"}
`.trim();

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});



// mobile menu (class toggle - no inline styles)
const hamburger = document.querySelector(".hamburger");
const topbar = document.querySelector(".topbar");

hamburger?.addEventListener("click", () => {
  const expanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", String(!expanded));
  topbar?.classList.toggle("is-open");
});

// safety: when going back to desktop, reset menu state
window.addEventListener("resize", () => {
  if (window.innerWidth > 920) {
    topbar?.classList.remove("is-open");
    hamburger?.setAttribute("aria-expanded", "false");
  }
});


// document.querySelectorAll(".nav a").forEach(link => {
//   link.addEventListener("click", () => {
//     topbar?.classList.remove("is-open");
//     hamburger?.setAttribute("aria-expanded", "false");
//   });
// });


