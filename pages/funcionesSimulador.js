
//Funcion del menu
const showMenu = () => {

    let menu= "Por favor elige tu producto\n"
    products.forEach((product)=>{
        menu += product.id + " - " + product.name +"\n"
    })
    //.length longitud de un array, en este caso la longuitud del array products
    menu+= (products.length+1)+".-Salir"
    // El usuario ingresaa un caracter numero, lo transforma en int y lo guarda en option, y lo retorna(ID DEL PRODUCTO) a la funcion que lo llame
    let option =parseInt(prompt(menu))
    return option

}

const isStock = (qty, stock) => {
    if(qty > stock){
        alert(`No hay stock. Stock disponible  ${stock}`)
        return false
    }
    return true
}


const addCart = (option, qty) => {
    //busco el producto que tenga el mismo valor que la variable option
    const found=products.find(product => product.id == option)
    if(isStock(qty, found.stock)){
        let item= {
            qty: qty,
            price: found.price*qty,
            name: found.name

        }
        cart.push(item)
        products[option -1 ].stock-=qty
        alert(`${found.name} Agregados`)
    }
  
}

/*const ingresado= prompt("Ingrese el producto que desea buscar")
const prodIng= products.filter(product=>product.name.includes(ingresado))
document.write("<h4>Producto buscado. </h4>")

for (var products of prodIng){
    document.write("<h4> Nombre del producto buscado. </h4>")
}*/


item={}

