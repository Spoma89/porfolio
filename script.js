function openCertificate(imageUrl) {
    window.open(imageUrl, '_blank');
}

// Obtener los elementos
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

// Cambiar el estado del menú cuando se haga clic en el icono
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});
