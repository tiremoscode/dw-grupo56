
const readline = require('readline');
function holaMundo() {
    console.log('Hola mundo');
}

holaMundo();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Apellido paterno', (paterno) => {
    paterno = paterno.substring(0, 2)
    rl.question('Apellido materno ', (materno) => {
         materno = materno.substring(0, 1)
        rl.question('Nombre', (name) => {
            name = name.substring(0, 1)
            rl.question('Día de nacimiento', (día) => {
                rl.question('Mes de nacimiento', (mes) => {
                    rl.question('Año de nacimiento', (año) => {
                        console.log( paterno + materno + name + día + mes + año + "XXX")
                    })
                })

            })
            
        })

    })
});


