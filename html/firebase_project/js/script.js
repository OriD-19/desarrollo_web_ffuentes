import { registerUser, loginUser } from "./firebase.js";

async function register() {
    await registerUser('fernando2010@gmail.com', '123456');
}

async function login() {
    await loginUser('fernando2010@gmail.com', '123456');
}

login();
