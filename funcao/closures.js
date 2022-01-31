// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação!

const x = 'Global'

function fora() {       //a função lembra de suas origens
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFun = fora()
console.log(minhaFun()) //vai imprimir local, pelo contexto lexico

console.log(typeof minhaFun)