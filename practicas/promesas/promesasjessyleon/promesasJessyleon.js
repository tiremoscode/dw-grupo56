


function obtenerPersonaje() {
    const url = 'https://www.breakingbadapi.com/api/';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(data => {
            for (let i = 0; i < data.results.length; i++) {
                console.log('Nombre de maton' + data.results[i].name);
            }
        })
        .catch(error => {
            console.log('Hubo un error', error);
        });
};
obtenerPersonaje();



