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
    const valor1 = parseInt(document.getElementById('numero3').value);
    const valor2 = parseInt(document.getElementById('numero4').value);

    console.log('Valor 1 ' + valor1);
    console.log('valor 2 ' + valor2);

    const resta = valor1 - valor2;
    console.log(resta);

    const resultadoresta = document.getElementById('resultadoresta');
    resultadoresta.innerHTML = `Resultado: ${resta}`;

}

function multiplicar() {
    const valor1 = parseInt(document.getElementById('numero5').value);
    const valor2 = parseInt(document.getElementById('numero6').value);

    console.log('Valor 1 ' + valor1);
    console.log('valor 2 ' + valor2);

    const multiplicacion = valor1 * valor2;
    console.log(multiplicacion);

    const resultadomutiplicacion = document.getElementById('resultadomultiplicacion');
    resultadomutiplicacion.innerHTML = `Resultado: ${multiplicacion}`;

}

function restar() {
    const valor1 = parseInt(document.getElementById('numero3').value);
    const valor2 = parseInt(document.getElementById('numero4').value);

    console.log('Valor 1 ' + valor1);
    console.log('valor 2 ' + valor2);

    const resta = valor1 - valor2;
    console.log(resta);

    const resultadoresta = document.getElementById('resultadoresta');
    resultadoresta.innerHTML = `Resultado: ${resta}`;

}

function dividir() {
    const valor1 = parseInt(document.getElementById('numero7').value);
    const valor2 = parseInt(document.getElementById('numero8').value);

    console.log('Valor 1 ' + valor1);
    console.log('valor 2 ' + valor2);

    const division = valor1 / valor2;
    console.log(division);

    const resultadodivision = document.getElementById('resultadodivision');
    resultadodivision.innerHTML = `Resultado: ${division}`;

}