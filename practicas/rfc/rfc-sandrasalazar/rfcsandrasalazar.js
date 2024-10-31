const readline = require('readline');
function holaMundo() {
    console.log('Hola Grupo 56 desde consola');
}

holaMundo();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('¿Cuál es tu nombre?', (name) => {
    name = name.substring(0, 1)
    rl.question('¿Cuál es tu apellido paterno?', (paterno) => {
        paterno = paterno.substring(0, 2)
        rl.question('¿Cuál es tu apellid materno?', (materno) => {
            materno = materno.substring(0, 1)
            rl.question('¿Cuál es tu día de nacimiento?', (día) => {
                rl.question('¿Cuál es tu mes de nacimiento?', (mes) => {
                    rl.question('¿Cuál es tu anio de nacimiento?', (anio) => {
                        let mirfc = paterno + materno + name + anio + mes + día + "xxx";
                        console.log( mirfc.toUpperCase());
                    })
                })

            })

        })

    })
});