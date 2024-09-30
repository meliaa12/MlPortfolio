// Sélection des éléments dans le DOM
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Ajout d'un événement pour basculer la classe "active"
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
