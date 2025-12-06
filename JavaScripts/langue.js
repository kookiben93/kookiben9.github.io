function setLanguage(lang) {
  // On cache toutes les langues
  document.querySelectorAll(".fr, .en").forEach(el => el.style.display = "none");
  // On affiche uniquement la langue choisie
  document.querySelectorAll("." + lang).forEach(el => el.style.display = "block");
}

// Cahrge la page en français
setLanguage("fr");

// Change
document.getElementById("langChoice").addEventListener("change", function() {
  setLanguage(this.value);
});