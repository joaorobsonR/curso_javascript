//função favtory(fabrica)

function produto(nome, preco) {

    return {
        nome,
        preco,
        desconto: 0.8 * preco
    }
}

console.log(produto('caneta', 1.8))
console.log(produto('mochila', 100))