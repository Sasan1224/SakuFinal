

const db = firebase.firestore();

const user = localStorage.getItem("user");

const formLogin = document.querySelector(".formLogin");

if(!user){
    formLogin.addEventListener('submit', async function (event) {
        event.preventDefault();
        if (await validateUser(document.querySelector("#email").value, document.querySelector("#password").value )) {
            alert("Logueo exitoso");
            window.location.href = "../index.html";
        } else {
            alert("Contrasena incorrecta");
        }
    });
    
    const validateUser = async (email, password) => {

        let existe = false;
        await db.collection("users").get().then(async res => await res.forEach(doc => {
            if(doc.data().correo == email){
                if(doc.data().contrasena == password){  

                    existe =true;

                    let user = {
                        correo: doc.data().correo
                    }
                    localStorage.setItem("user", JSON.stringify(user));
                }
                
            }
        }));

        return existe;
    }
    
    document.querySelector(".input-register").addEventListener('click',function(event){
        event.preventDefault();
        goRegister();
    });
    
    function goRegister(){
        window.location.href= "../paginas/register.html";
    }    

}else{
    window.location.href = "../paginas/index.html";
}

