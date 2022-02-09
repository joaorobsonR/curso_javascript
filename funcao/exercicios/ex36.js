const vetorNumerico = [1, 2, 3, 4, 5, 6]
const vetorNumerico2 = [1, 11, 3, 4, 5, 6, 7, 2, 9, 10]
const produto = 5

function multiplicaVetor(vetor, num) {
    for (let i = 0; i < vetor.length; i++) {
        vetor[i] = vetor[i] * num

    }
    return vetor
}

function multiElementoMaiorQue5(vetor, num) {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 5) { //pulo do gato
            vetor[i] = vetor[i] * num
        }
    }
    return vetor
}

console.log(multiplicaVetor(vetorNumerico, produto))

console.log(vetorNumerico) //atenção o vetor passado como parametro retorna mudado pela função

console.log(multiElementoMaiorQue5(vetorNumerico2, produto))