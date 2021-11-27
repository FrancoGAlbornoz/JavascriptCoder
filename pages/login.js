class User{
    constructor(nombre, apellido , pass , email){
        this.nombre= nombre
        this.apellido = this.apellido
        this.pass = pass
        this.email = email
    }

}


/*let users = []
let user= {

    nombre: nombre.value,
    apellido: apellido.value,
    mail: mail.value,
    pass: pass.value,

}
users.push(user)*/

function registrar(){
    const nombre = document.getElementById("nombreUs")
    const apellido = document.getElementById("apellidoUs")
    const pass = document.getElementById("passUs")
    const mail = document.getElementById("mailUs")

    const mensaje= document.getElementById("mensaje")

    if(nombre.value==nombre && pass.value==pass){

        console.log("B")
        const welcome =document.createElement("p")
        welcome.innerHTML="Bienvenido"
        welcome.style.color = "red"
        welcome.style.fontSize = "40px"
    
        mensaje.appendChild(welcome)


    }else{
        console.log("Error")
    }
    

    console.log(usuario.value);
    //console.log(users)
    

}


function template(){


    let mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = `<h2>Datos del usuario</h2>
                         <p>Nombre del usuario: ${nombre}</p>
                         
                         <p>Email del usuario: ${email}</p>                       
    `;

}



