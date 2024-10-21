const parrafo = document.querySelector('#idParrafo');
console.log(parrafo);

const btnSumar = document.querySelector('#idBtnSumar');
const btnRestar = document.querySelector('#idBtnRestar');
const btnMultiplicar = document.querySelector('#idBtnMultiplicar');
const btnDividir = document.querySelector('#idBtnDividir');

btnSumar.addEventListener('click', performOperation(sumar));
btnRestar.addEventListener('click', performOperation(restar));
btnMultiplicar.addEventListener('click', performOperation(multiplicar));
btnDividir.addEventListener('click', performOperation(dividir));

let resultado;

function performOperation(operation) {
    let num1 = prompt('Ingrese el primer número');
    let num2 = prompt('Ingrese el segundo número');

    let res = operation(num1, num2);

    resultado.innerHTML = res;
}

function sumar(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

function restar(num1, num2) {
    return parseInt(num1) - parseInt(num2);
}

function multiplicar(num1, num2) {
    return parseInt(num1) * parseInt(num2);
}

function dividir(num1, num2) {

    if (num2 == 0) {
        return 'No se puede dividir por cero';
    }

    return parseInt(num1) / parseInt(num2);
}
