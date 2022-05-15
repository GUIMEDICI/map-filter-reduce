const arrayDeNumeros2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

function retornaPar(arr) {
    return arr.filter(function (item) { 
        return item % 2 === 0
    })
}

console.log(retornaPar(arrayDeNumeros2))

// Outra forma que podemos ter de sintaxe, de forma a abstrair o código um pouco e separar os elementos é:

const arrayNovo = [64, 57, 90, 82]

function filtraPar(arr2) {
    return arr2.filter(callback)
}

function callback(item) {
    return item % 2 === 0
}

console.log(filtraPar(arrayNovo))