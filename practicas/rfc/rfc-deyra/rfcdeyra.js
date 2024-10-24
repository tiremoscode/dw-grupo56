const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Nombre(s): ', (name) => {
    name = name.substring (0,1);
    rl.question('Apellido paterno', (apellidop) => {
        apellidop = apellidop.substring(0,2);
        rl.question('Apellido materno', (apellidom) => {
            apellidom = apellidom.substring(0,1);
            rl.question('Día de nacimiento', (dia) => {
                dia =dia.padStart(2,'0')
                rl.question('Mes de nacimiento (solo dígitos)',(mes) => {
                    mes =mes.padStart(2,'0')
                    rl.question('Año de nacimiento', (año) => {
                        año =año.padStart(4,'0')

console.log(apellidop + apellidom + name + año + mes + dia + 'xxx');
rl.close()
        
                    });
                });
            });
        });
    });
});

