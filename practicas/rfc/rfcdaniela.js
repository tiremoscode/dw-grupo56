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

rl.question('Hola, ¿cuál es tu nombre? ', (nombre) => {
    rl.question('¿Cuál es tu apellido paterno? ', (apellidoPaterno) => {
        rl.question('¿Cuál es tu apellido materno? ', (apellidoMaterno) => {
            rl.question('¿Cuál es tu día de nacimiento (2 dígitos)? ', (diaNacimiento) => {
                rl.question('¿Cuál es tu mes de nacimiento (2 dígitos)? ', (mesNacimiento) => {
                    rl.question('¿Cuál es tu año de nacimiento (2 dígitos)? ', (anioNacimiento) => {
                        
                        const rfc = generarRFC(nombre, apellidoPaterno, apellidoMaterno, diaNacimiento, mesNacimiento, anioNacimiento);
                        
                        
                        console.log(`Tu RFC generado es: ${rfc}`);
                        
                       
                        rl.close();
                    });
                });
            });
        });
    });
});
