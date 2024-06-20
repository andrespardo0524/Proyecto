function authenticate() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    // Credenciales fijas para fines demostrativos (no usar en producción)
    const validUsername = "Mamasita";
    const validPassword = "090124";

    if (username === validUsername && password === validPassword) {
        messageElement.textContent = "Autenticación exitosa. Redirigiendo...";
        messageElement.style.color = "green";
        
        // Redirigir a otra página después de 2 segundos
        setTimeout(() => {
            window.location.href = "pagina.html";
        }, 1000);
    } else {
        messageElement.textContent = "Nombre de usuario o contraseña incorrectos.";
        messageElement.style.color = "red";
    }
}