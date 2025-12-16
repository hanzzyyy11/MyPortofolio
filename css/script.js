document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".mobile-menu");

  if (!hamburger || !menu) {
    console.error("NAVBAR ELEMENT NOT FOUND");
    return;
  }

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});