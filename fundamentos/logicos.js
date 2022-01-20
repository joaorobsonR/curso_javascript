function compraTV(terca, quinta) {
    let sorvete = terca || quinta

    if(terca && quinta) {
        return `compra TV50 e chupar sorvete ${sorvete}`

    } else if(terca != quinta) {
        return `compra TV32 e chupar sorvete ${sorvete}` //o ou exclusivio é fundamental para entra nessa condição

    } else {
        return `não vai comprar TV e sorvete ${sorvete}`
    }
}

console.log(compraTV(false, false))

//exemplo do professor
function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))