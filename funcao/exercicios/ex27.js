function calculaTaxa(taxa) {
    let crescimento = 0
    switch(taxa) {
        case 1:
            crescimento = (25 + 12.5 + 5) / 3 * 0.35
            break

        case 2:
            crescimento = (25 + 12.5 + 7) / 3 * 0.35
            break
    }
    return crescimento
}

function calculaCrescimento(altura, idade, taxa) {
    let crescimento = 0
    let taxaCalculada = calculaTaxa(taxa)
    for( ; idade <= 21; idade++ ) {
        crescimento += taxaCalculada
    }
    crescimento = crescimento + altura

    return crescimento
}

crianca1 = calculaCrescimento(50, 1, 1)
crianca2 = calculaCrescimento(100, 10, 1)

console.log(crianca1.toFixed(2))
console.log(crianca2.toFixed(2))