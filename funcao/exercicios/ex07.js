function baskara(a, b, c) {
    const vetor = []
    const delta = Math.pow(b, 2) - (4 * a * c)

    if(delta < 0) {
        return `Delta negativo`

    } else {
        let x1 = -b + delta/(2 * a)
        let x2 = -b - delta/(2 * a)

        vetor.push(x1.toFixed(2), x2.toFixed(2))

        return vetor
    }
}

console.log(baskara(3, -5, -6))