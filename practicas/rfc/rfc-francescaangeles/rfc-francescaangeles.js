const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa tu nombre: ', nombre => {
    rl.question('Ingresa tu apellido paterno: ', apellidoPaterno => {
        rl.question('Ingresa tu apellido materno: ', apellidoMaterno => {
            rl.question('Ingresa tu día de nacimiento a 2 dígitos: ', diaNacimiento => {
                rl.question('Ingresa tu mes de nacimiento a 2 dígitos: ', mesNacimiento => {
                    rl.question('Ingresa tu año de nacimiento a 2 dígitos: ', anioNacimiento => {

                        const rfc = apellidoPaterno.slice(0, 2).toUpperCase() +
                                    apellidoMaterno.charAt(0).toUpperCase() +
                                    nombre.charAt(0).toUpperCase() +
                                    anioNacimiento + mesNacimiento + diaNacimiento + "XXX";

                        console.log(`Tu RFC es: ${rfc}`);

                        rl.close();
                    });
                });
            });
        });
    });
});
