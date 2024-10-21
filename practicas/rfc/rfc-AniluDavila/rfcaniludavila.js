const readline = require('readline');

function holaMundo() {
    console.log('Hola Grupo 56 desde consola');
}
holaMundo();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para generar el RFC
function generarRFC(nombre, apellidoPaterno, apellidoMaterno, dia, mes, anio) {
    const primerasLetras = apellidoPaterno.slice(0, 2).toUpperCase() +
                           apellidoMaterno.charAt(0).toUpperCase() +
                           nombre.charAt(0).toUpperCase();
    const fechaNacimiento = anio + mes + dia;
    const rfc = primerasLetras + fechaNacimiento + 'XXX';
    return rfc;
}

// Preguntar los datos al usuario
rl.question('Nombre(s): ', (nombre) => {
    rl.question('Apellido Paterno: ', (apellidoPaterno) => {
        rl.question('Apellido Materno: ', (apellidoMaterno) => {
            rl.question('Día de Nacimiento (2 dígitos): ', (dia) => {
                rl.question('Mes de Nacimiento (2 dígitos): ', (mes) => {
                    rl.question('Año de Nacimiento (ultimos 2 dígitos): ', (anio) => {  
                    
                        const rfc = generarRFC(nombre, apellidoPaterno, apellidoMaterno, dia.padStart(2, '0'), mes.padStart(2, '0'), anio);
                         
                        console.log('El RFC generado es: ' + rfc);

                        rl.close();
                    });
                });
            });
        });
    });
});