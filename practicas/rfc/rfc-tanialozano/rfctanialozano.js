const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para generar el RFC
function generarRFC(nombre, apellidoPaterno, apellidoMaterno, diaNacimiento, mesNacimiento, anioNacimiento) {
    // Tomamos las primeras 2 letras del Apellido Paterno
    const primerasLetrasApellidoPaterno = apellidoPaterno.substring(0, 2).toUpperCase();

    // Tomamos la primera letra del Apellido Materno
    const primeraLetraApellidoMaterno = apellidoMaterno.substring(0, 1).toUpperCase();

    // Tomamos la primera letra del Nombre
    const primeraLetraNombre = nombre.substring(0, 1).toUpperCase();

    // Formamos el RFC concatenando los valores obtenidos
    const rfc = `${primerasLetrasApellidoPaterno}${primeraLetraApellidoMaterno}${primeraLetraNombre}${anioNacimiento}${mesNacimiento}${diaNacimiento}XXX`;

    return rfc;
}

// Solicitar los datos del usuario
rl.question('¿Cuál es tu Nombre(s)? ', (nombre) => {
    rl.question('¿Cuál es tu Apellido Paterno? ', (apellidoPaterno) => {
        rl.question('¿Cuál es tu Apellido Materno? ', (apellidoMaterno) => {
            rl.question('¿Cuál es tu Día de Nacimiento (2 dígitos)? ', (diaNacimiento) => {
                rl.question('¿Cuál es tu Mes de Nacimiento (2 dígitos)? ', (mesNacimiento) => {
                    rl.question('¿Cuál es tu Año de Nacimiento (2 dígitos)? ', (anioNacimiento) => {
                        // Generamos el RFC
                        const rfc = generarRFC(nombre, apellidoPaterno, apellidoMaterno, diaNacimiento, mesNacimiento, anioNacimiento);
                        
                        // Mostramos el RFC al usuario
                        console.log(`Tu RFC generado es: ${rfc}`);
                        
                        // Cerramos la interfaz
                        rl.close();
                    });
                });
            });
        });
    });
});
