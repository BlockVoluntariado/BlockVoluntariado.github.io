// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-librarie
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhD4Ljx8vkN3HM2VL5SJ3HSbY8xgCewTo",
  authDomain: "blockvoluntariado.firebaseapp.com",
  projectId: "blockvoluntariado",
  storageBucket: "blockvoluntariado.firebasestorage.app",
  messagingSenderId: "780129250896",
  appId: "1:780129250896:web:9c61c03b5c98667ceceb55",
  measurementId: "G-PWSKFPJGDF",

  databaseURL: "https://blockvoluntariado-default-rtdb.firebaseio.com/"
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db= getDatabase(app);

// para guardar el formulario
const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;

    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const asunto = document.getElementById("asunto").value;
    const descripcion = document.getElementById("descripcion").value;

    const dbRef = ref(db, "contactos");
    const nuevo = push(dbRef);

    set(nuevo, {
        nombre,
        apellido,
        email,
        telefono,
        asunto,
        descripcion,
        fecha: new Date().toISOString()
    })
    .then(() => {
        alert("Enviado correctamente");
        form.reset();
    })
    .catch(err => {
        console.error(err);
        alert("Ocurrió un error al guardar");
    });
});