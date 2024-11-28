
const readline = require('readline'); 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function obtenerDefinicion(palabra) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${palabra}`;

    fetch(url)
        .then(respuesta => respuesta.json())  
        .then(data => {
            console.log(`Definición de la palabra "${palabra}": `, data);

            if (data && data.length > 0) {
                for (let i = 0; i < data[0].meanings.length; i++) {
                    const definiciones = data[0].meanings[i].definitions;
                    for (let j = 0; j < definiciones.length; j++) {
                        console.log(`- ${definiciones[j].definition}`);
                    }
                }
            } else {
                console.log('No definitions found');
            }
        })
        .catch(error => {
            console.log('Error: ', error);  
        });
}

rl.question('Enter a word: ', (palabra) => {
    obtenerDefinicion(palabra); 
    rl.close();  
});
