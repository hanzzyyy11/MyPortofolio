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

  /* ===== TYPING EFFECT ===== */
  const text = "Call Me Han.";
  const typingEl = document.getElementById("typing");

  let index = 0;
  let isDeleting = false;

  function typingLoop() {
    if (!typingEl) return;

    if (!isDeleting) {
      typingEl.textContent = text.substring(0, index + 1);
      index++;

      if (index === text.length) {
        setTimeout(() => (isDeleting = true), 1200);
      }
    } else {
      typingEl.textContent = text.substring(0, index - 1);
      index--;

      if (index === 0) {
        isDeleting = false;
      }
    }

    setTimeout(typingLoop, isDeleting ? 80 : 120);
  }

  typingLoop();

});

// ===== RAIN BACKGROUND =====
const canvas = document.getElementById("bg-particles");
const ctx = canvas.getContext("2d");

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const drops = [];
const DROP_COUNT = 120;

for (let i = 0; i < DROP_COUNT; i++) {
  drops.push({
    x: Math.random() * w,
    y: Math.random() * h,
    len: Math.random() * 20 + 10,
    speed: Math.random() * 4 + 2,
    opacity: Math.random() * 0.4 + 0.2
  });
}

function rain() {
  ctx.clearRect(0, 0, w, h);

  drops.forEach(d => {
    ctx.beginPath();
    ctx.moveTo(d.x, d.y);
    ctx.lineTo(d.x, d.y + d.len);

    ctx.strokeStyle = `rgba(120,180,255,${d.opacity})`;
    ctx.lineWidth = 1;
    ctx.shadowBlur = 8;
    ctx.shadowColor = "rgba(120,180,255,0.6)";
    ctx.stroke();

    d.y += d.speed;

    if (d.y > h) {
      d.y = -d.len;
      d.x = Math.random() * w;
    }
  });

  requestAnimationFrame(rain);
}

rain();

// ===== PARALLAX BACKGROUND =====
const parallax = document.querySelector('.parallax-bg');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // makin kecil angkanya makin halus
  parallax.style.transform = `translateY(${scrollY * 0.15}px)`;
});