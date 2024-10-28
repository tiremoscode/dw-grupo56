const readline = require('readline');
function holaMundo() {
    console.log('Hola Grupo 56 desde consola');
}

holaMundo();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cuál es tu nombre?: ', (nombre) => {
    console.log('Hola ' + nombre);
    nombre = nombre.substring(0, 1).toUpperCase();
    console.log('Contesta las siguientes preguntas:');
    rl.question('¿Cuál es su apellido paterno?: ', (paterno) => {
        paterno = paterno.substring(0, 2).toUpperCase();
        rl.question('¿Cuál es su apellido materno?: ', (materno) => {
            materno = materno.substring(0,1).toUpperCase();
            rl.question('Ingresa tu día de nacimiento (2 dígitos): ', (dia) => {
                rl.question('Ingresa tu mes de nacimiento (2 dígitos): ', (mes) => {
                    rl.question('Ingrese tu año de nacimiento (2 dígitos): ', (anio) => {
                        const rfc = `${paterno}${materno}${nombre}${dia}${mes}${anio}XXXX`; //cuando quiero agregar x valor va sin {}
                        console.log('Tu RFC es: ' + rfc);
                        rl.close(); // Cierra la interfaz una vez completado
                    });
                });
            });
        });
    });
});

