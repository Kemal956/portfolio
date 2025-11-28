document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggleBtn = document.getElementById("theme-toggle");
  const PROGRESS = document.querySelector(".scroll-progress");

  function applyTheme(theme) {
    if (theme !== "dark" && theme !== "light") theme = "light";
    body.setAttribute("data-theme", theme);
    if (toggleBtn) {
      toggleBtn.textContent = theme === "light" ? "🌙 Mode sombre" : "☀️ Mode clair";
    }
  }

  const saved = localStorage.getItem("theme");
  if (saved) {
    applyTheme(saved);
  } else {
    applyTheme(body.getAttribute("data-theme") || "light");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = body.getAttribute("data-theme");
      const next = current === "light" ? "dark" : "light";

      toggleBtn.style.transform = "scale(1.08)";
      setTimeout(() => (toggleBtn.style.transform = ""), 150);

      applyTheme(next);
      localStorage.setItem("theme", next);
    });
  }

  if (PROGRESS) {
    const updateProgress = () => {
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scroll = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      PROGRESS.style.width = scroll + "%";
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);
  }
});
