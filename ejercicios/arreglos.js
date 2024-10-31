// Arreglos.
// Una notación por corchetes.
const alumnasConDisfraz = ['Yoselin', 'Anilu', 'Tania', 'Alyn'];

// Usando un constructor Array.
const frutas = new Array('Manzana', 'Platano', 'Melón', 'Uvas', 'Fresas');

// Arreglos Vacíos.
const arregloVacio = [];
const vacioConstrucctor = new Array();

// Acceder a elementos de un arreglo
console.log(frutas[2]);

// Modificar un elemento del arreglo
console.log(frutas);
frutas[3] = 'Papaya';
console.log(frutas);

// Métodos de arreglos.
// push - Agrega uno o más elementos al final de mi arreglo
frutas.push('Mango');
console.log(frutas);

// pop - Eliminar el último del arreglo y nos devuelve dicho valor
const eliminarUltimaFruta = frutas.pop();
console.log(eliminarUltimaFruta);
console.log(frutas);

// shift - Eliminar el primer elemento del arreglo y nos devuelve dicho valor
const eliminarPrimerFruta = frutas.shift();
console.log(eliminarPrimerFruta);
console.log(frutas);

// unshift. Agrega uno o más elementos al inicio del arreglo y devuelve la nueva lngitud del arreglo.
frutas.unshift('Kiwi');
console.log(frutas);

// concat. Combinamos dos o más arreglos y devuelve un nuevo arreglo.
const otrasFrutas = ['Sandía', 'Piña'];
const juntaTodasMisFrutas = frutas.concat(otrasFrutas);
console.log(juntaTodasMisFrutas);

// slice. Devolver una copia superficial de una porción de un arreglo como un nuevo arreglo.
const algunasFrutas = frutas.slice(1, 4);
console.log(algunasFrutas);

// splice. Cambia el contenido de un arreglo eliminando elementos existentes y/o agregando nuevos elementos.
// elimina 1 elemento en el indice 1 y agregará la nueva fruta llamada Mora
frutas.splice(1, 1, 'Mora');
console.log(frutas);

// ¿Cuántos registros puedo almacenar dentro de un arreglo?
// Puede tener un almacenamiento máximo de 2 a la potencia de 53 -1 en tamaño teorico
// limite práctico


// forEach. Ejecutar una función proporcinoada una vez por cada elemento del arreglo.
frutas.forEach((fruta) => {
    console.log(fruta);
});

// map. Creamos un nuevo arreglo con lo resultados de aplicar una fincion a cada elemento de mi arreglo.
const frutasEnMayusculas = frutas.map((fruta) => fruta.toUpperCase());
console.log(frutasEnMayusculas);

// filter. Creamos un nuevo arreglo con todos los elementos que cumplan con cierta condición implementada en la función.
const frutasNombreMayora4 = frutas.filter((fruta) => fruta.length > 4);
console.log(frutasNombreMayora4);

// find. Devolver el primer elemento que cumpla con la condición dada en la función.
const frutasConLetraF = frutas.find((fruta) => fruta.startsWith('f') || fruta.startsWith('F'));
console.log(frutasConLetraF);