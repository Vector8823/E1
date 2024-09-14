window.onload = function() {
    // Obtiene referencias a los elementos HTML
    const siLibreBtn = document.getElementById("siLibre");
    const noLibreBtn = document.getElementById("noLibre");
    const popup = document.getElementById("popup");
    const contenido = document.getElementById("contenido");
    const bloqueadoMensaje = document.getElementById("bloqueadoMensaje");
    const verificarContraseñaBtn = document.getElementById("verificarContraseña");
    const inputContraseña = document.getElementById("contraseña");

    // Verifica si la página está bloqueada al cargar
    if (localStorage.getItem("bloqueado") === "true") {
        mostrarBloqueo();  // Muestra la pantalla de bloqueo si la página está bloqueada
    } else {
        popup.style.display = "flex";  // Muestra el popup inicial si la página no está bloqueada
        contenido.style.display = "none";  // Asegura que el contenido esté oculto al inicio
    }

    // Evento para el botón de "Sí, estaré libre"
    siLibreBtn.addEventListener("click", function() {
        localStorage.setItem("bloqueado", "false");  // Elimina el estado de bloqueo
        window.location.href = "A1.HTML";  // Redirige a la página deseada
    });

    // Evento para el botón de "No"
    noLibreBtn.addEventListener("click", function() {
        alert("Bueno, que Dios la bendiga");  // Muestra un mensaje de despedida
        localStorage.setItem("bloqueado", "true");  // Establece el bloqueo en el almacenamiento local
        mostrarBloqueo();  // Muestra la pantalla de bloqueo
    });

    // Función para mostrar la pantalla de bloqueo
    function mostrarBloqueo() {
        popup.style.display = "none";  // Oculta el popup inicial
        bloqueadoMensaje.style.display = "flex";  // Muestra el mensaje de bloqueo
    }

    // Evento para verificar la contraseña
    verificarContraseñaBtn.addEventListener("click", function() {
        const contraseñaIngresada = inputContraseña.value;  // Obtiene el valor de la contraseña ingresada

        if (contraseñaIngresada === "A1234") {
            localStorage.setItem("bloqueado", "false");  // Desbloquea la página si la contraseña es correcta
            bloqueadoMensaje.style.display = "none";  // Oculta el mensaje de bloqueo
            popup.style.display = "flex";  // Muestra el popup inicial nuevamente
            alert("Acceso concedido");  // Muestra un mensaje de éxito
        } else {
            alert("Contraseña incorrecta");  // Muestra un mensaje de error si la contraseña es incorrecta
        }
    });
};
