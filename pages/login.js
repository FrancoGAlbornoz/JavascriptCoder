class User{
    constructor(nombre, genero, edad, dni, email){
        this.nombre= nombre
        this.genero= genero
        this.edad= edad
        this.dni = dni
        this.email = email
    }

}

const user=[]
alert("Registrate")
const nombreUs= prompt("Ingrese su nombre y apellido")
const generoUs= prompt("Ingresa tu genero")
const edadUs= prompt("Ingresa tu edad")
const dniUs= prompt("Ingresa tu dni")
const emailUs= prompt("Ingresa tu email")
user.push(new User(nombreUs,generoUs,edadUs,dniUs,emailUs))

console.log(user)