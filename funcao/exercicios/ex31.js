const vetor = [23, 56, 12, 57, 19, 16, 23, 15, 41, -5, 11, 2, -22, 9, 8, 7, 4, 99, 4]

const conferenegativo = array => {
    let negativo = 0

    for(let i of array) {
        if(i < 0) {
            negativo++
        }
    }
    console.log(`qtda de negativos do vetor = ${negativo}`)
}

conferenegativo(vetor)