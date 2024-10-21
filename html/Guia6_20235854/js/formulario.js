const inputNombre = document.getElementById('idTxtNombre');
const inputApellido = document.getElementById('idTxtApellido');
const inputFechaNacimiento = document.getElementById('idTxtFechaNacimiento');
const inputRdMasculino = document.getElementById('idRdMasculino');
const inputRdFemenino = document.getElementById('idRdFemenino');
const cmbPais = document.getElementById('idCmbPais');
const inputDireccion = document.getElementById('idTxtDireccion');
const inputNombrePais = document.getElementById('idNombrePais');

const buttonAgregarPaciente = document.getElementById('idBtnAgregar');
const buttonLimpiarPaciente = document.getElementById('idBtnLimpiar');
const buttonMostrarPaciente = document.getElementById('idBtnMostrar');
const buttonAgregarPais = document.getElementById('idBtnAddPais');

const notificacion = document.getElementById('idNotificacion');

// Bootstrap stuff
const toast = new bootstrap.Toast(notificacion);
const mensaje = document.getElementById('idMensaje');

const idModal = document.getElementById('idModal');

const arrayPacientes = [];

const limpiarForm = () => {
    inputNombre.value = '';
    inputApellido.value = '';
    inputFechaNacimiento.value = '';
    inputRdMasculino.checked = false;
    inputRdFemenino.checked = false;
    cmbPais.value = '';
    inputDireccion.value = '';
    inputNombrePais.value = '';

    inputNombre.focus();
}

// validar el ingreso del paciente

const addPaciente = () => {
    let nombre = inputNombre.value;
    let apellido = inputApellido.value;
    let fechaNacimiento = inputFechaNacimiento.value;
    let sexo = inputRdMasculino.checked ? 'Masculino' : (inputRdFemenino.checked ? 'Femenino' : '');
    let pais = cmbPais.value;
    let labelPais = cmbPais.options[cmbPais.selectedIndex].text;
    let direccion = inputDireccion.value;

    // check that all of them are filled (&& condition)
    if (nombre != "" && apellido != "" && fechaNacimiento != "" && sexo != "" && pais != 0 && direccion != "") {
        arrayPacientes.push(
            [nombre, apellido, fechaNacimiento, sexo, pais, direccion]
        )

        mensaje.innerText = "Se ha registrado un nuevo paciente";
        toast.show();
        limpiarForm();
    } else {
        mensaje.innerText = "Faltan campos por completar";
        toast.show();
    }

}

function imprimirFilas() {
    let $fila = "";
    let contador = 1;

    arrayPacientes.forEach((element, i) => {
        $fila += `<tr>
            <td scope="row" class="text-center fw-bold">${contador}</td>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td>${element[2]}</td>
            <td>${element[3]}</td>
            <td>${element[4]}</td>
            <td>${element[5]}</td>
            <td>
                <button id="idBtnEditar${contador}" type="button" class="btn btn-primary" alt="Editar" data-bs-toggle="modal" data-bs-target="#idModalPacientes">
                    <i class="bi bi-pencil-square"></i>
                </button>
                <button id="idBtnEliminar${contador}" type="button" class="btn btn-danger" alt="Eliminar">
                    <i class="bi bi-trash3-fill"></i>
                </button>
            </td>
        </tr>`;
        contador++;
    });

    return $fila;
}

const imprimirPacientes = () => {
    let $table = `<div class="table-responsive">
        <table class="table table-striped table-hover table-bordered">
            <tr>
                <th scope="col" class="text-center" style="width: 50%;">#</th>
                <th scope="col" class="text-center" style="width: 15%;">Nombre</th>
                <th scope="col" class="text-center" style="width: 15%;">Apellido</th>
                <th scope="col" class="text-center" style="width: 10%;">Fecha de Nacimiento</th>
                <th scope="col" class="text-center" style="width: 10%;">Sexo</th>
                <th scope="col" class="text-center" style="width: 10%;">País</th>
                <th scope="col" class="text-center" style="width: 25%;">Dirección</th>
                <th scope="col" class="text-center" style="width: 10%;">Opciones</th>
            </tr>
            ${imprimirFilas()}
        </table>
    </div>`;

    document.getElementById('idTablaPacientes').innerHTML = $table;

    // agregar la funcionalidad de editar y eliminar a los botones
    arrayPacientes.forEach((element, i) => {
        document.getElementById(`idBtnEliminar${i + 1}`).onclick = () => {
            eliminarPaciente(i);

            //recargamos la tabla de pacientes
            imprimirPacientes();
        }

        document.getElementById(`idBtnEditar${i + 1}`).onclick = () => {
            abrirModalEditarPaciente(i);
        }
    });
}

