// Bouton mode sombre
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.onclick = () => {
  toggleBtn.style.transform = "scale(1.1)";
  setTimeout(() => { toggleBtn.style.transform = ""; }, 200);

  const current = body.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  body.setAttribute("data-theme", next);

  toggleBtn.textContent = next === "light" ? "🌙 Mode sombre" : "☀️ Mode clair";
};

// Barre de progression
window.addEventListener("scroll", () => {
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / docHeight) * 100;
  document.querySelector(".scroll-progress").style.width = progress + "%";
});
