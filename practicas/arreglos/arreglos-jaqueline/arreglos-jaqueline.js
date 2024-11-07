const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const seriesFavoritas = new Array('The good place', 'Desde cero', 'Breaking Bad', 'Friends', 'La casa del dragón');
console.log(seriesFavoritas);

//agrega

seriesFavoritas.push('Malcom');
console.log(seriesFavoritas);

//eliminar ultima serie de mi lista 
const eliminarSerie = seriesFavoritas.pop();
console.log(eliminarSerie);
console.log(seriesFavoritas);

//Actutualizar con mas series 
const seriesFavoritasDos = ['Outlander', 'King the Land', 'Bridgerton'];
const listasJuntas = seriesFavoritas.concat(seriesFavoritasDos)
console.log(listasJuntas);