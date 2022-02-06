const vetor = [23, 56, 12, 57, 19, 16, 23, 15, 41, 22, 11, 2, 13, 9, 8, 7, 4, 99, 4]

const veroficaMaiorEMenor = vetor => {
    let maior = vetor[0]
    let menor = vetor[0]
    
    for(let i = 1; i < vetor.length; i++) {
        if(vetor[i] > maior) {
            maior = vetor[i]

        } else if(vetor[i] < menor) {
            menor = vetor[i]

        }   
    }
    return `maior elemento do vetor = ${maior}, menor elemento do vetor = ${menor}`
}

console.log(veroficaMaiorEMenor(vetor))