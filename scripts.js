function toggleMenu() {
    var menuItems = document.querySelector('.menu-items');
    var menuToggleIcon = document.querySelector('.menu-toggle i');

    // Alternar clase 'open' para mostrar u ocultar el menú
    menuItems.classList.toggle('open');

    // Alternar entre íconos de barras y "X"
    if (menuItems.classList.contains('open')) {
        menuToggleIcon.classList.remove('fa-bars');
        menuToggleIcon.classList.add('fa-times');
    } else {
        menuToggleIcon.classList.remove('fa-times');
        menuToggleIcon.classList.add('fa-bars');
    }
}
