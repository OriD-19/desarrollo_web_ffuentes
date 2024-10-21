// limpiar el Formulario
function limpiarFormulario() {
    document.getElementById('carnet').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('dui').value = '';
    document.getElementById('nit').value = '';
    document.getElementById('nacimiento').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('edad').value = '';
}

errores = {
    errorNombre: "",
    errorDui: "",
    errorNit: "",
    errorNacimiento: "",
    errorCorreo: "",
    errorEdad: "",
}

const validaciones = [validarCarnet, validarNombre, validarDui, validarNit, validarNacimiento, validarCorreo, validarEdad];

const verificarTeclaCaracter = (ee) => {
    return String.fromCharCode(ee.keyCode).match(/[A-Za-z0-9]/) !== null;
}


// ayudas en los inputs (para que los usuarios sepan que informacion deben introducir)

function ayudaDui(e) {
    const currDuiLength = document.getElementById('dui').value.length;

    if (e.key === 'Backspace') {
        // quitar el guion si el usuario borra un caracter
        if (currDuiLength === 10) {
            document.getElementById('dui').value = document.getElementById('dui').value.slice(0, currDuiLength - 2);
        } else {
            return;
        }
    }

    if (currDuiLength === 10 || !verificarTeclaCaracter(e)) {
        // el input no permite introducir mas de 10 caracteres (contando el guion)
        e.preventDefault();
        return;
    }

    // agregar un guion cuando el usuario haya ingresado 8 caracteres

    if (currDuiLength === 8) {
        document.getElementById('dui').value += '-';
    }
}
document.getElementById('dui').addEventListener('keydown', ayudaDui);

function ayudaNit(e) {
    const currNitLength = document.getElementById('nit').value.length;
    
    if (e.key === 'Backspace') {
        // quitar los guiones si el usuario borra un caracter
        if (currNitLength === 17 || currNitLength === 13 || currNitLength === 6) {
            document.getElementById('nit').value = document.getElementById('nit').value.slice(0, currNitLength-2);
        } else {
            return;
        }
    }

    if (currNitLength === 17 || !verificarTeclaCaracter(e)) {
        // el input no permite introducir mas de 17 caracteres (contando los guiones)
        e.preventDefault();
        return;
    }


    // agregar un guion cuando el usuario haya ingresado 4 o 11 caracteres
    if (currNitLength === 4 || currNitLength === 11 || currNitLength === 15) {
        document.getElementById('nit').value += '-';
    }
}
document.getElementById('nit').addEventListener('keydown', ayudaNit);

function ayudaNacimiento(e) {
    const currNacimientoLength = document.getElementById('nacimiento').value.length;

    if (e.key === 'Backspace') {
        // quitar las barras si el usuario borra caracteres
        if (currNacimientoLength === 4 || currNacimientoLength === 7) {
            document.getElementById('nacimiento').value = document.getElementById('nacimiento').value.slice(0, currNacimientoLength - 2);
        } else {
            return;
        }
    }

    if (currNacimientoLength === 10 || !verificarTeclaCaracter(e)) {
        // el input no permite introducir mas de 10 caracteres (contando las barras)
        e.preventDefault();
        return;
    }


    // agregar una barra cuando el usuario haya ingresado 2 o 5 caracteres

    if (currNacimientoLength === 2 || currNacimientoLength === 5) {
        document.getElementById('nacimiento').value += '/';
    }
}
document.getElementById('nacimiento').addEventListener('keydown', ayudaNacimiento);


function validarCarnet() {
    // dos letras y tres numeros
    const fmt = /^([A-Za-z]{2})\d{3}$/gm
    const carnet = document.getElementById('carnet').value;

    if (!fmt.test(carnet)) {
        errores.errorCarnet = "Carnet inválido";
        return false;
    }

    return true
}

function validarNombre() {
    const fmt = /^[A-Za-z]{2,}$/
    const nombre = document.getElementById('nombre').value;

    if (!fmt.test(nombre)) {
        errores.errorNombre = "Nombre inválido";
        return false;
    }

    return true
}

function validarDui() {
    const fmt = /\d{8}-\d/
    const dui = document.getElementById('dui').value;

    if (!fmt.test(dui)) {
        errores.errorDui = "Dui inválido";
        return false;
    }

    return true;
}

function validarNit() {
    const fmt = /\d{4}-\d{6}-\d{3}-\d/
    const nit = document.getElementById('nit').value;

    if (!fmt.test(nit)) {
        errores.errorNit = "Nit inválido";
        return false;
    }

    return true;
}

function validarNacimiento() {
    const fmt = /\d{2}\/\d{2}\/\d{4}/
    const nacimiento = document.getElementById('nacimiento').value;

    if (!fmt.test(nacimiento)) {
        errores.errorNacimiento = "Fecha de nacimiento inválida";
        return false;
    }

    return true;
}

function validarCorreo() {
    const fmt = /\w+@\w+\.\w+/
    const correo = document.getElementById('correo').value;

    if (!fmt.test(correo)) {
        errores.errorCorreo = "Correo inválido";
        return false;
    }

    return true;
}

function validarEdad() {
    // no se aceptan personas de 100 años o más 😥
    const fmt = /\d{2}/
    const edad = document.getElementById('edad').value;

    if (!fmt.test(edad)) {
        errores.errorEdad = "Edad inválida";
        return false;
    }

    return true;
}

function validarFormulario(e) {

    // resetear los mensajes de error
    Object.keys(errores).forEach(key => {
        errores[key] = "";
    });

    let valido = true;

    // al tener un arreglo de validaciones, es más fácil añadir y tener un solo registro de qué validaciones se realizan
    validaciones.forEach(validacion => {
        // operador and (&&), en caso de que alguna validacion falle, se considera un fomulario incompleto
        valido = validacion() && valido;
    });

    if (!valido) {
        e.preventDefault();
    }

    // mostrar mensajes de error en el navegador
    Object.keys(errores).forEach(key => {
        const error = errores[key];
        if (error) {
            document.querySelector(`#${key}`).innerText = error;
        } else {
            // tambien para reiniciar los mensajes de error en la interfaz
            document.querySelector(`#${key}`).innerText = "";
        }
    });

    if (valido) {
        alert('¡Formulario enviado con éxito!');
    }
}

const boton = document.getElementById('validarFormulario');

boton.addEventListener('click', validarFormulario);

limpiarFormulario();
