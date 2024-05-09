// Función para iniciar sesión con Google
function loginWithGoogle() {
    // Configuración del cliente OAuth de Google
    const clientId = 'TU_ID_DE_CLIENTE_DE_GOOGLE';
    const redirectUri = 'URL_DE_REDIRECCION_DE_AUTH';

    // URL de autorización de Google
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=email profile`;

    // Redirigir al usuario a la página de autorización de Google
    window.location.href = authUrl;
}
