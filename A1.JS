document.addEventListener("DOMContentLoaded", function() {
    const sobre = document.getElementById("sobre");
    const carta = document.getElementById("carta");

    sobre.addEventListener("click", function() {
        sobre.style.display = "none";  // Oculta el sobre
        carta.style.display = "block";  // Muestra la carta
    });
});
