// Herencia
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido() {
        console.log(this.nombre + ' hace un sonido');
    }
}

class Perro extends Animal {
    hacerSonido() {
        console.log(this.nombre + ' ladra');
    }
}

class Gato extends Animal {
    hacerSonido() {
        console.log(this.nombre + ' maulla');
    }
}

const perro1 = new Perro('Oddie');
const gato1 = new Gato('Garfield');

perro1.hacerSonido();
gato1.hacerSonido();