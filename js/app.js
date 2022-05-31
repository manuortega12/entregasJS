// SIMULADOR

let total = 0

divisa1 = ['dolar', 200]
divisa2 = ['euro', 210]

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
        case divisa1[0]:
            cant = Cantidad()
            Operacion(divisa1[1])
            carrito.push('Selecciono ' + cant + ' dolar/dolares')
            break;
        case divisa2[0]:
            cant = Cantidad()
            Operacion(divisa2[1])
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

SeguirComprando()

if (total != 0) {
    console.log('El total a pagar es de ' + total + ' pesos');    
}