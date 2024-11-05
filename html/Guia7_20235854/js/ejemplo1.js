const newForm = document.getElementById('idNewForm');

const buttonCrear = document.getElementById('idBtnCrear');
const buttonAddElemento = document.getElementById('idBtnAddElement');
const buttonValidarFormulario = document.getElementById('idBtnValidar');

const cmbElemento = document.getElementById('idCmbElemento');

const tituloElemento = document.getElementById('idTituloElemento');
const nombreElemento = document.getElementById('idNombreElemento');

const modal = new bootstrap.Modal(document.getElementById('idModal'), {});

const idRegister = new Set();

const verificarTipoElemento = function() {
    let elemento = cmbElemento.value;

    if (elemento !== "") {
        modal.show();
    } else {
        alert("Debe seleccionar el elemento que se creará");
    }
}

const newSelect = function () {

    if (idRegister.has(nombreElemento.value)) {
        alert("El ID de control ya existe");
        return;
    }

    idRegister.add(nombreElemento.value);

    let addElemento = document.createElement('select');

    addElemento.setAttribute("id", `id${nombreElemento.value}`);
    addElemento.setAttribute("class", "form-select");

    for (let i = 1; i <= 10; i++) {
        let addOption = document.createElement('option');
        addOption.value = i;
        addOption.innerHTML = `Opción ${i}`;
        addElemento.appendChild(addOption);
    }

    let labelElemento = document.createElement('label');
    labelElemento.setAttribute("for", `id${nombreElemento.value}`);
    labelElemento.textContent = tituloElemento.value;

    let labelId = document.createElement('span');
    labelId.textContent = `ID de control: ${nombreElemento.value}`;

    let divElemento = document.createElement('div');
    divElemento.setAttribute("class", "form-floating");

    divElemento.appendChild(addElemento);
    divElemento.appendChild(labelElemento);

    newForm.appendChild(labelId);
    newForm.appendChild(divElemento);

}

const newRadioCheckbox = function (newElemento) {

    if (idRegister.has(nombreElemento.value)) {
        alert("El ID de control ya existe");
        return;
    }

    idRegister.add(nombreElemento.value);

    let addElemento = document.createElement('input');

    addElemento.setAttribute("id", `id${nombreElemento.value}`);
    addElemento.setAttribute("type", newElemento);
    addElemento.setAttribute("class", "form-check-input");
    addElemento.setAttribute("name", nombreElemento.value);

    let labelElemento = document.createElement('label');
    labelElemento.setAttribute("class", "form-check-label");
    labelElemento.setAttribute("for", `id${nombreElemento.value}`);

    labelElemento.textContent = tituloElemento.value;

    let labelId = document.createElement('span');
    labelId.textContent = `ID de control: ${nombreElemento.value}`;

    let divElemento = document.createElement('div');
    divElemento.setAttribute("class", "form-check");

    divElemento.appendChild(addElemento);
    divElemento.appendChild(labelElemento);

    newForm.appendChild(labelId);
    newForm.appendChild(divElemento);
}

const newInput = function (newElemento) {

    if (idRegister.has(nombreElemento.value)) {
        alert("El ID de control ya existe");
        return;
    }

    idRegister.add(nombreElemento.value);

    let addElemento = newElemento === "textarea" ? document.createElement('textarea') : document.createElement('input');

    addElemento.setAttribute("id", `id${nombreElemento.value}`);
    addElemento.setAttribute("type", newElemento);
    addElemento.setAttribute("class", "form-control");
    addElemento.setAttribute("placeholder", tituloElemento.value);

    let labelElemento = document.createElement('label');
    labelElemento.setAttribute("for", `id${nombreElemento.value}`);

    let iconLabel = document.createElement('i');
    iconLabel.setAttribute("class", "bi bi-tag");

    labelElemento.textContent = tituloElemento.value;

    labelElemento.insertAdjacentElement("afterbegin", iconLabel);

    let labelId = document.createElement('span');
    labelId.textContent = `ID de control: ${nombreElemento.value}`;

    let divElemento = document.createElement('div');
    divElemento.setAttribute("class", "form-floating mb-3");

    divElemento.appendChild(addElemento);
    divElemento.appendChild(labelElemento);

    newForm.appendChild(labelId);
    newForm.appendChild(divElemento);
}

buttonCrear.onclick = () => {
    verificarTipoElemento();
}

buttonAddElemento.onclick = () => {
    if (nombreElemento.value !== "" && tituloElemento.value !== "") {
        let elemento = cmbElemento.value;

        if (elemento === "select") {
            newSelect();
        } else if (elemento === "radio" || elemento === "checkbox") {
            newRadioCheckbox(elemento);
        } else {
            newInput(elemento);
        }
    } else {
        alert("Faltan campos por completar");
    }
};

buttonValidarFormulario.onclick = () => {
    // get all the inputs from the newForm
    let inputs = newForm.querySelectorAll('input');

    // check if each input is not empty 
    let isValid = false;

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type === "radio") {
            let radioGroup = newForm.querySelectorAll(`input[name=${inputs[i].name}]`);

            let isChecked = false;
            for (let j = 0; j < radioGroup.length; j++) {
                if (radioGroup[j].checked) {
                    isChecked = true;
                    break;
                } 
            }

            isValid = isChecked;
            if (!isValid) {
                break;
            }
        } else if (inputs[i].type === "checkbox") {
            isValid = inputs[i].checked;
        } else {
            isValid = inputs[i].value !== "";
        }
    }

    if (inputs.length === 0) {
        isValid = true;
    }

    if (!isValid) {
        document.querySelector("#errorValidacion").textContent = "Faltan campos por completar";
    } else {
        document.querySelector("#errorValidacion").textContent = "";
        alert("El formulario se ha completado correctamente");
    }
}

document.getElementById("idModal").addEventListener("shown.bs.modal", () => {
    nombreElemento.value = "";
    tituloElemento.value = "";

    tituloElemento.focus();
});
