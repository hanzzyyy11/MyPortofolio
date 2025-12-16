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

// ===== SOFT BACKGROUND =====
const canvas = document.getElementById("bg-particles");
const ctx = canvas.getContext("2d");

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const blobs = [];
const BLOB_COUNT = 6;

for (let i = 0; i < BLOB_COUNT; i++) {
  blobs.push({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 220 + 180,
    dx: (Math.random() - 0.5) * 0.25,
    dy: (Math.random() - 0.5) * 0.25,
    hue: 200 + Math.random() * 80
  });
}

function animateBlobs() {
  ctx.clearRect(0, 0, w, h);

  blobs.forEach(b => {
    const grad = ctx.createRadialGradient(
      b.x, b.y, 0,
      b.x, b.y, b.r
    );

    grad.addColorStop(0, `hsla(${b.hue}, 80%, 60%, 0.12)`);
    grad.addColorStop(1, "transparent");

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
    ctx.fill();

    b.x += b.dx;
    b.y += b.dy;

    if (b.x < -b.r) b.x = w + b.r;
    if (b.x > w + b.r) b.x = -b.r;
    if (b.y < -b.r) b.y = h + b.r;
    if (b.y > h + b.r) b.y = -b.r;
  });

  requestAnimationFrame(animateBlobs);
}

animateBlobs();