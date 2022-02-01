function JogosFeitos() { //vai criar um numero aleatorio e inteiro de jogos
    let quantidadeJogos = Math.random()*50
    quantidadeJogos = Math.floor(quantidadeJogos)

    return quantidadeJogos
}
let listaJogos = []

JogosFeitos()
for(let i = 0; i < JogosFeitos(); i++) { //vai adicionat valores alatorios para os jogos
    let num = Math.random()*10
    listaJogos.push(Math.floor(num))
}

console.log(listaJogos)

function verificaRecord(array) {
    let contMelhor = 0
    let record = array[0]
    let pior = array[0]
    let posicao = 0
    for(let n of array) {
        if(record < n) {
            record = n
            contMelhor += 1
        }
    }
    for(let n of array) {
        if(pior > n) {
            pior = n
            posicao = array.indexOf(pior)
        }
    }

    return `quantidade de vezes que bateu o record ${contMelhor}, posicao pior jogo ${posicao}`
}

console.log(verificaRecord(listaJogos))

listaJogos.indexOf