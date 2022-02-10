let vetorNotasClasse = [2, 3, 6, 9, 8, 7, 10, 2, 5, 4]

function classificaNotas(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] > 0 && vetor[i] <= 4.9) {
            console.log(`nota ${vetor[i]} conceito D`)

        } else if (vetor[i] >= 5 && vetor[i] <= 6.9) {
            console.log(`nota ${vetor[i]} conceito C`)

        } else if (vetor[i] >= 7 && vetor[i] <= 8.9) {
            console.log(`nota ${vetor[i]} conceito B`)

        } else if (vetor[i] >= 9 && vetor[i] <= 10) {
            console.log(`nota ${vetor[i]} conceito A`)
        }
    }
}

classificaNotas(vetorNotasClasse)