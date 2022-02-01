const jurosSimples = (capital, taxa, tempo) => {
    let caluculoJuros = capital * taxa/100 * tempo + capital
    
    return `valor aplicado em juros simples R$${caluculoJuros}`
}

const jurosComposto = (capital, taxa, tempo) => {
    let montante = capital * Math.pow((1 + taxa/100), tempo)

    return `valor aplicado em juros composto R$${montante.toFixed(2)}`
}

console.log(jurosSimples(1000, 2, 48))
console.log(jurosComposto(1000, 2, 48))