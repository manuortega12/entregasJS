// SIMULADOR

let total = 0
let monedas = [ {tc: "dolar", valor:  200} , {tc: "euro", valor: 210}]


function Cantidad(cant) {
    return cant = Number(prompt('Ingrese la cantidad que desea comprar.'))
}

function Operacion(divisa) {
    total = cant * divisa + total
    return total
}

const carrito = []

function SeguirComprando () {
    opcion = prompt('Ingrese la moneda que desea comprar: Dolar o Euro.').toLowerCase()
    switch (opcion) {
        case monedas[0].tc:
            cant = Cantidad()
            Operacion(monedas[0].valor)
            carrito.push('Selecciono ' + cant + ' dolar/dolares')
            break;
        case monedas[1].tc:
            cant = Cantidad()
            Operacion(monedas[1].valor)
            carrito.push('Selecciono ' + cant + ' euro/euros')
            break;
        default:
            console.log('Por favor ingrese una opcion correcta..');
            break;
        }

    if (confirm('Desea seguir comprando?')) {
        SeguirComprando()
    } else {
        console.log('Finalizo compra.');
        console.log(String(carrito));
    }
}

<<<<<<< HEAD
let comprar
let producto = 0
let totalParcial = 0
let acumulado = 0


while (compra(comprar) == 's') {
    producto = sumaCantidad(producto)
    totalParcial = Number(prompt('Ingrese el precio del producto seleccionado'))
    acumulado = sumaTotal(acumulado, totalParcial)
}

console.log('Usted tiene ' + producto + ' productos en el carro');
console.log('El total de su compra es de ' + acumulado + ' pesos');

=======
SeguirComprando()
>>>>>>> rama3

if (total != 0) {
    console.log('El total a pagar es de ' + total + ' pesos');
}