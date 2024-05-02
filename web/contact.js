document.addEventListener('DOMContentLoaded', function () {
    // Mostrar elementos del formulario con animaciones al cargar
    const formGroups = document.querySelectorAll('.form-group');
    const submitButton = document.querySelector('button[type="submit"]');

    setTimeout(function () {
        formGroups.forEach(function (group) {
            group.classList.add('visible');
        });
        submitButton.classList.add('visible');
    }, 200); // Retardo para dar tiempo a las transiciones
});
