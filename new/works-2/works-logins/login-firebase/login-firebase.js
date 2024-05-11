const loginContainer = document.getElementById('loginContainer');

// Agregar evento de enfoque a los campos de entrada para detener la rotación
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        loginContainer.style.transform = 'rotateY(0deg) rotateX(0deg)'; // Detener rotación
    });
    input.addEventListener('blur', () => {
        loginContainer.style.transform = 'rotateY(25deg) rotateX(-15deg)'; // Reiniciar rotación
    });
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf6PHB7SUtco1_oCf70YWVyOv-xWtFQP4",
  authDomain: "login-prueba-d85d4.firebaseapp.com",
  projectId: "login-prueba-d85d4",
  storageBucket: "login-prueba-d85d4.appspot.com",
  messagingSenderId: "213464314843",
  appId: "1:213464314843:web:7eebafd539a10051f6edfe",
  measurementId: "G-JEETMHSHX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

    // Función para iniciar sesión con Firebase Auth
    function loginUser() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Autenticar al usuario con Firebase
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Usuario autenticado con éxito
                const user = userCredential.user;
                console.log('Usuario autenticado:', user);
                // Redirigir a otra página después del inicio de sesión si es necesario
            })
            .catch((error) => {
                // Manejar errores de autenticación
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Error al iniciar sesión:', errorMessage);
                // Mostrar un mensaje de error al usuario si es necesario
                alert(errorMessage);
            });
    }