// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

let firebaseConfig = {}

await fetch('http://localhost:3306/static/html/firebase_project/credentials.json')
    .then(response => response.json())
    .then(data => {
        firebaseConfig = data;
    });

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export async function registerUser(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password); 
        console.log('Usuario registrado exitosamente:', userCredential);
    } catch (err) {
        console.error('Error al registrar usuario:', err.message);
    }
}

