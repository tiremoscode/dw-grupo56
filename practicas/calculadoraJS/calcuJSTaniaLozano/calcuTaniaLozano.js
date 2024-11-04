function sumar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);
    // console.log('Valor 1 ' + valor1);
    // console.log('valor 2 ' + valor2);
    const suma = valor1 + valor2;
    // console.log(suma);
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${suma}`;
}

function restar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);
    const resta = valor1 - valor2;
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${resta}`;
}

function multiplicar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);
    const multiplicacion = valor1 * valor2;
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${multiplicacion}`;
}

function dividir() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);
    if (valor2 === 0) {
        alert("No se puede dividir entre 0");
        return;
    }
    const division = valor1 / valor2;
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${division}`;
}