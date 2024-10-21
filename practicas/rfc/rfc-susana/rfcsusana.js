const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Nombre', (name) => {
    name = name.substring(0, 1)
    rl.question('Apellido paterno', (paterno) => {
        paterno = paterno.substring(0, 2)
        rl.question('Apellid materno', (materno) => {
            materno = materno.substring(0, 1)
            rl.question('Día de nacimiento', (día) => {
                rl.question('Mes de nacimiento', (mes) => {
                    rl.question('Año de nacimiento', (año) => {
                        console.log( name +paterno + materno + día + mes + año + "xxx")
                    })
                })

            })
            
        })

    })
});


// string "" "a" "aaldfjsdkljsdakljdasklfjsd  klsdfklsjfñsjlsdkfj 234kj2324kljsdlfkjsalfkj"
// boolean true or false
// number 1 12 234 0

// 1 - 1 = 0
// "Gendy" + "SUsi" = "Gendy susi"
// "Gendy" = "Gendy".substring(0, 1) = "G"

