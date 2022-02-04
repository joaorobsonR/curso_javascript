function mediaCalculada(n1, n2, n3) {
    let maior = n3
    let media = 0

    if(n1 > n2 && n1 > n3) {
        maior = n1
        media = mediaPonderada(maior, n2, n3)

    } else if(n2 > n1 && n2 > n3) {
        maior = n2
        media = mediaPonderada(maior, n1, n3)

    } else {
        media = mediaPonderada(maior, n1, n2)

    }
    return media
}

function mediaPonderada(maior, n1, n2) {
    let media = (maior * 4 + (n1 + n2) * 3) / 10
    
    return media
}

function verificaAluno(n1, n2, n3) {
    let verifica = mediaCalculada(n1, n2, n3)

    if(verifica >= 5) {
        console.log(`Aluno APROVADO media ${verifica}, notas: ${n1}, ${n2}, ${n3}`)

    } else if(verifica < 5) {
        console.log(`Aluno REPROVADO media ${verifica}, notas: ${n1}, ${n2}, ${n3}`)

    }
}

verificaAluno(6, 1, 2)