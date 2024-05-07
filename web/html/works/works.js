document.addEventListener('DOMContentLoaded', function() {
    var worksContainer = document.getElementById('works-container');

    // Obtener todos los enlaces del menú
    var menuLinks = document.querySelectorAll('#mini-menu a');

    // Función para cargar y mostrar el contenido de la página seleccionada
    function loadPage(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

        var pageURL = this.getAttribute('href'); // Obtener la URL de la página desde el atributo 'href'

        // Realizar una solicitud HTTP (fetch) para cargar el contenido de la página
        fetch(pageURL)
            .then(response => response.text()) // Convertir la respuesta a texto
            .then(html => {
                // Insertar el HTML cargado dentro del worksContainer
                worksContainer.innerHTML = html;
            })
            .catch(error => {
                console.error('Error al cargar la página:', error);
            });
    }

    // Agregar un event listener a cada enlace del menú para cargar la página correspondiente
    menuLinks.forEach(function(link) {
        link.addEventListener('click', loadPage);
    });
});
