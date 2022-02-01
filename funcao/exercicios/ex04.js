function resultadoResto(dividendo, divisor) {
    let resultado = dividendo / divisor
    let resto = dividendo % divisor
    return `resulatado = ${resultado}, resto = ${resto}`
}

console.log(resultadoResto(16, 4))