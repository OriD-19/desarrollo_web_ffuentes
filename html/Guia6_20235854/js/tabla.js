const generarFila = (tipo, fila, columnas) => {
    let tr = `<tr>`;

    for (let c = 0; c <= columnas; c++) {
        if (tipo == 1) {
            if (c == 0) {
                tr += `<th scope="col" class="text-center">#</th>`;
            } else {
                tr += `<th scope="col" class="text-center">Título ${c}</td>`;
            }
        } else {
            if (c == 0) {
                tr += `<th scope="row" class="text-center">${fila}</th>`;
            } else {
                tr += `<td class="text-center">Dato ${fila},${c}</td>`;
            }
        }
    }

    return (tr += `</tr>`);
}

const generarTabla = (filas, columnas) => {
    let tabla = `
    <div class="table-responsive">
    <table class="table table-bordered table-hover table-striped">
    `;

    for (let i = 0; i <= filas; i++) {
        if (i == 0) {
            tabla += generarFila(1, i, columnas);
        } else {
            tabla += generarFila(2, i, columnas);
        }
    }

    tabla += `</table></div>`;
    return tabla;
}

const crearTabla = function() {
    let columnas = document.getElementById('idNumColumnas').value;
    let filas = document.getElementById('idNumFila').value;

    if (columnas != "" && filas != "") {
        const contenedor = document.getElementById('idDivResultado');
        contenedor.innerHTML = generarTabla(filas, columnas);
        console.log(generarTabla(filas, columnas));
    } else {
        alert("No se pudo crear la tabla, no se completaron los datos");
    }
}
