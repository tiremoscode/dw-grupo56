const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let aPaterno, aMaterno, nombre, fecha;

rl.question('Vamos a obtener tu RFC, introduce tu apellido paterno: ', (paterno) => {
    aPaterno = paterno.slice(0,2).toUpperCase();
    
    rl.question('Introduce tu apellido materno: ', (materno) => {
        aMaterno = materno.slice(0,1).toUpperCase();
        
        rl.question('Introduce tu nombre: ', (name) => {
            nombre = name.slice(0,1).toUpperCase();
            
            rl.question('Introduce tu fecha de nacimiento con el siguiente formato dd/mm/aa: ', (dia) => {
                fecha = dia; // Assume you want to keep the input as is

                rl.close();
                resultados(); // Call the resultados function here
            });
        });
    });
});

function resultados() {
    console.log(`Tu RFC es: ${aPaterno}${aMaterno}${nombre}${fecha}xxx`);
} 


