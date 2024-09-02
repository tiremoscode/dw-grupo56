function presioname() {
    console.log("Me presionaste");
}

function ocultarCuento() {
    var ocultarCuento = document.getElementById("cuento");
    var mostrarBoton = document.getElementById("boton");
    ocultarCuento.style.display = "none";
    mostrarBoton.style.display = "block";
}

function mostrarCuento() {
    var mostrarCuento = document.getElementById("cuento");
    var ocultarBoton = document.getElementById("boton");
    mostrarCuento.style.display = "block";
    ocultarBoton.style.display = "none";
}