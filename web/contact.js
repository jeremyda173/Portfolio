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

    // Envío del formulario (simulado con alerta)
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar el envío predeterminado del formulario

        // Simular el envío del formulario (puedes agregar tu lógica de envío aquí)
        alert('Formulario enviado correctamente!');
        form.reset(); // Reiniciar el formulario después del envío
        validateForm(); // Volver a validar el formulario después del reinicio
    });
});

console.log("Bienvenidos");
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const formData = {
        name: name,
        email: email,
        message: message
    };

    fetch('http://localhost:3000/submit_form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            alert('Mensaje enviado correctamente');
            // Aquí puedes redirigir a una página de éxito o realizar otras acciones
        } else {
            throw new Error('Error al enviar el mensaje');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al enviar el mensaje');
    });
}

