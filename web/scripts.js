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
    const filePath = `/web/${pageName}.html`; // Ruta del archivo HTML correspondiente
    
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



// function loadContent(page) {
//     var secundario = document.getElementById('secundario');

//     // Limpiar contenido actual del contenedor secundario
//     secundario.innerHTML = '';

//     // Cargar contenido específico según la página seleccionada
//     if (page === 'home') {
//         secundario.innerHTML = `
//             <h2>Contenido de la Página de Inicio</h2>
//             <p>Bienvenido a mi portafolio. Aquí encontrarás información relevante sobre mí.</p>
//         `;
//     } else if (page === 'about') {
//         secundario.innerHTML = `
//             <h2>Sobre Mí</h2>
//             <p>Soy Jeremy Domínguez, un desarrollador web apasionado por crear experiencias digitales.</p>
//         `;
//     } else if (page === 'works') {
//         secundario.innerHTML = `
//             <h2>Proyectos y Trabajos</h2>
//             <p>Echa un vistazo a algunos de mis proyectos y trabajos recientes.</p>
//             <ul>
//                 <li>Proyecto A</li>
//                 <li>Proyecto B</li>
//                 <li>Proyecto C</li>
//             </ul>
//         `;
//     } else if (page === 'contact') {
//         secundario.innerHTML = `
//             <h2>Proyectos y Trabajos</h2>
//             <p>Echa un vistazo a algunos de mis proyectos y trabajos recientes.</p>
//             <ul>
//                 <li>Proyecto A</li>
//                 <li>Proyecto B</li>
//                 <li>Proyecto C</li>
//             </ul>
//         `;
//     }
// }