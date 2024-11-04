//agregar, eliminar y actualizar//



const comidaFavorita = new Array('Pozole', 'Tinga', 'Enchiladas', 'Ramen', 'Sushi');



console.log(comidaFavorita[2]);


console.log(comidaFavorita);
comidaFavorita[3] = 'Pambazos';
console.log(comidaFavorita);


comidaFavorita.push('Mole');
console.log(comidaFavorita);


const eliminarUltimaComida = comidaFavorita.pop();
console.log(eliminarUltimaComida);
console.log(comidaFavorita);



comidaFavorita.unshift('Tacos de pollo');
console.log(comidaFavorita);


const otrasComidas = ['Quesadillas', 'Tortas'];
const juntaTodasMiscomidasFavoritas= comidaFavorita.concat(otrasComidas);
console.log(juntaTodasMiscomidasFavoritas);


const algunascomidasFavoritas = comidaFavorita.slice(1, 4);
console.log(algunascomidasFavoritas);

comidaFavorita.splice(1, 1, 'Carnitas');
console.log(comidaFavorita);




