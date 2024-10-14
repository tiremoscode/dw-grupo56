function sumar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    const suma = valor1 + valor2;
    mostrarResultado(suma);
}

function restar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    const resta = valor1 - valor2;
    mostrarResultado(resta);
}

function multiplicar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    const producto = valor1 * valor2;
    mostrarResultado(producto);
}

function dividir() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    // Verificar si valor2 es 0 para evitar división por cero
    if (valor2 === 0) {
        mostrarResultado('Error: División por cero');
        return;
    }

    const cociente = valor1 / valor2;
    mostrarResultado(cociente);
}

function mostrarResultado(resultado) {
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `Resultado: ${resultado}`;
}