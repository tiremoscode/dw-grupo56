// Clases

// Característicass
// Sintaxis Clara. Nos va a permitir crear ojetos de una manera comprensible, 
// Herencia. Las clases permiten herencia, es decir, poder heredar propiedades y método.
// Métodos. Las clases pueden contener métodos que pueden ser invocados a través de la instancia de clase.
// Constructor. Este se ejecuta de manera automática cuando creamos una nueva instancia de clase.

// Estructura base de una Clase.

class NombreDeLaClase {
    constructor(parametros) {
        // Inicializar los valores a través de los parametros
    }

    metodo() {
        // Definición de un método
        // Puede tener n métodos mi clase.
    }
}

// Ejemplo de una clase de una Alumna.
class Alumna {
    constructor(nombre, aPaterno, aMaterno, edad, ciudad, grupo) {
        this.nombre = nombre;
        this.aPaterno = aPaterno;
        this.aMaterno = aMaterno;
        this.edad = edad;
        this.ciudad = ciudad;
        this.grupo = grupo;
    }

    informacionAlumna() {
        console.log('El nombre de la alumna es ' + this.nombre + ' ' + this.aPaterno + ' ' + this.aMaterno + ' ' + this.grupo);
    }

    edadAlumna() {
        console.log('La edad de ' + this.nombre + ' es de ' + this.edad + ' años ');
    }

    mayorQue25() {
        if (this.edad > 25) {
            console.log('La alumna ' + this.nombre + ' si tiene más de 25 años');
        } else {
            console.log('La alumna ' + this.nombre + ' es menor a 25 años');
        }
    }

}

const alumna1 = new Alumna('Pamela', 'Pinto', 'Navarrete', 31, 'CDMX', 'Grupo 56');
const alumna2 = new Alumna('Deyra Maria', 'Torres', 'Heredia', 21, 'Tacambaro', 'Grupo 56');
const alumna3 = new Alumna('Laura', 'Plascencia', 'Manjarrez', 27, 'Mazatlán', 'Grupo 56');

alumna1.edadAlumna();
alumna2.informacionAlumna();
alumna2.mayorQue25();