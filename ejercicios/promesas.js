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
*/

const promesaEjemplo = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exitoTarea = false; // simular que mi operación es exitosa

        if (exitoTarea) {
            resolve('La tarea se completo con éxito');
        } else {
            reject('Hubo un error al completar mi tarea');
        }
    }, 2000);
});

promesaEjemplo
    .then((success) => {
        console.log(success);
    })
    .catch((error) => {
        console.log(error);
    });