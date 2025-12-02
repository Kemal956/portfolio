// Récupérer le thème sauvegardé
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.body.setAttribute("data-theme", savedTheme);
}

const toggleBtn = document.getElementById("theme-toggle");

// Mise à jour de l'affichage du bouton
function updateToggleButton() {
    if (document.body.getAttribute("data-theme") === "dark") {
        toggleBtn.textContent = "☀️ Mode clair";
    } else {
        toggleBtn.textContent = "🌙 Mode sombre";
    }
}
updateToggleButton();

// Changement du thème
toggleBtn.addEventListener("click", () => {
    const current = document.body.getAttribute("data-theme");/* ================================
      GESTION DU MODE SOMBRE
================================ */

// Charger le thème sauvegardé (si existant)
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.body.setAttribute("data-theme", savedTheme);
}

const toggleBtn = document.getElementById("theme-toggle");

// Mettre le bon texte sur le bouton
function updateToggleButton() {
    if (document.body.getAttribute("data-theme") === "dark") {
        toggleBtn.textContent = "☀️ Mode clair";
    } else {
        toggleBtn.textContent = "🌙 Mode sombre";
    }
}
updateToggleButton();

// Changer le thème au clic
toggleBtn.addEventListener("click", () => {
    const current = document.body.getAttribute("data-theme");
    const newTheme = current === "dark" ? "light" : "dark";

    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    updateToggleButton();
});


/* ================================
      BARRE DE PROGRESSION SCROLL
================================ */

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / height) * 100;

    document.querySelector(".scroll-progress").style.width = scrolled + "%";
});

    const newTheme = current === "dark" ? "light" : "dark";

    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateToggleButton();
});

// Barre de progression
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / height) * 100;
    document.querySelector(".scroll-progress").style.width = scrolled + "%";
});
