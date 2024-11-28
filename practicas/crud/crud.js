//Constantes
const seriesFavoritas = new Array('The good place', 'Oye Arnold', 'Switched at birth', 'Friends', 'La casa del dragón');
console.log(seriesFavoritas);


//para unirlo a HTML
//agrega

seriesFavoritas.push('Malcom');
console.log(seriesFavoritas);

//eliminar
const eliminarSerie = seriesFavoritas.pop();
console.log(eliminarSerie);
console.log(seriesFavoritas);

//Actutualizar
const seriesFavoritasDos = ['Outlander', 'King the Land', 'Anne with an E'];
const listasJuntas = seriesFavoritas.concat(seriesFavoritasDos)
console.log(listasJuntas);

