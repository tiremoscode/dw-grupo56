let hola = 'Hola mundo';
let numero1 = 3;
let numero2 = 5;
let pi = 3.1416;
let suma = numero1 + numero2;

function verificar() {
    const edad = document.getElementById('edad').value;

    if (edad >= 18) {
        generarResultado('Si');
    } else {
        generarResultado('No');
    }
};

function generarResultado(mensaje) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Obtendras INE: ${mensaje}`;
}