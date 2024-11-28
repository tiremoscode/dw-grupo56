function obtenerPelicula() {
    const url = 'https://studio-ghibli-rho.vercel.app/api/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49';
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(data => {
        console.log('Título de la pelicula: ' + data.title + ' Director: ' + data.director + 'Título original en japonés: ' + data.original_title );
    })
    .catch(error => {
        console.log('Hubo un error D:', error)
    });
};
//el enlace de la api es un objeto, no un array, por eso no use for() { }
obtenerPelicula();