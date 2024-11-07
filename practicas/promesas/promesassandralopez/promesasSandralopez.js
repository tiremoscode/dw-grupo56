function obtenerNoticias() {
    const url = 'https://rickandmortyapi.com/api/character';
    fetch(url)
        .then(respuesta => respuesta.json()) 
        .then(data => {
            for (let i = 0; i < data.results.length; i++) {
                console.log('Su nombre es:  ' + data.results[i].name, 'Su status es: ' + data.results[i].status,'Especie: ' + data.results[i].species);
            }
        })
        .catch(error => {
            console.log('Hubo un error ', error);
        });
};

obtenerNoticias();