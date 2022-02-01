const retornaReal = num => {
    let real = num.toFixed(2)
    real = real.replace('.', ',')
    return `R$${real}`
}

console.log(retornaReal(1.01 + 0.02))

//ficou melhor
const teste = num => {
    num = num.toFixed(2).replace('.', ',')
    return `R$${num}`
}

console.log(teste(0.01 + 0.02))