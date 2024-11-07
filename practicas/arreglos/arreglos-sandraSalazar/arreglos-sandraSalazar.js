
 const floresFavoritas = new Array('Orquideas','Peonias','Astromelias','Lisianthus','Hortensias');

 const arregloVacio = [];
 const vacioConstrucctor = new Array();

// Acceder a flores favoritas
 console.log(floresFavoritas[1]);

 //Modificar las flores
 console.log(floresFavoritas);
 floresFavoritas[2] = 'Rosas';
 console.log(floresFavoritas);

 // Push
 floresFavoritas.push('Tulipan');
 console.log(floresFavoritas);
 
 // Eliminar Pop
 const eliminarFlores = floresFavoritas.pop();
 console.log(floresFavoritas);
 console.log(floresFavoritas);
 
 //shift
const eliminarPrimerFlor = floresFavoritas.shift;
console.log(eliminarPrimerFlor);
console.log(floresFavoritas)
//unshift
 floresFavoritas.unshift('Girasol');
 console.log(floresFavoritas);
 //concat
 const otrasFlores = ['Suculentas', 'Claveles'];
 const juntaTodasMisfloresFavoritas= floresFavoritas.concat(otrasFlores);
 console.log(juntaTodasMisfloresFavoritas);
// slice
 const algunasFloresFavoritas = floresFavoritas.slice(1, 3);
 console.log(algunasFloresFavoritas);
// splice
floresFavoritas.splice(1, 1, 'Margarita');
console.log(floresFavoritas);

