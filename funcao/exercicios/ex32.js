const vetor = [23, 56, 12, 57, 19, 16, 23, 15, 41, 22, 11, 2, 13, 9, 8, 7, 4, 99, 4]

function mediaAritmetica(vetor) {
    let soma = 0
    for(let i of vetor) {
        soma += i
    }
    soma = soma / vetor.length
    return soma
}

console.log(mediaAritmetica(vetor))