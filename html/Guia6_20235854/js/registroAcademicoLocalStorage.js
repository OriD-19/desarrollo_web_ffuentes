const containerEstudiantes = document.querySelector(
    '#idContainerEstudiantes'
);

const btnAddEstudiante = document.querySelector('#idBtnAgregarEstudiante');
const btnViewEstudiantes = document.querySelector('#idBtnMostrarEstudiantes');

btnAddEstudiante.addEventListener('click', addEstudiantes);
btnViewEstudiantes.addEventListener('click', viewEstudiantes);

let arrayEstudiantes = new Array();

function addEstudiantes() {
    const inputCarnet = document.querySelector('#inputCarnet')
        .value.toString();

    const inputNombre = document.querySelector('#inputNombre').value.toString();
    const inputApellidos = document.querySelector('#inputApellidos').value.toString();

    if (inputCarnet !== "" && inputNombre !== "" && inputApellidos !== "") {
        const estudiante = {
            carnet: inputCarnet,
            nombre: inputNombre,
            apellidos: inputApellidos

        }
        arrayEstudiantes.push(estudiante);
        localStorage.setItem('estudiantes', JSON.stringify(arrayEstudiantes));
        alert("Se registró el nuevo estudiante");

        document.querySelector('#inputCarnet').value = "";
        document.querySelector('#inputNombre').value = "";
        document.querySelector('#inputApellidos').value = "";
        document.querySelector('#inputCarnet').focus();
        viewEstudiantes();

    } else {
        alert("Faltan campos que completar");
    }
}

function viewEstudiantes() {

    arrayEstudiantes = JSON.parse(localStorage.getItem('estudiantes')) || [];

    let totalEstudiantes = arrayEstudiantes.length;
    if (totalEstudiantes > 0) {

        let table = "<table class='table table-light table-stripped'>";
        table += "<thead>";
        table += "<tr>";
        table += "<th scope='col' style='width: 5%;'>#</th>";
        table += "<th scope='col' style='width: 15%;'>Carnet</th>";
        table += "<th scope='col'>Nombres</th>";
        table += "<th scope='col'>Apellidos</th>";
        table += "</tr>";
        table += "</thead>";
        table += "<tbody>";
        let i = 0;
        for (const estudiante of arrayEstudiantes) {
            i++;
            let {carnet, nombre, apellidos} = estudiante;

            table += "<tr>";
            table += "<td scope='row' style='font-weight: bold;'>" + (i + 1) + "</td>";
            table += "<td>" + carnet + "</td>";
            table += "<td>" + nombre + "</td>";
            table += "<td>" + apellidos + "</td>";
            table += "</tr>";
        }

        table += "</tbody>";
        table += "</table>";

        containerEstudiantes.innerHTML = table;
    } else {
        alert("No se han registrado estudiantes");
    }
}
