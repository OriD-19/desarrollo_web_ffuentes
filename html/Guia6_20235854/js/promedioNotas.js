const containerEstudiantes = document.querySelector('#idContainerEstudiantes');

const btnPromedio = document.querySelector('#idBtnPromedio');

btnPromedio.addEventListener('click', generarEstudiantes);

function generarEstudiantes() {
    let arrayEstudiantes = [];

    let totalEstudiantes = document.querySelector(
        '#inputNumeroEstudiantes'
    ).value;
    let contador = 1;

    let estudiante, calificacion, convertir = 0;

    while (contador <= totalEstudiantes) {
        estudiante = prompt(`Ingrese el nombre del estudiante ${contador}`);

        // verificar que sea entero, positivo y entre 0 y 10

        do {
            calificacion = prompt(
                `Ingrese la calificación del estudiante ${contador}`
            );

            convertir = parseFloat(calificacion);
        } while (isNaN(convertir) || convertir < 0 || convertir > 10);

        arrayEstudiantes[contador - 1] = new Array(
            estudiante,
            parseFloat(calificacion).toFixed(2)
        );
        contador++;
    }

    console.log(arrayEstudiantes);

    let calificacionMasAlta = 0;
    let promedio = 0;
    let posicion;

    let listado = "<h3>Listado de estudiantes registrados</h3>";

    listado += "<ol>";

    for (let indice of arrayEstudiantes) {
        let nombre = indice[0];
        let nota = parseFloat(indice[1]);

        listado += `<li><b>Nombre:</b> ${nombre} - <b>Calificación:</b> ${nota}</li>`;

        if (nota > calificacionMasAlta) {
            calificacionMasAlta = nota;
            posicion = indice;
        }

        promedio += parseFloat(nota);
    }

    listado += "</ol>";
    promedio = parseFloat(promedio / totalEstudiantes).toFixed(2);
    listado += `<p><b>Promedio de calificaciones:</b> ${promedio}</p>`;
    listado += `<p><b>Estudiante con mejor calificación:</b> ${posicion[0]}</p>`;

    containerEstudiantes.innerHTML = listado;
}
