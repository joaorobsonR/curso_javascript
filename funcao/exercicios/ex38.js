function imprimirImpar(inicio = 0, fim = 100) {
    if (inicio > fim) {
        [inicio, fim] = [fim, inicio]
    }
    for (; inicio <= fim; inicio++) {
        if (inicio % 2 !== 0) {
            console.log(inicio)
        }
    }
}

imprimirImpar(45, 13)