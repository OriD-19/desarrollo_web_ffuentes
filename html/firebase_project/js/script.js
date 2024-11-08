import { registerUser } from "./firebase.js";

async function register() {
    await registerUser('fernando2010@gmail.com', '123456');
}

register();
