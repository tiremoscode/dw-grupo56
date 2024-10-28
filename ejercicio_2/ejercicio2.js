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

    console.log('Valor 1 ' + valor1);
    console.log('valor 2 ' + valor2);

    const restar = valor1 - valor2;
    console.log(restar);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${restar}`;

}

function multi() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    console.log('Valor 1 ' + valor1);
    console.log('valor 2 ' + valor2);

    const multi = valor1 * valor2;
    console.log(multi);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${multi}`;

}

function divi() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    console.log('Valor 1 ' + valor1);
    console.log('valor 2 ' + valor2);

    const divi = valor1 / valor2;
    console.log(divi);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${divi}`;

}