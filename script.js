document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    // Default theme
    body.classList.add("dark-theme");

    toggleButton.addEventListener("click", function () {
        if (body.classList.contains("dark-theme")) {
            body.classList.remove("dark-theme");
            body.classList.add("light-theme");
        } else {
            body.classList.remove("light-theme");
            body.classList.add("dark-theme");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        const rect = targetEl.getBoundingClientRect();
        const scrollOffset = rect.top + window.scrollY - (window.innerHeight / 2) + (rect.height / 2);

        window.scrollTo({
          top: scrollOffset,
          behavior: "smooth"
        });
      }
    });
  });
});