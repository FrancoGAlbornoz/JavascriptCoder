function getLocalStorage(key) {

    return JSON.parse(localStorage.getItem(key))
}

function saveInLocalStorage(key, item) {

    let stringifiedItem = JSON.stringify(item)
    localStorage.setItem(key, stringifiedItem)

}



let users = getLocalStorage('users') || []

console.log(users)



let datosUser={}

//

function keyup (inputForm){

    $("#"+inputForm).children("input").each(function(){
        $(this).keyup(function(){

            datosUser[$(this).attr("name")] = $(this).val()
            renderUser()
            
        })
        
    })


}

keyup("inputReg")
keyup("inputLog")

//

document.querySelector('#Entrar').addEventListener('click', function (event) {
    event.preventDefault()

   let user = users.find(user => user.email == datosUser.email ) || {email: null , pass: null}
   console.log(datosUser)
   

   if(user.pass == datosUser.passw){
   
        //Mensaje o cartel de bienvenida
       
       const welcome =document.createElement("p")
       welcome.innerHTML="Bienvenido"
       welcome.style.color = "red"
       welcome.style.fontSize = "40px"

       mensaje.appendChild(welcome)
   
   }else{
       console.log("Error")
   }



})

//

document.querySelector('#Registrarme').addEventListener('click', function (event) {
    event.preventDefault()

   users.push(datosUser)
   console.log(datosUser)
   
    saveInLocalStorage("usuarios" , users)


   
})



//

function renderUser(){

    if(datosUser?.nombre && datosUser?.mail){
        
        $("#mensaje").html(`
       
        <h2>Datos ingresados por el usuario</h2>
    
        <p>Nombre del usuario: ${datosUser?.nombre || "Ingrese usuario"}</p>
    
        <p>Email del usuario: ${datosUser?.mail}</p>
    
        `)
    }
    
}

renderUser()

//

const URLJSON = "../database/userData.json"

$(".examp").prepend('<button id="btn1">Ejemplo</button>');

$("#btn1").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      for (const dato of misDatos) {
        $("body").append(`<div>
                                <p>Ejemplo de usuario : ${dato.usuario}</p>
                                <p> Ejemplo de e-mail : ${dato.email}</p>
                                <p> Ejemplo de password : ${dato.pass}</p>

                            </div>`)
        console.log(dato)
      }  
    }
    });
});








// ANIMACIONES
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



/*var http = new XMLHttpRequest()
var url = "../database/userData.json"
var email = document.getElementsByClassName('email')
var usuario = document.getElementsByClassName('usuario')
http.open("POST", url, true)
http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
       alert(http.responseText);
    }
}
http.send(JSON.stringify({usuario : usuario, email : email}));
$('#Registrarme').click(function(){
    var data = { usuario : $('.usuario').val(), email : $('.email').val() };
    $.ajax({
            url : '../database/userData.json',
            data : data,
            method : 'POST', //en este caso
            dataType : 'json',
            success : function(response){
                alert('BIENVENIDO')
            },
            error: function(error){
                alert('ERROR')
            }
    });
});*/


