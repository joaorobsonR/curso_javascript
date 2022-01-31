function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`meu nome é ${this.nome}`)
    }
}

const pessoa1 = new Pessoa('isis pintadinha')

pessoa1.falar()

pessoa1.nome = 'Isis Ramalho'
pessoa1.falar()