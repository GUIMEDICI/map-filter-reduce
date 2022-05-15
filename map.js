const arrayDeNumeros = [3, 5, 8, 13, 21, 34]

const double = arrayDeNumeros.map((num) => (num * 2))

console.log(double)

// USANDO O thisArg podemos ver o exemplo abaixo:

const tenis = {
    value: 20,
}

const sapato = {
    value: 30,
}

function mapComThis(arrayDeNumeros, tenis) {
    return arrayDeNumeros.map(function (item) {
        return item * this.value
    }, tenis)
}

console.log(mapComThis(arrayDeNumeros, tenis))
console.log(mapComThis(arrayDeNumeros, sapato))

// SEM USAR O thisArg (mais comum e usado):

function mapSemThis(arrayDeNumeros) {
    return arrayDeNumeros.map(function (item) {
        return item * 10
    })
}

console.log(mapSemThis(arrayDeNumeros))
