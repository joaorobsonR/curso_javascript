const soma = function(x, y) {
    return x + y
}

const imprirResultado = function(a, b, oprecao = soma) {
    console.log(oprecao(a, b))
}

imprirResultado(3, 4)
imprirResultado(3, 4, soma)
imprirResultado(3, 4, function(x, y) {
    return x - y
})

imprirResultado(3, 4, (x, y) => x * y) //função Arrow sempre vai ser anonima

const pessoa = {
    falar() {
        console.log('olá')
    },
    comer() {
        console.log('estou comendo')
    },
    dormir: function() {
        console.log('dormindo')
    }
}
pessoa.falar()