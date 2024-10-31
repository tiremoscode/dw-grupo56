function obtenergeneroynombre() {
    const url = 'https://rickandmortyapi.com/api/character';
    fetch(url)  
        .then(respuesta => respuesta.json()) // Convierto mi respuesta en un objeto JSON
        .then(data => {
            for (let i = 0; i < data.results.length; i++) {
                console.log('Nombre ' + data.results[i].name + ' Género: ' + data.results[i].gender);
            }
        })
        .catch(error => {
            console.log('Hubo un error ', error);
        });
};

obtenergeneroynombre();







// Van a crear una promesa hacia el servicio API REST deseado (Poke API, Rick and Morty o jsonplaceholder) y van a poner la información que consideren importante.
// Promises
// 3 estados
// Pending - Pendiente
// REsuelta - Fulfilled
// Rechazada - Rejected


/*
const miPrimerPromesa = new Promise((resolve, reject) => {
    // todas las actividades 
    // de tipo asincrono
    if (condicion) {
        resolve('exito');
    } else {
        reject('error');
    }
});
setTimeout(() => { 
}, 2000); --retrasa el tiempo de respuesta a 2 seg.--
*/