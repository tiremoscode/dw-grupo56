function obtenerInfoJigglypuff() {
    const url = 'https://pokeapi.co/api/v2/pokemon/jigglypuff';
    fetch(url)
        .then(respuesta => respuesta.json()) 
        .then(data => {
            console.log('ID pokemon: ', data.id + ' Nombre del pokemon: ', data.name + ' Tipo de pokemon: ', data.types[0].type.name);
            for (let i = 0; i < data.abilities.length; i++) { 
                console.log('habilidad', data.abilities[i].ability.name);
            }
            for (let i = 0; i < data.moves.length; i++) { 
                console.log('movimiento', data.moves[i].move.name); 
            }
        })
        .catch(error => {
            console.log('Hubo un error ', error);
        });
};

obtenerInfoJigglypuff();




