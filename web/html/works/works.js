// Función para cargar y mostrar el contenido de una categoría específica
function loadCategoryContent(category) {
    console.log('Loading content for category:', category);

    const worksContainer = document.getElementById('works-container');
    if (!worksContainer) {
        console.error('Works container not found');
        return;
    }

    const filePath = `/web/html/works/${category}.html`;

    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            worksContainer.innerHTML = html; // Cargar el contenido específico de la categoría
        })
        .catch(error => {
            console.error('Error loading category content:', error);
        });
}

// Función para renderizar el menú adicional dependiendo de la categoría seleccionada
function renderAdditionalMenu(category) {
    console.log('Rendering additional menu for category:', category);

    const worksMenuContainer = document.getElementById('works-menu-container');
    if (!worksMenuContainer) {
        console.error('Works menu container not found');
        return;
    }

    // Construir el HTML del menú adicional según la categoría
    let additionalMenuHtml = '';
    switch (category) {
        case 'all':
            additionalMenuHtml = `
                <ul>
                    <li><a href="#">All Items</a></li>
                    <li><a href="#">Popular Items</a></li>
                </ul>
            `;
            break;
        case 'apps':
            additionalMenuHtml = `
                <ul>
                    <li><a href="#">Mobile Apps</a></li>
                    <li><a href="#">Web Apps</a></li>
                </ul>
            `;
            break;
        case 'menu':
            additionalMenuHtml = `
                <ul>
                    <li><a href="#">Breakfast Menu</a></li>
                    <li><a href="#">Lunch Menu</a></li>
                    <li><a href="#">Dinner Menu</a></li>
                </ul>
            `;
            break;
        case 'login':
            additionalMenuHtml = `
                <ul>
                    <li><a href="#">User Login</a></li>
                    <li><a href="#">Admin Login</a></li>
                </ul>
            `;
            break;
        default:
            additionalMenuHtml = '';
            break;
    }

    worksMenuContainer.innerHTML = additionalMenuHtml; // Renderizar el menú adicional
}

// Manejar el clic en los enlaces del mini-menú
document.addEventListener('DOMContentLoaded', function() {
    const miniMenuLinks = document.querySelectorAll('#mini-menu a');
    miniMenuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
            const category = link.getAttribute('href').replace('/web/html/works/', '').replace('.html', '');
            loadCategoryContent(category); // Cargar el contenido de la categoría
            renderAdditionalMenu(category); // Renderizar el menú adicional
        });
    });
});
