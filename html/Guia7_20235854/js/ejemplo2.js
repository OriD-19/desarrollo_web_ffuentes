const formulario = document.forms["frmRegistro"];
const button = document.forms['frmRegistro'].elements['btnRegistro'];

const modal = new bootstrap.Modal(document.getElementById('idModal'), {});

const bodyModal = document.getElementById('idBodyModal');

const recorrerFormulario = function () {
    let totText = 0;
    let totRadio = 0;
    let totCheck = 0;
    let totDate = 0;
    let totSelect = 0;
    let totFile = 0;
    let totPass = 0;
    let totEmail = 0;

    let elementos = formulario.elements;
    let totalElementos = elementos.length;

    for (let index = 0; index < totalElementos; index++) {
        let elemento = elementos[index];

        let tipoElemento = elemento.type;
        let tipoNode = elemento.nodeName;

        console.log(elemento);

        if (tipoNode === "INPUT") {
            switch (tipoElemento) {
                case "text":
                    totText++;
                    break;
                case "radio":
                    totRadio++;
                    break;
                case "checkbox":
                    totCheck++;
                    break;
                case "date":
                    totDate++;
                    break;
                case "file":
                    totFile++;
                    break;
                case "password":
                    totPass++;
                    break;
                case "email":
                    totEmail++;
                    break;
            }
        } else if (tipoNode === "SELECT") {
            totSelect++;
        }
    }

    let resultado = `
        Total de input[type=text]: ${totText}<br>
        Total de input[type=radio]: ${totRadio}<br>
        Total de input[type=checkbox]: ${totCheck}<br>
        Total de input[type=date]: ${totDate}<br>
        Total de input[type=file]: ${totFile}<br>
        Total de input[type=password]: ${totPass}<br>
        Total de input[type=email]: ${totEmail}<br>
        Total de select: ${totSelect}<br>
    `;

    let nombres = document.getElementById("idNombre").value;
    let apellidos = document.getElementById("idApellidos").value;
    let fechaNac = document.getElementById("idFechaNac").value;
    let correo = document.getElementById("idCorreo").value;
    let password = document.getElementById("idPassword").value;
    let passwordRepetir = document.getElementById("idPasswordRepetir").value;

    let checkboxes = Array.from(document.querySelectorAll('input[type=checkbox]')).filter(checkbox => checkbox.checked);
    let radio = Array.from(document.getElementsByName('idRdCarrera')).filter(radio => radio.checked);
    let selectPais = document.getElementById('idCmPais').value;

    // generate a table with the results of the form
    // put each value in a cell of the table, in separate rows

    const mapInterests = {
        'idCkProgramacion': 'Programación',
        'idCkBD': 'Bases de Datos',
        'idCkRedes': 'Inteligencia Artificial',
        'idCkSeguridad': 'Seguridad Informática',
    }

    paises = ["El Salvador", "Guatemala", "Honduras", "Panamá", "Costa Rica", "Belice", "Nicaragua", "Otro"];

    const mapCarreras = {
        "idRdIng": "Ingeniería de Software y Negocios Digitales",
        "idRdLic": "Licenciatura en Economía y Negocios",
        "idRdTec": "Ingeniería de Negocios",
        "idRdOtro": "Otro",
    }

    let table = document.createElement('table');
    table.classList.add('table');
    let tbody = document.createElement('tbody');

    let header = document.createElement('thead');
    let trHeader = document.createElement('tr');
    let thHeader = document.createElement('th');
    thHeader.textContent = "Campo";
    trHeader.appendChild(thHeader);

    let thHeader2 = document.createElement('th');
    thHeader2.textContent = "Valor";
    trHeader.appendChild(thHeader2);

    header.appendChild(trHeader);

    table.appendChild(header);

    let trNombres = document.createElement('tr');
    let tdNombres = document.createElement('td');
    tdNombres.textContent = "Nombres";
    trNombres.appendChild(tdNombres);

    let tdNombresValor = document.createElement('td');
    tdNombresValor.textContent = nombres;
    trNombres.appendChild(tdNombresValor);
    
    tbody.appendChild(trNombres);

    let trApellidos = document.createElement('tr');
    let tdApellidos = document.createElement('td');
    tdApellidos.textContent = "Apellidos";
    trApellidos.appendChild(tdApellidos);

    let tdApellidosValor = document.createElement('td');
    tdApellidosValor.textContent = apellidos;
    trApellidos.appendChild(tdApellidosValor);

    tbody.appendChild(trApellidos);

    let trFechaNac = document.createElement('tr');
    let tdFechaNac = document.createElement('td');
    tdFechaNac.textContent = "Fecha de Nacimiento";
    trFechaNac.appendChild(tdFechaNac);

    let tdFechaNacValor = document.createElement('td');
    tdFechaNacValor.textContent = fechaNac;
    trFechaNac.appendChild(tdFechaNacValor);

    tbody.appendChild(trFechaNac);

    let trCorreo = document.createElement('tr');
    let tdCorreo = document.createElement('td');
    tdCorreo.textContent = "Correo Electrónico";
    trCorreo.appendChild(tdCorreo);

    let tdCorreoValor = document.createElement('td');
    tdCorreoValor.textContent = correo;
    trCorreo.appendChild(tdCorreoValor);

    tbody.appendChild(trCorreo);

    let trPassword = document.createElement('tr');
    let tdPassword = document.createElement('td');
    tdPassword.textContent = "Contraseña";
    trPassword.appendChild(tdPassword);

    let tdPasswordValor = document.createElement('td');
    tdPasswordValor.textContent = password;
    trPassword.appendChild(tdPasswordValor);

    tbody.appendChild(trPassword);

    let trIntereses = document.createElement('tr');
    let tdIntereses = document.createElement('td');
    tdIntereses.textContent = "Intereses";
    trIntereses.appendChild(tdIntereses);

    let tdInteresesValor = document.createElement('td');
    let ulIntereses = document.createElement('ul');
    checkboxes.forEach(checkbox => {
        let li = document.createElement('li');
        li.textContent = mapInterests[checkbox.id];
        ulIntereses.appendChild(li);
    });
    tdInteresesValor.appendChild(ulIntereses);
    trIntereses.appendChild(tdInteresesValor);
        
    tbody.appendChild(trIntereses);

    let trCarrera = document.createElement('tr');
    let tdCarrera = document.createElement('td');
    tdCarrera.textContent = "Carrera";
    trCarrera.appendChild(tdCarrera);

    let tdCarreraValor = document.createElement('td');
    tdCarreraValor.textContent = mapCarreras[radio[0].id];
    trCarrera.appendChild(tdCarreraValor);

    tbody.appendChild(trCarrera);

    let trPais = document.createElement('tr');
    let tdPais = document.createElement('td');
    tdPais.textContent = "País";
    trPais.appendChild(tdPais);

    let tdPaisValor = document.createElement('td');
    tdPaisValor.textContent = paises[selectPais-1];
    trPais.appendChild(tdPaisValor);

    tbody.appendChild(trPais);
    table.appendChild(tbody);

    let resultadoContainer = document.createElement('div');
    resultadoContainer.innerHTML = resultado;

    bodyModal.appendChild(resultadoContainer);
    bodyModal.appendChild(table);

    modal.show();
}

