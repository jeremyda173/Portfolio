document.addEventListener("DOMContentLoaded", function() {
    const miniMenuLinks = document.querySelectorAll("#mini-menu a");
    const initialMessage = document.querySelector("#initial-message");
    const worksContainer = document.querySelector("#works-container");

    miniMenuLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            // Remover la clase 'active' de todos los enlaces
            miniMenuLinks.forEach(link => {
                link.classList.remove("active");
            });

            // Añadir la clase 'active' solo al enlace seleccionado
            this.classList.add("active");

            const targetPage = this.getAttribute("href");

            fetch(targetPage)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`No se pudo cargar ${targetPage}`);
                    }
                    return response.text();
                })
                .then(html => {
                    worksContainer.innerHTML = html;
                })
                .catch(error => {
                    console.error("Error al cargar el contenido:", error);
                });
        });
    });
});
