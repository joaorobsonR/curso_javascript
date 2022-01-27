const notasClasse = [2, 5.5, 8, 6, 4, 9, 8.8, 1.5, 7]

function notasBaixas1(notas) {
    const notabaixa = []
    for(let i in notas) {
        if(notas[i] < 7) {
            notabaixa.push(notas[i])
        }
    }
    return notabaixa
} 

const notasBaixas2 = notasClasse.filter(function (nota) { //filtra os elementos de um array
    return nota < 7
})

const notaMenorQue7 = nota => nota < 7
const notasBaixas3 = notas = notasClasse.filter(notaMenorQue7)

console.log(notasBaixas1(notasClasse)) //função
console.log(notasBaixas2) //array
console.log(notasBaixas3) //array

// com arrow
//const nomeNovoArray = parametro = array.filter(fução callback retorna boolean)