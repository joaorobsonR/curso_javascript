const vetor = [1, 23, 56, 12, 57, 19, 16, 23, 15, 41, 22, 11, 2, 13, 9, 8, 7, 4, 0, 4]

function organizaVetor(vetor) {
    let contDentro  = []
    let contFora = []
    for(let i of vetor) {
        if(i >= 10 && i <=20) {
            contDentro.push(i)

        } else {
            contFora.push(i)
        }
    }
    console.log(contDentro)
    console.log(contFora)
}

organizaVetor(vetor)