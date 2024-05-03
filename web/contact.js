document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitButton = document.querySelector('button[type="submit"]');

    // Función para validar el formulario
    function validateForm() {
        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const messageValue = messageInput.value.trim();

        // Verificar si todos los campos requeridos están completos
        if (nameValue !== '' && emailValue !== '' && messageValue !== '') {
            submitButton.disabled = false; // Habilitar el botón de envío
        } else {
            submitButton.disabled = true; // Deshabilitar el botón de envío si faltan campos
        }
    }

    // Escuchar eventos de entrada en los campos del formulario
    nameInput.addEventListener('input', validateForm);
    emailInput.addEventListener('input', validateForm);
    messageInput.addEventListener('input', validateForm);

    // Validar el formulario al cargar la página
    validateForm();

    // Envío del formulario mediante AJAX
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar el envío predeterminado del formulario

        // Obtener datos del formulario
        const formData = new FormData(form);

        // Enviar datos al servidor mediante AJAX
        fetch('submit_form.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            // Mostrar mensaje de éxito o error
            alert(data); // Mostrar la respuesta del servidor en una alerta (puedes cambiar esto)
            form.reset(); // Reiniciar el formulario después del envío
            validateForm(); // Volver a validar el formulario después del reinicio
        })
        .catch(error => {
            console.error('Error al enviar el formulario:', error);
            alert('Ocurrió un error al enviar el formulario. Por favor, inténtelo de nuevo.');
        });
    });
});
