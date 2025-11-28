// --- Thème sombre / clair avec sauvegarde --- //

const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// 1. Charger le thème sauvegardé
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  body.setAttribute("data-theme", savedTheme);
  toggleBtn.textContent =
    savedTheme === "light" ? "🌙 Mode sombre" : "☀️ Mode clair";
}

// 2. Changement du thème au clic
toggleBtn.onclick = () => {
  toggleBtn.style.transform = "scale(1.1)";
  setTimeout(() => {
    toggleBtn.style.transform = "";
  }, 200);

  const current = body.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";

  body.setAttribute("data-theme", next);

  // Mise à jour du texte du bouton
  toggleBtn.textContent =
    next === "light" ? "🌙 Mode sombre" : "☀️ Mode clair";

  // Sauvegarde du thème dans le navigateur
  localStorage.setItem("theme", next);
};

// --- Barre de progression --- //
window.addEventListener("scroll", () => {
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / docHeight) * 100;
  document.querySelector(".scroll-progress").style.width = progress + "%";
});
