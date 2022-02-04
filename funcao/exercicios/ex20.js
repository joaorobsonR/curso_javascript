function caixaEletrnico(saque) {
    let contNota100 = 0
    let contNota50 = 0
    let contNota10 = 0
    let contNota5 = 0
    let contNota1 = 0
    if(saque >= 100) {
        for( ; saque >= 100; saque -= 100) {
            contNota100++
        }
    }
    if(saque >= 50) {
        saque -= 50
        contNota50++
    }
    if(saque >= 10) {
        for( ; saque >= 10; saque -= 10) {
            contNota10++
        }
    }
    if(saque < 10 && saque >= 5) {
        saque -= 5
        contNota5++
    }
    if(saque < 5) {
        for(; saque !== 0; saque--) {
            contNota1++
        }
    }
    return `notas de 100 = ${contNota100}
notas de 50 = ${contNota50}
notas de 10 = ${contNota10}
notas de 5 = ${contNota5}
notas de 1 = ${contNota1}`
}

console.log(caixaEletrnico(709))

