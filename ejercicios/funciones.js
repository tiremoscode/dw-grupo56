// Funciones
// Un conjunto de líneas de código que realizarán una función en especifico.

// Estructura general
// Va acompañado de la palabra reservada function
// Tener un nombre
// Acompañado opcionalmente de parámetros/argumentos que irán dentro de un bloque de parentesís.
// ¿Qué son los parámetros / argumentos que pueden acompañar mi función?
// Tipos de datos que permiten realizar con un solo bloque de código una acción
// y esta poder repetirla multiples ocasiones.

function holaMundo() {
    console.log('hola grupo 56, este es un hola mundo');
}

function holaYoselin() {
    console.log('Hola Yoselin, bienvenida al grupo 56');
}

function holaAnilu() {
    console.log('Hola Anilu, bienvenida al grupo 56');
}

function holaPamela() {
    console.log('Hola Pamela, bienvenida al grupo 56');
}

// Vamos a hacer una función generica, que permita hacer lo mismo
// con un solo código.

function holaAlumna5taCohorte(nombreAlumna, turno) {
    console.log(`Hola ${nombreAlumna}, ${turno} bienvenida a clases!!`);
}

holaAlumna5taCohorte('yoselin', 'buenos días');
holaAlumna5taCohorte('alin', 'buenas tardes');
holaAlumna5taCohorte('pamela', 'buenos días');

function calcular(valor1, valor2, operacion) {
    switch (operacion) {
        case 'suma':
            return valor1 + valor2;
            break;
        case 'resta':
            return valor1 - valor2;
            break;
        case 'multi':
            return valor1 * valor2;
            break;
        case 'division':
            return valor1 / valor2;
            break;
        case 'nuevaoperacion':
            return valor1 * valor2 * valor2 * valor1;
            break;
    }
}

console.log(calcular(5, 5, 'suma'));
console.log(calcular(3, 2, 'resta'));
console.log(calcular(4, 5, 'multi'));
console.log(calcular(9, 3, 'division'));
console.log(calcular(1, 3, 'nuevaoperacion'));

function obtenerPersonajesRickAndMorty() {
    const url = 'https://rickandmortyapi.com/api/character';
    fetch(url)
        .then(respuesta => respuesta.json()) // Convierto mi respuesta en un objeto JSON
        .then(data => {
            for (let i = 0; i < data.results.length; i++) {
                mostrarPersonaje(data.results[i].name, data.results[i].status, data.results[i].gender);
            }
        })
        .catch(error => {
            console.log('Hubo un error ', error);
        });
};

function mostrarPersonaje(nombrePersonaje, statusPersonaje, generoPersonaje) {
    let mostrarStatus = statusPersonaje === 'Alive' ? 'Vivo' : 'Muerto';
    let mostrarGenero;
    switch (generoPersonaje) {
        case 'Male':
            mostrarGenero = 'Hombre';
            break;
        case 'Female':
            mostrarGenero = 'Mujer';
            break;
        default:
            mostrarGenero = 'Desconocido'
            break;
    }

    console.log('Nombre: ' + nombrePersonaje + ' Está ' + mostrarStatus + ' y su genero es: ' + mostrarGenero);
}

obtenerPersonajesRickAndMorty();