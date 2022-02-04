function calculaDelta(a, b, c) {
    let delta = Math.pow(b, 2) - (4 * a * c)

    return delta
}

function baskara(a, b, c) {
    let vetor = []
    let delta = calculaDelta(a, b, c) //chamndo a função calcularDelta

    if(delta < 0) {
        console.log('delta negativo')

    } else {
        let x1 = -b + delta/(2 * a)
        let x2 = -b - delta/(2 * a)
        vetor.push(x1.toFixed(2), x2.toFixed(2))
        console.log(vetor)
    }
}

baskara(1, 2, -5)