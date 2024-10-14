
function sumar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    console.log('Valor 1 ' + valor1);
    console.log('valor 2 ' + valor2);

    const suma = valor1 + valor2;
    console.log(suma);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${suma}`;
}

function restar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    const resta = valor1 - valor2;
    console.log(resta);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${resta}`;
}

function multiplicar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    const multiplicar = valor1 * valor2;
    console.log(multiplicar);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${multiplicar}`;
}

function dividir() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    const dividir = valor1 / valor2;
    console.log(dividir);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${dividir}`;
}
