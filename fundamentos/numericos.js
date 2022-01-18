// nessa aula é mostrado como o javascript interpreta um inteiro e float como number

const peso1 = 1.1
const peso2 = Number('2.0') //função Number

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //apesar de ser um ponto o resultado é um inteiro 
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2)) //retorna uma string com numero fixado de casas
console.log(media.toString(2)) //retorna binario

//pecurialidade do javascript

console.log(7 / 0) //gera um valor infinito
console.log('10.2' / 2) //funciona
console.log('show' * 2) //não funciona igual python
console.log(0.1 + 0.7)  // gera uma imprecisão

//console.log(10.toFixed(2)) //não funciona
console.log((10).toFixed(2)) //com parenteses funciona

// um pouco de Math

const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)
console.log(area)