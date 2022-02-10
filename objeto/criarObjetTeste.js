// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome                        //atributo publico
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('caneta', 5, 0.5)
console.log(p1.getPrecoComDesconto())
console.log(p1.nome)
console.log(p1.preco) //apesar de existir esse atributo ele está encapsulado não está publico
p1.nome = 'lapis'
console.log(p1.nome) //pode ser mudado
p1.preco = 10
console.log(p1.preco) //foi criado outro atributo mas não infere aquele passado como parametro
console.log(p1.getPrecoComDesconto())

console.log(p1)