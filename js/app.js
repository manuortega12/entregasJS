// SIMULADOR

let total = 0

class Moneda {
    constructor(divisa, precio) {
        this.divisa = divisa
        this.precio = precio
    }
}

const moneda1 = new Moneda('dolar', 200)
const moneda2 = new Moneda('euro', 210)


const divisas = [moneda1, moneda2]
const contenedor = document.querySelector('#contenedor')


const verMonedas = () => {
    divisas.forEach((divisa) => {
        const card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = `
            <h3 class='cardTitle'>${divisa.divisa}</h3>
            <span class='cardPrice'>$${divisa.precio}</span>
            <button class='boton'>Seleccione</button>
        `
        contenedor.append(card)
    })
    
}

const botonVer = document.querySelector('#verProd')
botonVer.addEventListener('click', verMonedas)


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
        case moneda1.divisa:
            cant = Cantidad()
            Operacion(moneda1.precio)
            carrito.push('Selecciono ' + cant + ' dolar/dolares')
            break;
        case moneda2.divisa:
            cant = Cantidad()
            Operacion(moneda2.precio)
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



