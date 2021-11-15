let resp='si'

const selectedQty = 'Cantidad'

let cart= []


let products= [

    {id:1 , name:'Teclado MarvoScorpion', price:3500 , stock:12},
    {id:2 , name:'Mouse Logitech MX Anyw', price:4500 , stock:5},
    {id:3 , name:'Mouse XPGamer', price:3500 , stock:10},
    {id:4 , name:'Auriculares Gamemax G200', price:4000 , stock:9},
    {id:5 , name:'Microfono HyperX QuadCast', price:8500 , stock:10},
    {id:6 , name:'Teclado Redragon K552 Kumara', price:9000 , stock:8},
    
]

alert("Bienvenido a E-Tienda")

do{

    let option =showMenu()
    if(option===(products.length+1)){
        break
    } 
    let qty = parseInt(prompt(selectedQty))
    addCart(option,qty)
    
    res= prompt("Desea continuar agregando productos al carrito? si/no \n")
    
}while(resp=== 'si')

console.log(cart)























