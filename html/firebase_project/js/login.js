import { registerUser, loginUser } from "./firebase.js";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    alert("Datos capturados: " + email);
    // await loginUser(email, password);
});

document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    const status = await registerUser(email, password, firstName, lastName);

    if (status) {
        alert("Usuario registrado exitosamente");
    } else {
        alert("Ya exist un usuario asociado con este correo");
    }
});
