class Moneda {
    constructor(divisa, precio, id) {
        this.divisa = divisa
        this.precio = precio
        this.id = id
    }
}

const dolarUSA = new Moneda('Dolar', 122.45, '01')
const euro = new Moneda('Euro', 128.81, '02')
const real = new Moneda('Real', 24.55, '03')
const libraEsterlina = new Moneda('Libra Esterlina', 150.81, '04')
const yenJapan = new Moneda('Yen Japones', 0.91, '05')
const yuanChina = new Moneda('Yuan Chino', 18.25, '06')
