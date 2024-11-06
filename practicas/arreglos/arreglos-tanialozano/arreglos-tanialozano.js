const { log } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const cantantesFavoritos = ['Caloncho', 'Silvana Estrada', 'Shakira', 'Harry Styles', 'Fleetwood Mac', 'Camilo', 'Daniel, Me estás Matando', 'Billie Eilish', 'Leonel García', 'Lana del Rey', 'The Beatles', 'Rosalía'];

function mostrarOpciones() {
    console.log('Elige una opción:');
    console.log('1. Agregar un cantante');
    console.log('2. Eliminar un cantante');
    console.log('3. Actualizar un cantante');
    console.log('4. Mostrar la lista actual de cantantes');
    console.log('5. Salir');

    rl.question('Escribe el número de la opción que deseas: ', (opcion) => {
        if (opcion == 1) {
            rl.question('Escribe el nombre del cantante a agregar: ', (nuevoCantante) => {
                cantantesFavoritos.push(nuevoCantante);
                log("Cantante agregado. Lista actualizada:", cantantesFavoritos);
                mostrarOpciones();
            });

        } else if (opcion == 2) {
            cantantesFavoritos.forEach((cantante, i) => {
                log(i + '.- ' + cantante);
            });
            rl.question('Escribe el número del cantante que quieres eliminar: ', (posicion) => {
                cantantesFavoritos.splice(posicion, 1);
                log("Cantante eliminado. Lista actualizada:", cantantesFavoritos);
                mostrarOpciones();
            });

        } else if (opcion == 3) {
            cantantesFavoritos.forEach((cantante, i) => {
                log(i + '.- ' + cantante);
            });
            rl.question('Escribe el número del cantante que quieres actualizar: ', (posicion) => {
                rl.question('Escribe el nuevo nombre del cantante: ', (nuevoNombre) => {
                    cantantesFavoritos[posicion] = nuevoNombre;
                    log("Cantante actualizado. Lista actualizada:", cantantesFavoritos);
                    mostrarOpciones();
                });
            });

        } else if (opcion == 4) {
            cantantesFavoritos.forEach((cantante, i) => {
                log(i + '.- ' + cantante);
            });
            mostrarOpciones();

        } else if (opcion == 5) {
            log('¡Hasta luego!');
            rl.close();

        } else {
            log('Opción no válida');
            mostrarOpciones();
        }
    });
}

mostrarOpciones();