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
    console.log('Loading page:', pageName);
    const secundarioContainer = document.getElementById('secundario');
    const filePath = `/web/html/${pageName}.html`;

    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            secundarioContainer.innerHTML = html;
            updatePageTitle(pageName);
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });
}


function updatePageTitle(pageName) {
    // Selecciona el elemento del título dentro del contenedor secundario
    const pageTitleElement = document.querySelector('.header h1');

    // Establece el título según la página cargada
    switch (pageName) {
        case 'about-me':
            pageTitleElement.textContent = 'About Me'; // Cambia el título para la página "About-me"
            break;
        case 'works':
            pageTitleElement.textContent = 'Works'; // Cambia el título para la página "Works"
            break;    
        default:
            pageTitleElement.textContent = 'Home'; // Por defecto, muestra "Home" como título
            break;
    }
}


// Ejemplo de carga de contenido al hacer clic en un enlace
document.querySelector('.menu-items').addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        const pageName = event.target.getAttribute('data-page');
        loadContent(pageName);
    }
});

// Cargar contenido inicial al cargar la página
window.addEventListener('load', function() {
    loadContent('home'); // Carga la página inicial
});

