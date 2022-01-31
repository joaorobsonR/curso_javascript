class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('joão')
p1.falar() //agora pode usar o metodo da classe

const criarNome = nome => { //função arrow
    return {
        falar: () => console.log(`meu nome é ${nome}`)
    }
}

const p2 = criarNome('isis')
p2.falar()