const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let libros = [];

// Función para mostrar los libros
function mostrarLibros() {
    if (libros.length === 0) {
        console.log("No hay libros registrados.");
    } else {
        console.log("Libros leídos:");
        libros.forEach((libro, index) => {
            console.log(`${index + 1}: ${libro}`);
        });
    }
}

// Función para agregar un libro
function agregarLibro() {
    rl.question('Ingresa el nombre del libro: ', (libro) => {
        libros.push(libro);
        console.log(`Libro agregado: ${libro}`);
        mostrarMenu();
    });
}

// Función para eliminar un libro
function eliminarLibro() {
    mostrarLibros();
    rl.question('Ingresa el número del libro a eliminar: ', (numero) => {
        const index = parseInt(numero) - 1;
        if (index >= 0 && index < libros.length) {
            const libroEliminado = libros.splice(index, 1);
            console.log(`Libro eliminado: ${libroEliminado}`);
        } else {
            console.log("Número inválido.");
        }
        mostrarMenu();
    });
}

// Función para actualizar un libro
function actualizarLibro() {
    mostrarLibros();
    rl.question('Ingresa el número del libro a actualizar: ', (numero) => {
        const index = parseInt(numero) - 1;
        if (index >= 0 && index < libros.length) {
            rl.question('Ingresa el nuevo nombre del libro: ', (nuevoNombre) => {
                libros[index] = nuevoNombre;
                console.log(`Libro actualizado a: ${nuevoNombre}`);
                mostrarMenu();
            });
        } else {
            console.log("Número inválido.");
            mostrarMenu();
        }
    });
}

// Función para mostrar el menú de opciones
function mostrarMenu() {
    console.log("\nElige una acción:");
    console.log("1. Agregar libro");
    console.log("2. Eliminar libro");
    console.log("3. Actualizar libro");
    console.log("4. Mostrar libros");
    console.log("5. Salir");

    rl.question('Opción: ', (opcion) => {
        switch (opcion) {
            case '1':
                agregarLibro();
                break;
            case '2':
                eliminarLibro();
                break;
            case '3':
                actualizarLibro();
                break;
            case '4':
                mostrarLibros();
                mostrarMenu();
                break;
            case '5':
                console.log('Saliendo de la aplicación...');
                rl.close();
                break;
            default:
                console.log("Opción no válida. Inténtalo de nuevo.");
                mostrarMenu();
                break;
        }
    });
}

mostrarMenu();