const { normalize } = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//Preguntar al usuario si quiere obtener rfc

rl.question ('¿Quieres obtener tu rfc?'), (respuesta)=> {
if (respuesta = si) {
    console.log ('De acuerdo');
}
else  {
    console.log ('Vuelve pronto')
}
};

rl.question ('¿Cuál es tu nombre?'), (nombre) => {
    nombre = nombre.substring(0,1)

    rl.question ('¿Cuál es tu apellido materno?'), (amaterno)=> {
        amaterno = amaterno.substring (0,1)

        rl.question ('¿Cuál es tu apellido paterno'), (apaterno)=> {
            apaterno = apaterno.substring (0,2)

            rl.question ('Cuál es tu fecha de nacimiento? (DD/MM/AA)'), (nacimiento)=> {
            rl.close ();

            let rfc = ((apaterno.toUpperCase())+ (amaterno.toUpperCase()+ (nombre.toUpperCase())+ (nacimiento.substring(6,8)+ (nacimiento.substring(3,5))+ (nacimiento(0,2)+ XXX); )
    
            console.log('Tu RFC es:'+ rfc)
            }

        } 
    } 
}
// var generarRfc = true;
// if (respuesta == si){
// rl.question ('¿Cual es tu nombre?'),(nombre) =




// Pedir datos de RFC