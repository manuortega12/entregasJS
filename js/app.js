function sumaCantidad (producto) {
    producto = producto + 1
    return producto
}

function sumaTotal (acumulado, totalParcial) {
    acumulado = acumulado + totalParcial
    return acumulado
}

function compra(comprar) {
    comprar = prompt('Desea agregar productos al carro (por SI presione S o s)').toLowerCase()
    return comprar
}

// let comprar = prompt('Desea agregar productos al carro (por SI presione S o s)').toLowerCase()
let comprar
let producto = 0
let totalParcial = 0
let acumulado = 0


while (compra(comprar) == 's') {
    producto = sumaCantidad(producto)
    totalParcial = Number(prompt('Ingrese el precio del producto seleccionado'))
    acumulado = sumaTotal(acumulado, totalParcial)
    // comprar = prompt('Desea seguir agregando productos al carro (por SI presione S o s)').toLowerCase()

}

console.log('Usted tiene ' + producto + ' productos en el carro');
console.log('El total de su compra es de ' + acumulado + ' pesos');


