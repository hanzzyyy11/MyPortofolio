document.addEventListener("DOMContentLoaded", () => {
  const subtitles = document.querySelectorAll(".subtitle");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("animate");
          
          // reset biar bisa animasi ulang
          void entry.target.offsetWidth;

          entry.target.classList.add("animate");
        }
      });
    },
    {
      threshold: 0.6
    }
  );

  subtitles.forEach(sub => observer.observe(sub));
});