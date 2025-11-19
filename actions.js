// Tableau des images
const images = ["arr.jpg", "avatar_default2.png", "arr.jpg", "avatar_default2.png"];
let index = 0;

// Sélection des éléments
const diapoa = document.getElementById('diapoa');
const diapob = document.getElementById('diapob');
const diapoc = document.getElementById('diapoc');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

// Fonction pour afficher l’image courante
function afficherImage() {
	diapoa.src = images[index % images.length];
	diapob.src = images[(index + 1) % images.length];
	diapoc.src = images[(index + 2) % images.length];
}

// Bouton "Précédent"
prev.addEventListener('click', () => {
	index = (index - 1 + images.length) % images.length;
	afficherImage();
});

// Bouton "Suivant"
next.addEventListener('click', () => {
	index = (index + 1) % images.length;
	afficherImage();
});
