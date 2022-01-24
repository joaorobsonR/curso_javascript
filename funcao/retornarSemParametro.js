//função que retorna valores sem passar parametros/argumentos, que loucura!!

function somar() {
    let soma = 0
    for(let i in arguments) {
        soma  += arguments[i]
    }
    return soma
}

console.log(somar())
console.log(somar(1))
console.log(somar(5, 5, 1.8))

console.log(58, 'teste')
console.log('ola','teste', 'de', 'função')