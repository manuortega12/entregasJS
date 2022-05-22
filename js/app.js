let comprar = prompt('Desea agregar productos al carro (por SI presione S o s)').toLowerCase()
let producto = 0
let totalParcial = 0
let acumulado = 0


while (comprar == 's') {
    producto = producto + 1
    totalParcial = Number(prompt('Ingrese el precio del producto seleccionado'))
    acumulado = acumulado + totalParcial
    comprar = prompt('Desea seguir agregando productos al carro (por SI presione S o s)').toLowerCase()

}

console.log('Usted tiene ' + producto + ' productos en el carro');
console.log('El total de su compra es de ' + acumulado + ' pesos');