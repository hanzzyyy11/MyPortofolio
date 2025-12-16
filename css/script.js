const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});