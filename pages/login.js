/*class User{
    constructor(nombre, apellido , pass , email){
        this.nombre= nombre
        this.apellido = apellido
        this.pass = pass
        this.email = email
    }

}*/

function getLocalStorage(key) {

    return JSON.parse(localStorage.getItem(key))
}

function saveInLocalStorage(key, item) {

    let stringifiedItem = JSON.stringify(item)
    localStorage.setItem(key, stringifiedItem)

}


let users = []
console.log(users)


let nombre = document.querySelector('#nombreUs')
nombre.addEventListener('keyup', function () {

    console.log(nombre.value)
 
 })

let apellido = document.querySelector('#apellidoUs')
apellido.addEventListener('keyup', function () {

    console.log(apellido.value)

})

let mail = document.querySelector('#mailUs')
mail.addEventListener('keyup', function () {

    console.log(Number(mail.value))

})

let pass = document.querySelector('#passUs')
pass.addEventListener('keyup', function () {

    console.log(Number(pass.value))

})

let btn = document.querySelector("#Registrarme")

btn.addEventListener('click', function (event){
    event.preventDefault()

    let user= {

        nombre: nombre.value,
        apellido: apellido.value,
        mail: mail.value,
        pass: pass.value,
    
    }
    users.push(user)

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
    
    console.log(nombre.value);
    

    
})


let mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = `<h2>Datos del usuario</h2>
                        <p>Nombre del usuario: ${nombre.value}</p>
                             
                        <p>Email del usuario: ${mail.value}</p>                       
        `;