const validarFormulario = function () {
    let validateEmail = /\S+@\S+\.\S+/;

    let nombres = document.getElementById("idNombre");
    let apellidos = document.getElementById("idApellidos");
    let fechaNac = document.getElementById("idFechaNac");
    let correo = document.getElementById("idCorreo");
    let password = document.getElementById("idPassword");
    let passwordRepetir = document.getElementById("idPasswordRepetir");

    let checkboxes = document.querySelectorAll('input[type=checkbox]');
    let radio = document.getElementsByName('idRdCarrera');
    let selectPais = document.getElementById('idCmPais');

    let isValid = true;

    if (nombres.value === "") {
        nombres.focus();
        return false;
    }

    if (apellidos.value === "") {
        apellidos.focus();
        return false;
    }

    if (fechaNac.value === "") {
        fechaNac.focus();
        return false;
    } else {
        let fecha = new Date(fechaNac.value);
        let fechaActual = new Date();

        if (fecha > fechaActual) {
            fechaNac.focus();
            return false;
        }
    }

    if (correo.value === "" || !validateEmail.test(correo.value)) {
        correo.focus();
        return false;
    }

    if (password.value === "") {
        password.focus();
        return false;
    } else {
        if (password.value !== passwordRepetir.value) {
            passwordRepetir.focus();
            return false;
        }
    }


    let isChecked = false;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            isChecked = true;
        }
    });

    if (!isChecked) {
        return false;
    }

    // check that a career is selected 
    let radioChecked = false;
    radio.forEach(radio => {
        if (radio.checked) {
            radioChecked = true;
        }
    });

    if (!radioChecked) {
        return false;
    }

    if (selectPais.value === "") {
        selectPais.focus();
        return false;
    }

    return true;
}

button.onclick = () => {
    if (validarFormulario()) {
        recorrerFormulario();
    } else {
        alert("Por favor complete los campos requeridos");
    }
}
