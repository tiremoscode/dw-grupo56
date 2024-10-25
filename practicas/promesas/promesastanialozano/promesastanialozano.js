function obtenerPersonajesYepisodiosRickYMorty() { 
    const urlPersonajes = 'https://rickandmortyapi.com/api/character';
    const urlEpisodios = 'https://rickandmortyapi.com/api/episode';

    fetch(urlPersonajes)
        .then(respuesta => respuesta.json())
        .then(dataPersonajes => {
            console.log('Nombres de los personajes:', dataPersonajes.results.map(personaje => personaje.name));
        })
        .catch(error => {
            console.log('Hubo un error:', error);
        });

    fetch(urlEpisodios)
        .then(respuesta => respuesta.json())
        .then(dataEpisodios => {
            console.log('Episodios:', dataEpisodios.results.map(episodio => episodio.name));
        })
        .catch(error => {
            console.log('Hubo un error:', error);
        });
};

obtenerPersonajesYepisodiosRickYMorty();
