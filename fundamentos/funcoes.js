//basico sobrre função

function imprimirSoma(a, b) { //função sem retorno
    console.log(a + b)
}

function soma(a, b = 1) { //função com retorno
    return a + b
}

imprimirSoma(10, 2)
let resultadoSoma = imprimirSoma(10, 2)
console.log(resultadoSoma)  //retorna um undefined

let resultadoRetorno = soma(10, 3)
console.log(resultadoRetorno) //agora sim

