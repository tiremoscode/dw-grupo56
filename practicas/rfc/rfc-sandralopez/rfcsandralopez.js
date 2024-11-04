
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generarRfc(apellidoPaterno, apellidoMaterno, nombre, fechaDeNacimiento) {
    const dosLetrasPaterno = apellidoPaterno.charAt(0).toUpperCase();
    const primerLetraMaterno = apellidoMaterno.charAt(0).toUpperCase();
    const primerLetraNombre = nombre.charAt(0).toUpperCase(); 

    let vocal = '';
    for (let i = 1; i < apellidoPaterno.length; i++) {
        if ('AEIOUaeiou'.includes(apellidoPaterno.charAt(i))) { 
            vocal = apellidoPaterno.charAt(i).toUpperCase();
            break;
        }
    }

    const fechas = fechaDeNacimiento.split('-');

    if (fechas.length === 3) {
        const año = fechas[0].slice(-2); 
        const mes = fechas[1]; 
        const dia = fechas[2]; 

   
        return `${dosLetrasPaterno}${vocal}${primerLetraMaterno}${primerLetraNombre}${año}${mes}${dia}XXX`;
    } else {
        console.log('Formato de fecha incorrecto. Asegúrate de usar el formato YYYY-MM-DD.');
        return null;
    }
}

rl.question('¿Quieres generar tu RFC? (si/no) ', (elección) => {
    if (elección.toLowerCase() === 'si') {
        rl.question('Introduzca Apellido Paterno: ', (apellidoPaterno) => {
            rl.question('Introduzca Apellido Materno: ', (apellidoMaterno) => {
                rl.question('Introduzca su Nombre (solo el primer nombre):  ', (nombre) => { 
                    rl.question('Introduzca su Fecha de Nacimiento en formato (AAAA-MM-DD): ', (fechaDeNacimiento) => {
                        const rfc = generarRfc(apellidoPaterno, apellidoMaterno, nombre, fechaDeNacimiento);
                        if (rfc) {
                            console.log(`Tu RFC es: ${rfc}`);
                        }
                        rl.close();
                    });
                });
            });
        });
    } else {
        console.log('Cancelado');
        rl.close();
    }
});