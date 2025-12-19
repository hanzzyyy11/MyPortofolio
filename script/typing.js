document.addEventListener("DOMContentLoaded", () => {

  /* ===== MOBILE MENU ===== */
  const hamburger = document.getElementById("hamburger");
  const menu = document.querySelector(".mobile-menu");

  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      menu.classList.toggle("active");
    });
  }