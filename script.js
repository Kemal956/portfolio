const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Définir un thème par défaut si jamais il n'est pas présent
if (!body.getAttribute("data-theme")) {
  body.setAttribute("data-theme", "light");
}

// Changer l'emoji + le texte selon le thème actuel
toggleBtn.onclick = () => {
  const current = body.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  body.setAttribute("data-theme", next);

  toggleBtn.textContent =
    next === "light"
      ? "🌙 Mode sombre"
      : "☀️ Mode clair";
};
