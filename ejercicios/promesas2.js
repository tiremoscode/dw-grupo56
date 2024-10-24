// Slow y Medium Promise

const slowPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promesa lenta completada');
    }, 3000);
});

const mediumPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promesa media completada');
    }, 1500);
});

// Ejecutaremos ambas promesas.
/*
console.log('Arranca mi app de promesas lentas y medias');

slowPromise.then((resultado) => {
    console.log(resultado);
});

mediumPromise.then((resultado) => {
    console.log(resultado);
});

console.log('Las promesas están en proceso...');
*/

Promise.all([slowPromise, mediumPromise])
    .then((resultadoAmbasPromesas) => {
        console.log('Todas las promesas se cumplen?');
        console.log(resultadoAmbasPromesas);
    })
    .catch((error) => {
        console.log('Error en alguna promesa ', error);
    });