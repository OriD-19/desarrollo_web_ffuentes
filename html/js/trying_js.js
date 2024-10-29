function Estudiante(nombre, mascota) {
    this.nombre = nombre;
    this.mascota = mascota;
}

Estudiante.prototype.toString = function estudianteToString() {
    return `Estudiante: ${this.nombre}`;
}

Estudiante.prototype.saludar = function() {
    return `Hola, soy ${this.nombre}`;
}

const e1 = new Estudiante('Juan', 'Perro');
console.log(Estudiante.prototype);

console.log(e1);
