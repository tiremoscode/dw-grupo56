function obtenerHechizos() {
    // url: https://hp-api.onrender.com/
    const url = 'https://hp-api.onrender.com/api/spells';
    fetch(url)
        .then(respuesta => respuesta.json()) 
        .then(data => {
            console.log('You have these spells : ', data);
        })
        .catch(error => {
            console.log('There was a mistake ', error);
        });
};

obtenerHechizos();
