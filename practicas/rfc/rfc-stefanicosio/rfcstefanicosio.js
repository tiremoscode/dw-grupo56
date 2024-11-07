const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cuál es tu primer nombre? ', (nombre) => {
    rl.question('¿Cuál es tu apellido paterno? ', (paterno) => {
        rl.question('¿Cuál es tu apellido materno? ', (materno) => {
            rl.question('Escribe tu fecha de nacimiento en este formato: DD/MM/YY ', (fechaNacimiento) => {
                
                const RFC = (paterno.substring(0, 2) + 
                             materno.substring(0, 1) + 
                             nombre.substring(0, 1) + 
                             fechaNacimiento.substring(6, 8) + 
                             fechaNacimiento.substring(3, 5) + 
                             fechaNacimiento.substring(0, 2) + 'XXX').toUpperCase();
                
                console.log(`Tu RFC es ${RFC}`);
                
                rl.close();
            });
        });
    });
});



