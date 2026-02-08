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

// demo form button (optional)
document.getElementById("fakeSubmit")?.addEventListener("click", () => {
  alert("Listo. Para envío real, te configuro Formspree o Netlify Forms en 5 minutos.");
});

// mobile menu (simple)
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger?.addEventListener("click", () => {
  const expanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", String(!expanded));

  // super simple toggle: show/hide
  if (nav) nav.style.display = expanded ? "none" : "flex";
});
