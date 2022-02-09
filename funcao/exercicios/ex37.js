function progressaoAritmetica(n, a1, r) {
    let sequencia = [a1]
    for (let i = 1; i < n; i++) {
        sequencia.push(a1 + i * r)
    }
    let soma = (a1 + (a1 + (n - 1) * r)) / 2 * n
    console.log(sequencia, 'a soma da PA =', soma)
}

function progressaoGeometrica(n, a1, q) {
    let sequencia = [a1]
    for (let i = 1; i < n; i++) {
        sequencia.push(a1 * Math.pow(q, i))
    }
    let soma = (a1 * (Math.pow(q, n) - 1)) / (q - 1)
    console.log(sequencia, 'a soma da PG =', soma)
}

progressaoAritmetica(5, 1, 2)
progressaoGeometrica(5, 1, 2)