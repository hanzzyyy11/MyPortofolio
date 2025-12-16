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

// ===== PARALLAX BACKGROUND =====
const parallax = document.querySelector('.parallax-bg');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // makin kecil angkanya makin halus
  parallax.style.transform = `translateY(${scrollY * 0.15}px)`;
});

// ===== AURORA BACKGROUND =====
const canvas = document.getElementById("bg-particles");
const ctx = canvas.getContext("2d");

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

let t = 0;

function aurora() {
  ctx.clearRect(0, 0, w, h);

  for (let i = 0; i < 3; i++) {
    const gradient = ctx.createLinearGradient(0, 0, w, h);

    gradient.addColorStop(
      0,
      `hsla(${200 + i * 40}, 80%, 60%, 0.15)`
    );
    gradient.addColorStop(
      0.5,
      `hsla(${260 + i * 30}, 90%, 65%, 0.25)`
    );
    gradient.addColorStop(
      1,
      `hsla(${320 + i * 20}, 80%, 60%, 0.15)`
    );

    ctx.fillStyle = gradient;
    ctx.beginPath();

    ctx.moveTo(0, h * 0.5);

    for (let x = 0; x <= w; x += 40) {
      const y =
        h * 0.5 +
        Math.sin(x * 0.004 + t + i) * 120 +
        Math.sin(x * 0.002 + t * 1.5) * 60;

      ctx.lineTo(x, y);
    }

    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fill();
  }

  t += 0.005;
  requestAnimationFrame(aurora);
}

aurora();