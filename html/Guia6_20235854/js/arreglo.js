const containerArreglo = document.querySelector('#idContainerArreglo');
const containerArregloOrdenado = document.querySelector('#idContainerArregloOrdenado');

const btnAgregar = document.querySelector('#idBtnAgregar');
const btnOrdenar = document.querySelector('#idBtnOrdenar');

btnAgregar.addEventListener('click', agregarElemento);
btnOrdenar.addEventListener('click', ordenarElementos);

let arreglo = [];

function agregarElemento() {
    const numero = parseInt(document.querySelector('#inputNumero').value);

    if (isNaN(numero)) {
        alert("Debe ingresar un número válido");
    } else {
        arreglo.push(numero);

        let caja = document.createElement('div');
        caja.className = "col-md-1 colum";
        let valor = document.createElement("h3");
        valor.textContent = numero;
        caja.appendChild(valor);

        containerArreglo.insertAdjacentElement('beforeend', caja);
    }
}

function ordenarElementos() {
    // resetear el contenedor, para no renderizar dos veces los datos antiguos y los nuevos
    containerArregloOrdenado.innerHTML = "";
    const sorted = [...arreglo].sort((a, b) => a-b);

    for (let i of sorted) {
        let caja = document.createElement('div');
        caja.className = "col-md-1 colum-green";
        let valor = document.createElement("h3");
        valor.textContent = i;

        caja.appendChild(valor);
        containerArregloOrdenado.insertAdjacentElement('beforeend', caja);
    }
}