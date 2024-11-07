function obtenerIdNombreEpisodioGravityFalls() { 
    const urlPersonajes = 'https://gravity-falls-api.vercel.app/api/characters';

    fetch(urlPersonajes)
        .then(respuesta => respuesta.json()) // Convierto la respuesta en un objeto JSON
        .then(dataPersonajes => {
            for (let i = 0; i < dataPersonajes.length; i++) {
                console.log('ID: ' + dataPersonajes[i].id + ' - Nombre: ' + dataPersonajes[i].name + ' - Episodios: ' + dataPersonajes[i].episode.join(', '));
            }
        })
        .catch(error => {
            console.log('Hubo un error:', error);
        });
}

obtenerIdNombreEpisodioGravityFalls();