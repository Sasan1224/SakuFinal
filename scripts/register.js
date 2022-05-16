const db = firebase.firestore();

const formRegister = document.querySelector(".registerForm");

formRegister.addEventListener("submit",async function(event){
    event.preventDefault();
    let email = formRegister["email"].value;
    let password = formRegister["password"].value;
    db.collection("users").doc().set({
        correo:email,
        contrasena: password
    })
    alert("Registrado con exito!");
    window.location.href = "../paginas/login.html";
})