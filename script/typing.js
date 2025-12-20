document.addEventListener("DOMContentLoaded", () => {

  /* ===== TYPING EFFECT ===== */
  const text = "all Me Han.";
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
