
function obtenerPersonajeRickMorty() {
    const url = 'https://rickandmortyapi.com/api/character'; 
    fetch(url)
        .then(respuesta => respuesta.json()) 
        .then(data => {
            data.results.forEach(personaje => {
                console.log('Nombre: ', personaje.name);
                console.log('Especie: ', personaje.species);
                console.log('Origen: ', personaje.origin.name);
            });
        })
        .catch(error => {
            console.log('Error: ', error);
        });
}

obtenerPersonajeRickMorty();
