let vetor1 = [1, 2, 3, 6, 9, 7]
let vetor2 = [9, 1, 9, 7, 4, 6]

function trocaValor(vetor1, vetor2) {
    for (let i = 0; i <= vetor1.length; i++) {
        [vetor1[i], vetor2[i]] = [vetor2[i], vetor1[i]]
    }
    console.log(vetor1)
    console.log(vetor2)
}

trocaValor(vetor1, vetor2)