

const db = firebase.firestore();

const user = localStorage.getItem("user");

document.querySelector(".input-login").addEventListener('click', function (event) {
    if (validateUser(document.querySelector("#email").textContent)) {
        event.preventDefault();
        alert("Logueo exitoso");
        window.location.href = "../index.html";
    } else {
        alert("Contrasena incorrecta");
    }
});

const validateUser = async (email, password) => {
    let existe = false;
    await db.collection("students").where('correo', '==', email).get().then(async (snapshot) => {
        let st = snapshot.docs[0];
        if (st !== undefined) {
            localStorage.setItem("user", JSON.stringify(st));
            existe = true
        }
    });
    return existe;
}

document.querySelector(".input-register").addEventListener('click',function(event){
    event.preventDefault();
    goRegister();
});

function goRegister(){
    window.location.href= "../paginas/register.html";
}
