// Getters y Setters
class Rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    get area() {
        return this.base * this.altura;
    }

    set baseNueva(nuevaBase) {
        this.base = nuevaBase;
    }
}

const rectangulo1 = new Rectangulo(5, 10);
console.log(rectangulo1.area);

rectangulo1.baseNueva = 7; // Cambio la base inicial
console.log(rectangulo1.area);