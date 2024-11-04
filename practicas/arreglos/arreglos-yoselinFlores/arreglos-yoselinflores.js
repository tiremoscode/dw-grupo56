const { log } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const personajesGreysAnatomy = new Array('Meredith Grey', 'Derek Shepherd', 'Miranda Bailey', 'Cristina Yang', 'Izzie Stevens', 'George OMalley', 'Alex Karev', 'Preston Burke', 'Richard Webber', 'Thacher Grey', 'Ellis Grey', 'Lexie Grey', 'Callie Torre', 'Arizona Robbins', 'Addison Montgomery', 'Denny Duquette');
let op = 5;

console.log('Elige una opción');
console.log('Escribe 1 para ver la lista de personajes');
console.log('Escribe 2 para agregar un personaje');
console.log('Escribe 3 para editar un personaje');
console.log('Escribe 4 para eliminar un personaje');
console.log('Escribe 5 para salir');

rl.question('Escribe tu opción ', (opcion) => {


    if (opcion == 1) {
        console.log(personajesGreysAnatomy);
    }
    else if (opcion == 2) {
        rl.question('Escribe el nombre del personaje: ', (nuevoPersonaje) => {
            rl.close();
            personajesGreysAnatomy.push(nuevoPersonaje);
            console.log(personajesGreysAnatomy);
        })
    }
    else if (opcion == 3) {
        personajesGreysAnatomy.forEach((personaje, i) => {
            console.log(i + '.- ' + personaje);
        });
        rl.question('Escribe el número del personaje que quieres editar', (posicion) => {
            rl.question('Escribe el nuevo nombre', (nuevoNombre) => {
                rl.close();
                personajesGreysAnatomy[posicion] = nuevoNombre;
                console.log(personajesGreysAnatomy);
            });

        });


    }
    else if (opcion == 4) {
        personajesGreysAnatomy.forEach((personaje, i) => {
            console.log(i + '.- ' + personaje);
        });
        rl.question('Escribe el número del personaje que quieres eliminar', (posicion) => {
            rl.close();
            personajesGreysAnatomy.splice(posicion, 1);
            console.log(personajesGreysAnatomy);
        })
    }

    else if (opcion == 5) {
        console.log('¡Hasta luego!');
    }

    else {
        console.log('Opción no valida');
    }

})


