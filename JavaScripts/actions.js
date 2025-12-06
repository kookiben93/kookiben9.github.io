// Tableau des images
const images = [
  "../Images/white.jpg",
  "../Images/t.webp",
  "../Images/main.jpg",
  "../Images/planete.png",
  "../Images/asso.png",
  "../Images/avion.jpg",
  "../Images/recyclage.jpg",
];
let index = 0;

// Sélection des éléments
const diapoa = document.getElementById("diapoa");
const diapob = document.getElementById("diapob");
const diapoc = document.getElementById("diapoc");
const diapod = document.getElementById("diapod");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

// Fonction pour afficher l’image courante
function afficherImage() {
  diapoa.src = images[index % images.length];
  diapob.src = images[(index + 1) % images.length];
  diapoc.src = images[(index + 2) % images.length];
  diapod.src = images[(index + 3) % images.length];
  updateDots();
}

// Bouton "Précédent"
prev.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  afficherImage();
});

// Bouton "Suivant"
next.addEventListener("click", () => {
  index = (index + 1) % images.length;
  afficherImage();
});

// Sélection des points
const dots = document.querySelectorAll(".dot");

// Fonction pour mettre à jour les points
function updateDots() {
  dots.forEach((dot, i) => {
    dot.classList.remove("active");
    if (i === index % images.length) {
      dot.classList.add("active");
    }
  });
}

afficherImage();
