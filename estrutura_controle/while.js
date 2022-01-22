function getNumero(max, min) {
    const numGerado = Math.random() * (max - min) + min
    return Math.floor(numGerado)
}
let opcao = 0
let cont = 0

while(opcao != 5) {
    opcao = getNumero(10, 1)
    console.log(opcao)
    cont += 1
}

console.log(`a quantidade de numero sorteados ${cont}`)

// no do while é garantido que a estrutura vai rodar pelo menos uma vez
opcao = 0
do {
    opcao = getNumero(20, 5)
    console.log(opcao)
} while(opcao != 10) // legal também