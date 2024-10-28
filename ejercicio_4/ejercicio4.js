const readline = require('readline');

function holaMundo() {
    console.log('Hola Grupo 56 desde consola');
}

holaMundo();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cuál es tu nombre?', (name) => {
    console.log('Hola ' + name);

    // Añadir un nuevo valor para la edad.
    rl.question('¿Cuántos años tienes?', (age) => {
        if (age >= 18) {
            generarResultado('si, otorga ine');
        } else {
            generarResultado('No');
        }
        rl.close();
    });
});

function generarResultado(mensaje) {
    console.log(`Obtendras INE: ${mensaje}`);
}