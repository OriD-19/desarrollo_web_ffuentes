const buttonAgregarPagina = document.querySelector("#idAgregarPagina");
const buttonMenu = document.querySelector("#idAgregarMenu");
const buttonTitulo = document.querySelector("#idAgregarTitulo");
const buttonParrafo = document.querySelector("#idAgregarParrafo");

const pagina = document.querySelector("#idPagina");

buttonAgregarPagina.addEventListener("click", () => {
    const contenedorVerificando = document.querySelector("idDivPage");

    if (!contenedorVerificando) {
        const contenedor = document.createElement("div");
        contenedor.setAttribute("id", "idDivPage");
        contenedor.setAttribute("class", "container");
        contenedor.setAttribute("style", 
        "border:solid 1px black; height: 500px; overflow: scroll; overflow-x: hidden;");
        
        pagina.appendChild(contenedor);
    } else {
        alert("Ya se agrego el contenedor de la pagina");
    }
});

buttonMenu.addEventListener("click", () => {
    const contenedor = document.querySelector("#idDivPage");

    if (contenedor) {
        const menuVerificar = document.querySelectorAll("#idDivPage > header");

        if (menuVerificar.length === 0) {
            const menu = document.querySelector("header").cloneNode(true);
            contenedor.appendChild(menu);
        }
    } else {
        alert("Primero debes agregar el contenedor de la pagina");
    }
});

buttonTitulo.addEventListener("click", () => {
    const contenedor = document.querySelector("#idDivPage");

    if (contenedor) {

        const menu = document.querySelectorAll("#idDivPage > header");

        if (menu) {
            if (menu.length > 0) {
                let titulo = prompt("Agregue el título de la página");

                if (titulo !== "" && titulo !== null) {
                    const h1 = document.createElement("h1");

                    h1.setAttribute("class", "display-5 text-center fw-bold py-4 my-4");
                    h1.innerHTML = titulo;

                    contenedor.appendChild(h1);
                } else {
                    alert("No se ha registrado ningún título. Por favor, ingrese información");
                }
            } else {
                alert("Primero debes agregar el menú de la pagina");
            }
        }
    } else {
        alert("Primero debes agregar el contenedor de la pagina");
    }
});

buttonParrafo.addEventListener("click", () => {
    const contenedor = document.querySelector("#idDivPage");

    if (contenedor) {
        const menu = document.querySelectorAll("#idDivPage > header");

        if (menu) {
            if (menu.length > 0) {
                let parrafo = prompt("Agregue un párrafo a su página web");

                if (parrafo !== "" && parrafo !== null) {
                    const p = document.createElement("p");

                    p.setAttribute("class", "lead mb-4 py-4");
                    p.innerHTML = parrafo;

                    contenedor.appendChild(p);
                } else {
                    alert("No se ha registrado ningún párrafo. Por favor, ingrese información");
                }
            } else {
                alert("Primero debes agregar el menú de la pagina");
            }
        }
    } else {
        alert("Primero debes agregar el contenedor de la pagina");
    }
});
