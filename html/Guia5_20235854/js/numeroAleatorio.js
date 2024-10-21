const numeroAleatorio = Math.floor(Math.random() * 25);

const numeroIntentos = 3;
let intentos = 1;

function generarNumeroAleatorio(){
    let mensaje;
    const parrafo = document.querySelector("#idParrafo");

    if (intentos <= numeroIntentos) {
        let numero = prompt("¿Qué número se ha generado? (Intento" + intentos + ")?");

        if (numero == numeroAleatorio) {
            mensaje = `¡Es sorprendente, pudiste adivinar el número oculto (${numeroAleatorio})!
            Refresque la página para volver a jugar`;
        } else if (intentos == numeroIntentos) {
            mensaje = `¡Lo siento, no pudiste adivinar el número oculto (${numeroAleatorio})!
            Refresque la página para volver a jugar`;
        } else {

            mensaje = `Vuelve a intentarlo. Te quedan ${numeroIntentos - intentos} intentos`;

            if (numero < numeroAleatorio) {
                mensaje += ". El número que buscas es mayor";
            } else {
                mensaje += ". El número que buscas es menor";
            }
        }

        intentos++;
    } else {
        mensaje = `¡Lo siento, no pudiste adivinar el número oculto (${numeroAleatorio})!
        Refresque la página para volver a jugar`;
    }

    parrafo.innerHTML = mensaje;

}
