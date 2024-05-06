function loadContent(pageName) {
    console.log('Loading page:', pageName);
    const filePath = `/web/html/works/${pageName}.html`;

    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            const secundarioContainer = document.getElementById('secundarios');
            secundarioContainer.innerHTML = html;
            updatePageTitle(pageName);
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });
}

function updatePageTitle(pageName) {
    // Selecciona el elemento del título dentro del contenedor secundario
    const pageTitleElement = document.querySelector('.headers h1');

    // Establece el título según la página cargada
    switch (pageName) {
        case 'apps':
            pageTitleElement.textContent = 'Apps'; // Cambia el título para la página "About-me"
            break;
        case 'login':
            pageTitleElement.textContent = 'Logins'; // Cambia el título para la página "Works"
            break;
        case 'menu':
            pageTitleElement.textContent = 'Menus'; // Cambia el título para la página "Works"
            break;
        case 'all':
            pageTitleElement.textContent = 'All'; // Cambia el título para la página "Works"
            break;             
        default:
            pageTitleElement.textContent = 'Works'; // Por defecto, muestra "Home" como título
            break;
    }
}

// Ejemplo de carga de contenido al hacer clic en un enlace
document.getElementById('mini-menu').addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        event.preventDefault(); // Evita la acción por defecto del enlace
        const pageName = event.target.getAttribute('href').split('/').pop().split('.')[0]; // Obtiene el nombre de la página desde el atributo href
        loadContent(pageName);
    }
});

// Cargar contenido inicial al cargar la página
window.addEventListener('load', function() {
    loadContent('home'); // Carga la página inicial al cargar la página
});

