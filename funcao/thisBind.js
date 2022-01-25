const pessoa = {
    saudacao: 'buenos dias',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar

falar() //conflito entre funcional e poo

const falarDePessoa = pessoa.falar.bind(pessoa) //vai amarrar o this do objeto pessoa, não deixando surgir conflito
