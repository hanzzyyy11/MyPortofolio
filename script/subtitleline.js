document.addEventListener("DOMContentLoaded", () => {
  const subtitles = document.querySelectorAll(".subtitle");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          // hapus biar bisa animasi ulang pas masuk lagi
          entry.target.classList.remove("animate");
        }
      });
    },
    {
      threshold: 0.6 // 60% kelihatan baru trigger
    }
  );

  subtitles.forEach(sub => observer.observe(sub));
});