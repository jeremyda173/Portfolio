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

function loadContent(pageName) {
    const secundarioContainer = document.getElementById('secundario');
    const filePath = `/web/html/${pageName}.html`; // Ruta del archivo HTML correspondiente
    
    // Realiza una solicitud HTTP para cargar el contenido del archivo
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            secundarioContainer.innerHTML = html; // Inserta el contenido en el contenedor secundario
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });
}
