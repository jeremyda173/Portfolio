// login-firebase.js

function loginUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Accede a Firebase Authentication
    const auth = firebase.auth();

    // Inicia sesión con email y contraseña
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Autenticación exitosa
            const user = userCredential.user;
            console.log('Usuario autenticado:', user);
            // Redirecciona o muestra mensaje de éxito
        })
        .catch((error) => {
            // Maneja errores de inicio de sesión
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error de autenticación:', errorMessage);
            // Muestra mensaje de error al usuario
        });
}
