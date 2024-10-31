const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cuál es tu nombre?', (name) => {
    name = name.substring(0, 1)
    rl.question('¿Cuál es tu apellido paterno?', (apellidoPaterno) => {
        apellidoPaterno = apellidoPaterno.substring(0,2)
        rl.question('¿Cuál es tu apellido materno?', (apellidoMaterno) => {
            apellidoMaterno = apellidoMaterno.substring(0, 1)
           rl.question('¿Cuál es tu Día de Nacimiento (2 dígitos)? ', (diaNac) => { 
                
                rl.question('¿Cuál es tu Mes de Nacimiento (2 dígitos)? ', (mesNac) => {
                   
                    
                    rl.question('¿Cuál es tu Año de Nacimiento (2 dígitos)? ', (anioNac) => {

                        let mirfc = apellidoPaterno +apellidoMaterno + name +diaNac+mesNac+anioNac+ "xxx"
                        console.log(mirfc.toUpperCase())
                        


                   



                         rl.close();

              

                
 
                    });
                });
  
            });

        });
   });

    

    
});



