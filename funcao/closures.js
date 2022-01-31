// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação!

const x = 'Global'

function fora() {       //a função lembra de suas origens
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro //se colocar (), VAI RETORNAR UMA STRING resultado da função, daí minha função passa ser string
}

const minhaFun = fora()
console.log(minhaFun()) //vai imprimir local, pelo contexto lexico

console.log(typeof minhaFun)

console.log(fora)       //retorna funçaõ mais externa
console.log(fora())     //retorna função mais interna
console.log(fora()())   //retorna o retorna da função mais interna