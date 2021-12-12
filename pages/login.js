function getLocalStorage(key) {

    return JSON.parse(localStorage.getItem(key))
}

function saveInLocalStorage(key, item) {

    let stringifiedItem = JSON.stringify(item)
    localStorage.setItem(key, stringifiedItem)

}

let users = []
console.log(users)

if (getLocalStorage('users')) {

    users = getLocalStorage('users')

}


let nombre = document.querySelector('#nombre')
 nombre.addEventListener('keyup', function () {

  console.log(nombre.value)

})

let apellido = document.querySelector('#usuario')

usuario.addEventListener('keyup', function () {

    console.log(usuario.value)

})

let mail = document.querySelector('#mail')

mail.addEventListener('keyup', function () {

    console.log(Number(mail.value))

})

let pass = document.querySelector('#pass')

pass.addEventListener('keyup', function () {

    console.log(Number(pass.value))

})



let btn = document.querySelector('#Registrarme')

btn.addEventListener('click', function (event) {
 event.preventDefault()

   let user = {

     nombre: nombre.value,
     usuario: usuario.value,
     mail: mail.value,
     pass: pass.value,

   }

   users.push(user)
   saveInLocalStorage('users', users)

   const mensaje= document.getElementById("mensaje")
   
   if(nombre==nombre.value && pass==pass.value){
   
       console.log("B")
       const welcome =document.createElement("p")
       welcome.innerHTML="Bienvenido"
       welcome.style.color = "red"
       welcome.style.fontSize = "40px"

       mensaje.appendChild(welcome)
   
   }else{
       console.log("Error")
   }

})


let mensaje = document.getElementById("mensaje");
   mensaje.innerHTML = `<h2>Datos del usuario</h2>
                       <p>Nombre del usuario: ${nombre.value}</p>
                            
                       <p>Email del usuario: ${mail.value}</p>                       
       `;



//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

   //FUNCIONES

function anchoPage(){

   if (window.innerWidth > 850){
       caja_trasera_register.style.display = "block";
       caja_trasera_login.style.display = "block";
   }else{
       caja_trasera_register.style.display = "block";
       caja_trasera_register.style.opacity = "1";
       caja_trasera_login.style.display = "none";
       formulario_login.style.display = "block";
       contenedor_login_register.style.left = "0px";
       formulario_register.style.display = "none";   
   }
}

anchoPage();


   function iniciarSesion(){
       if (window.innerWidth > 850){
           formulario_login.style.display = "block";
           contenedor_login_register.style.left = "10px";
           formulario_register.style.display = "none";
           caja_trasera_register.style.opacity = "1";
           caja_trasera_login.style.opacity = "0";
       }else{
           formulario_login.style.display = "block";
           contenedor_login_register.style.left = "0px";
           formulario_register.style.display = "none";
           caja_trasera_register.style.display = "block";
           caja_trasera_login.style.display = "none";
       }
   }

   function register(){
       if (window.innerWidth > 850){
           formulario_register.style.display = "block";
           contenedor_login_register.style.left = "410px";
           formulario_login.style.display = "none";
           caja_trasera_register.style.opacity = "0";
           caja_trasera_login.style.opacity = "1";
       }else{
           formulario_register.style.display = "block";
           contenedor_login_register.style.left = "0px";
           formulario_login.style.display = "none";
           caja_trasera_register.style.display = "none";
           caja_trasera_login.style.display = "block";
           caja_trasera_login.style.opacity = "1";
       }
}






