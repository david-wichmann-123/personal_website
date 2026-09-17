const brand = document.querySelector(".brand");
if (brand) {
  brand.textContent = "DW";
  brand.setAttribute("aria-label", "Zur Startseite");
}

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}
