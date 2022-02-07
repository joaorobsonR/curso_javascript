const vetorInt = [1, 2, 3, 4]
const vetorString = ['a', 'b', 'c', 'd']
const vetorDouble = [0.1, 0.2, 0.3, 0.4]

function concatenar(vetor1, vetor2, vetor3) {
    let vetorResultado1 = []
    let vetorResultado2 = []

    vetorResultado1 = vetor1.concat(vetor2.concat(vetor3))

    for(let i = 0; i < vetor1.length; i++) {
        vetorResultado2 += vetor1[i] + vetor2[i] + vetor3[i]
    }

    console.log(vetorResultado1)
    console.log(vetorResultado2)
}

concatenar(vetorInt, vetorString, vetorDouble)