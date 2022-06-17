
const divisas = [dolarUSA, euro, real, libraEsterlina, yenJapan, yuanChina]
const carrito = []

const divisasListConteiner = document.querySelector('.menu')
const cardName = document.querySelector('.cardName')
const cardId = document.querySelector('.cardId')
const cardCTA = document.querySelector('.cardCTA')
const carroContainer = document.querySelector('.carroContainer')
 

const monedaButton = document.querySelector('.menuTab')


const renderizarListDivisas = () => {
    divisas.forEach((divisa) =>{
        const monedaButton = document.createElement('button')
        monedaButton.className = 'menuTab'
        monedaButton.setAttribute('data-id', divisa.id)
        monedaButton.innerHTML = `
            <span class='menuTabTex'>${divisa.divisa} </span>
        `
        divisasListConteiner.append(monedaButton)
    })
    agregarListenerBotones()
}

const renderizarDatosDivisas = (e) => {
    const divisaIdSelected = e.target.closest('.menuTab').getAttribute('data-id')
    const divisaSelected = divisas.find((divisa) => divisa.id == divisaIdSelected)

    cardName.textContent = divisaSelected.divisa
    cardId.textContent = `Moneda #${divisaSelected.id}`
    cardCTA.setAttribute('data-id', divisaSelected.id)
}


agregarDivisaCarrito = (e) => {
    const divisaIdSelected = e.target.getAttribute('data-id')
    const divisaSelected = divisas.find((divisa) => divisa.id == divisaIdSelected)
    carrito.push(divisaSelected)
    localStorage.setItem('carrito', JSON.stringify(carrito))

}

const agregarListenerBotones = () => {
    const monedaButton = document.querySelectorAll('.menuTab')
    monedaButton.forEach((button) =>{
        button.addEventListener('click', renderizarDatosDivisas)
    })   
}

cardCTA.addEventListener('click', agregarDivisaCarrito)

renderizarListDivisas()

