class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
        this.#priv();
    }

    #priv() {
        console.log('Accediendo a un método privado');
    }
}

const persona1 = new Persona('Juan', 'Perez', 30);
const persona2 = new Persona('Maria', 'Gomez', 25);

console.log(persona1);
console.log(persona2);

persona1.saludar();
persona2.saludar();
