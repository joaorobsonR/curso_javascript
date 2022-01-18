let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)

/*
no começo da aula foi explicado um conceito muito importante
sobre atribuição de variavéis.
atribuição por valor: quando atribuimos variáveis  que tem valores primitivos
atribuição por referência: quando os valores são do tipo objeto, função, 
quando atribuimos para outra variável, estamos atribuindo apenas o endereço
de memoria, ou seja caso um valor é mudado nao outra variável as duas ocorreram
a mudança no valor.
*/

let a ={
    nome: 'joão'
}

let b = a //só vai receber o endereço de memoria de a

console.log(a)
console.log(b)

b.nome = 'isis' //vai mudar em a também e se mudaçe em a também mudari em b

console.log(a)
console.log(b) //explicando o que foi dito antes