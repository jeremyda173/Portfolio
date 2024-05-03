console.log("Bienvenidos");


function OptenData() {
    var userName = document.getElementById('name').value;
    var userEmail = document.getElementById('email').value;
    var userMessage = document.getElementById('message').value;

    var userInfo = {
        name: userName,
        email: userEmail,
        message: userMessage
    };

    // Enviar datos al servidor usando Fetch API
    fetch('http://localhost:3000/guardarDatos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        alert('Datos enviados correctamente al servidor.');
    })
    .catch(error => {
        console.error('Error al enviar datos al servidor:', error);
        alert('Error al enviar datos al servidor.');
    });
}
