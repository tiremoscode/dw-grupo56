const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let jabones = ['Avena y Miel', 'Aloe Vera', 'Arroz', 'Carbon Activado', 'Geranio', 'Tepezcohuite', 'Rosas'];

function mostrarJabones() {
    console.log('Tipos de jabones disponibles:');
    jabones.forEach((jabon, index) => {
        console.log(`${index + 1}. ${jabon}`); //+1 quiere decir que comenzara en 1 en lugar de 0//
    });
}

function agregarJabon() {
    rl.question("Ingresa el nombre del nuevo jabón: ", (jabon) => {
            jabones.push(jabon);
            console.log(`Jabón agregado: ${jabon}`);
            menuPrincipal();
    });
}

function modificarJabon() {
    mostrarJabones();
    rl.question("Ingresa el número del jabón que quieres modificar: ", (numero) => {
        const indice = parseInt(numero) - 1;
        if (indice >= 0 && indice < jabones.length) {
            rl.question("Ingresa el nuevo nombre para este jabón: ", (nuevoJabon) => {
                jabones[indice] = nuevoJabon;
                console.log(`Jabón modificado: ${nuevoJabon}`);
                menuPrincipal();
            });
        } else {
            console.log("Índice no válido");
            menuPrincipal();
        }
    });
}

function eliminarJabon() {
    mostrarJabones();
    rl.question("Ingresa el número del jabón que deseas eliminar: ", (numero) => {
        const indice = parseInt(numero) - 1;
        if (indice >= 0 && indice < jabones.length) {
            const jabonEliminado = jabones.splice (indice, 1);
            console.log(`Jabón eliminado: ${jabonEliminado[0]}`);
        } else {
            console.log("Índice no válido");     
        }
        menuPrincipal();
    });
}

function menuPrincipal() {
        console.log("Menú de Opciones:");
        console.log("1. Mostrar tipos de jabones");
        console.log("2. Agregar un nuevo jabón");
        console.log("3. Modificar un jabón");
        console.log("4. Eliminar un jabón");
        console.log("5. Salir");
        
    rl.question("Elige una opción (1-5): ", (opcion) => {
        switch (opcion) {
            case "1":
                mostrarJabones();
                menuPrincipal();
                break;
            case "2":
                agregarJabon();
                break;
            case "3":
                modificarJabon();
                break;
            case "4":
                eliminarJabon();
                break;
            case "5":
                console.log("Gracias por usar nuestra aplicación.");
                rl.close();
                break;
            default:
                console.log("Opción no válida. Intenta nuevamente.");
                menuPrincipal();
                break; 
        }
    });
}
menuPrincipal();