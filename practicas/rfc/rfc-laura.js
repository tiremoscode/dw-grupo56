const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para solicitar los datos y generar el RFC
const solicitarDatos = () => {
    rl.question('Nombre(s): ', (nombre) => {
        rl.question('Apellido Paterno: ', (apellidoPaterno) => {
            rl.question('Apellido Materno: ', (apellidoMaterno) => {
                rl.question('Día de Nacimiento (2 dígitos): ', (dia) => {
                    rl.question('Mes de Nacimiento (2 dígitos): ', (mes) => {
                        rl.question('Año de Nacimiento (2 dígitos): ', (anio) => {
                            const rfc = generarRFC(nombre, apellidoPaterno, apellidoMaterno, dia, mes, anio);
                            console.log(`RFC generado: ${rfc}`);
                            rl.close();
                        });
                    });
                });
            });
        });
    });
};

// Función para generar el RFC
const generarRFC = (nombre, apellidoPaterno, apellidoMaterno, dia, mes, anio) => {// Obtiene las primeras dos letras del apellido paterno
    let letrasPaterno = apellidoPaterno.substring(0, 2);
    if (!/[aeiou]/i.test(letrasPaterno[1])) { // Si la segunda letra no es vocal
        letrasPaterno = apellidoPaterno[0] + apellidoPaterno.slice(1).match(/[aeiou]/i);
}
const letraMaterno = apellidoMaterno[0];
const letraNombre = nombre[0];

// Concatenación para formar el RFC
const rfc = `${letrasPaterno}${letraMaterno}${letraNombre}${anio}${mes}${dia}XXX`.toUpperCase();
return rfc;
};

solicitarDatos();
