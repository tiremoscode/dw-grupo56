const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generadorRFC(nombre, apellidoP, apellidoM, day, month, year) {
    const primerasLetras = apellidoP.slice(0, 2).toUpperCase() +
        apellidoM.charAt(0).toUpperCase() +
        nombre.charAt(0).toUpperCase();

    const fechaNaci = year + month + day;

    const rfc = primerasLetras + fechaNaci + 'XXX';

    return rfc;
}

// Preguntar datos
rl.question('Nombre(s): ', (nombre) => {
    rl.question('Apellido Paterno: ', (apellidoP) => {
        rl.question('Apellido Materno: ', (apellidoM) => {
            rl.question('Día de Nacimiento (dd): ', (day) => {
                rl.question('Mes de Nacimiento (mm): ', (month) => {
                    rl.question('Año de Nacimiento (últimos dos dígitos): ', (year) => {
                        // Validar que el año tiene dos dígitos
                        if (year.length !== 2) {
                            console.log('Error: Debes ingresar únicamente los últimos dos dígitos del año.');
                            rl.question('Año de Nacimiento (últimos dos dígitos): ', (year) => {
                                const rfc = generadorRFC(nombre, apellidoP, apellidoM, day, month, year);
                                console.log(`Tu RFC es: ${rfc}`);
                                rl.close();
                            });
                        } else {
                            const rfc = generadorRFC(nombre, apellidoP, apellidoM, day, month, year);
                            console.log(`Tu RFC es: ${rfc}`);
                            rl.close();
                        }
                    });
                });
            });
        });
    });
});