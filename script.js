// script.js — thème + persistance + progress bar (robuste)

// Exécute après que le DOM est chargé (sécurise l'accès aux éléments)
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggleBtn = document.getElementById("theme-toggle");
  const PROGRESS = document.querySelector(".scroll-progress");

  // Fonction utilitaire : applique un thème valide ("light" ou "dark")
  function applyTheme(theme) {
    if (theme !== "dark" && theme !== "light") theme = "light";
    body.setAttribute("data-theme", theme);
    if (toggleBtn) {
      toggleBtn.textContent = theme === "light" ? "🌙 Mode sombre" : "☀️ Mode clair";
    }
  }

  // 1) Chargement : priorité -> localStorage -> existing data-theme -> default "light"
  const saved = localStorage.getItem("theme");
  if (saved) {
    applyTheme(saved);
  } else {
    const initial = body.getAttribute("data-theme") || "light";
    applyTheme(initial);
    // (ne pas écrire dans localStorage tant que l'utilisateur n'a pas choisi)
  }

  // 2) Clic sur le bouton : bascule et sauvegarde
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = body.getAttribute("data-theme") || "light";
      const next = current === "light" ? "dark" : "light";

      // petite animation visuelle
      toggleBtn.style.transform = "scale(1.08)";
      setTimeout(() => (toggleBtn.style.transform = ""), 180);

      applyTheme(next);
      localStorage.setItem("theme", next);
    });
  } else {
    // debug friendly message si l'élément n'est pas trouvé
    // console.warn("theme-toggle button not found on this page.");
  }

  // 3) Barre de progression (si présente)
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
