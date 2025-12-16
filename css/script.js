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

const canvas = document.getElementById("bg-particles");
const ctx = canvas.getContext("2d");

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

// ===== PARTICLE SETTINGS =====
const particles = [];
const COUNT = 80;

for (let i = 0; i < COUNT; i++) {
  particles.push({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 2 + 1,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    alpha: Math.random(),
    glow: Math.random() > 0.5 ? "cyan" : "red"
  });
}

function draw() {
  ctx.clearRect(0, 0, w, h);

  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > w) p.vx *= -1;
    if (p.y < 0 || p.y > h) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

    const color =
      p.glow === "cyan"
        ? `rgba(90,220,255,${p.alpha})`
        : `rgba(255,80,80,${p.alpha})`;

    ctx.fillStyle = color;
    ctx.shadowBlur = 15;
    ctx.shadowColor = color;
    ctx.fill();
  });

  requestAnimationFrame(draw);
}

draw();