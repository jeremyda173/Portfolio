function loginWithGoogle() {
    const clientId = '589973080117-pvctr2n900v0badf43a3nokmsekfvlnn.apps.googleusercontent.com';
    const redirectUri = 'https://loginconoauth.com';

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=token&scope=email%20profile`;

    window.location.href = authUrl;
}