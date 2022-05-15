// EXERCÍCIO 1

const arrayDoReduce = [60, 4, 20, 6, 10];

function somaTudo (arr) {
    return arr.reduce(function (prev, current) {
        console.log({prev})  
        console.log({current})      


        return prev + current
    })

}

console.log(somaTudo(arrayDoReduce));

// EXERCÍCIO 2

const listaDePreços = [
    {
        nome: 'Detergente',
        preco: '4',
    },
    {
        nome: 'Leite',
        preco: '6',
    },
    {
        nome: 'Sucrilhos',
        preco: '24',
    },
    {
        nome: 'Refrigerante',
        preco: '7',
    }
]

const saldoDisponivel = 100;

function calculaSaldo (saldoDisponivel, listaDePreços){
    return listaDePreços.reduce(function(previous, current, index){
        console.log('rodada', index +1)
        console.log({previous})
        console.log({current})
        return previous - current.preco
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, listaDePreços))