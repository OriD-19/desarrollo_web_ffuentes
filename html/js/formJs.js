console.log("hola");

const resultado = document.getElementById('resultado');
const injection = document.getElementById('injection');

function ingresarDatos() {
    console.log("Ingresando datos...");
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);

    const edad = new Date().getFullYear() - fechaNacimiento.getFullYear();

    console.log(`Nombre: ${nombre} ${apellido} Edad: ${edad}`);

    resultado.innerHTML = `Nombre: ${nombre} ${apellido} Edad: ${edad}`;

    injection.appendChild();
}

const scr = document.createElement('script');
scr.innerHTML = 'console.log("hola")';
resultado.appendChild(scr);

