const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function generarRFC(nombre, apellidoPaterno, apellidoMaterno, diaNacimiento, mesNacimiento, anioNacimiento) {
    
    const primerasLetrasApellidoPaterno = apellidoPaterno.substring(0, 2).toUpperCase();

    const primeraLetraApellidoMaterno = apellidoMaterno.substring(0, 1).toUpperCase();

    const primeraLetraNombre = nombre.substring(0, 1).toUpperCase();
    
    const rfc = `${primerasLetrasApellidoPaterno}${primeraLetraApellidoMaterno}${primeraLetraNombre}${anioNacimiento}${mesNacimiento}${diaNacimiento}XXX`;

    return rfc;
}

rl.question('¿Cuál es tu Nombre(s)? ', (nombre) => {
    rl.question('¿Cuál es tu Apellido Paterno? ', (apellidoPaterno) => {
        rl.question('¿Cuál es tu Apellido Materno? ', (apellidoMaterno) => {
            rl.question('¿Cuál es tu Día de Nacimiento (2 dígitos)? ', (diaNacimiento) => {
                rl.question('¿Cuál es tu Mes de Nacimiento (2 dígitos)? ', (mesNacimiento) => {
                    rl.question('¿Cuál es tu Año de Nacimiento (2 dígitos)? ', (anioNacimiento) => {
                        
                        const rfc = generarRFC(nombre, apellidoPaterno, apellidoMaterno, diaNacimiento, mesNacimiento, anioNacimiento);
                        
                        
                        console.log(`Tu RFC generado es: ${rfc}`);
                        
                       
                        rl.close();
                    });
                });
            });
        });
    });
});