let contadorGlobalOption = cmbPais.children.length;

const addPais = () => {
    let paisNew = inputNombrePais.value;

    if (paisNew != "") {
        let option = document.createElement('option');
        option.value = contadorGlobalOption + 1;
        option.textContent = paisNew;

        cmbPais.appendChild(option);
        mensaje.innerText = "Pais agregado correctamente";
        toast.show();
    } else {
        mensaje.innerText = "Faltan campos por completar";
        toast.show();
    }
}

buttonLimpiarPaciente.onclick = () => {
    limpiarForm();
}

buttonAgregarPaciente.onclick = () => {
    addPaciente();
}

buttonMostrarPaciente.onclick = () => {
    imprimirPacientes();
}

buttonAgregarPais.onclick = () => {
    addPais();
}

idModal.addEventListener("shown.bs.modal", () => {
    inputNombrePais.value = "";
    inputNombre.focus();
})

/*
 * Agregando la funcionalidad para editar y eliminar pacientes
 * 
*/

const eliminarPaciente = (idxPaciente) => {
    arrayPacientes.splice(idxPaciente, 1);

    mensaje.innerText = "Paciente eliminado correctamente";
    toast.show();
}

let editandoPaciente = -1;

const abrirModalEditarPaciente = (idxPaciente) => {
    //llenar el modal con los datos del paciente

    editandoPaciente = idxPaciente;

    const nombreEditar = document.getElementById('idTxtNombreEditar');
    const apellidoEditar = document.getElementById('idTxtApellidoEditar');
    const fechaNacimientoEditar = document.getElementById('idTxtFechaNacimientoEditar');
    const rdMasculinoEditar = document.getElementById('idRdMasculinoEditar');
    const rdFemeninoEditar = document.getElementById('idRdFemeninoEditar');
    const cmbPaisEditar = document.getElementById('idCmbPaisEditar');
    const direccionEditar = document.getElementById('idTxtDireccionEditar');

    nombreEditar.value = arrayPacientes[idxPaciente][0];
    apellidoEditar.value = arrayPacientes[idxPaciente][1];
    fechaNacimientoEditar.value = arrayPacientes[idxPaciente][2];
    rdMasculinoEditar.checked = arrayPacientes[idxPaciente][3] === 'Masculino';
    rdFemeninoEditar.checked = arrayPacientes[idxPaciente][3] === 'Femenino';
    cmbPaisEditar.value = arrayPacientes[idxPaciente][4];
    direccionEditar.value = arrayPacientes[idxPaciente][5];

}

const guardarEditarPaciente = (idxPaciente) => {

    if (idxPaciente === -1) {
        // error,no deberia de pasar nunca
        return;
    }

    arrayPacientes[idxPaciente][0] = document.getElementById('idTxtNombreEditar').value;
    arrayPacientes[idxPaciente][1] = document.getElementById('idTxtApellidoEditar').value;
    arrayPacientes[idxPaciente][2] = document.getElementById('idTxtFechaNacimientoEditar').value;
    arrayPacientes[idxPaciente][3] = document.getElementById('idRdMasculinoEditar').checked ? 'Masculino' : (document.getElementById('idRdFemeninoEditar').checked ? 'Femenino' : '');
    arrayPacientes[idxPaciente][4] = document.getElementById('idCmbPaisEditar').value;
    arrayPacientes[idxPaciente][5] = document.getElementById('idTxtDireccionEditar').value;

    mensaje.innerText = "Paciente actualizado correctamente";
    toast.show();

}

arrayPacientes.forEach((element, i) => {
    document.getElementById(`idBtnEliminar${i + 1}`).onclick = () => {
        eliminarPaciente(i);

        //recargamos la tabla de pacientes
        imprimirPacientes();
    }
});

arrayPacientes.forEach((element, i) => {
    document.getElementById(`idBtnEditar${i + 1}`).onclick = () => {
        abrirModalEditarPaciente(i);
    }
});

document.getElementById('idBtnGuardarEdicion').onclick = () => {
    guardarEditarPaciente(editandoPaciente);
    imprimirPacientes();
}

limpiarForm();
