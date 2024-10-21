const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cuál es tu nombre? ', (name) => {
    console.log('Hola ' + name.toUpperCase());

    // Añadir un nuevo valor para la edad.
    rl.question('¿Cual es tu apellido paterno? ', (apellidoPaterno) => {
      
        rl.question('¿Cual es tu apellido materno? ', (apellidoMaterno) => {
         
            rl.question('¿Cuál es tu fecha de nacimiento? (con formato DD/MM/YY) ', (fechaDeNacimiento) => {
               
                rl.close();

                let rfc = ((apellidoPaterno.toUpperCase()).substring(0,2) + (apellidoMaterno.toUpperCase()).substring(0,1) + (name.toUpperCase()).substring(0,1) + fechaDeNacimiento.substring(6,8) + fechaDeNacimiento.substring(3,5) + fechaDeNacimiento.substring(0,2) + 'XXX');
                console.log('Tu RFC es: ' + rfc);
            });
        });
    });
    
});

function generarResultado(mensaje) {
    console.log(`Obtendras INE: ${mensaje}`);
}

