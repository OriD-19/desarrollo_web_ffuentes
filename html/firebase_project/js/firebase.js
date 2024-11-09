// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

let firebaseConfig = {}

await fetch('http://localhost:3306/static/html/firebase_project/credentials.json')
    .then(response => response.json())
    .then(data => {
        firebaseConfig = data;
    });

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export async function registerUser(email, password, firstName, lastName) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password); 
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
            firstName: firstName,
            lastName: lastName,
            role: "user",
        });
        console.log('Usuario registrado exitosamente:', userCredential);
    } catch (err) {
        console.error('Error al registrar usuario:', err.message);
    }
}

export async function loginUser(email, password) {
    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredentials.user;
        console.log("Inicio de sesión exitoso");
    } catch (e) {
        console.error("Error al iniciar sesión:", e.message);
    }
}
