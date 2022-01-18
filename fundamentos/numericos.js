// nessa aula é mostrado como o javascript interpreta um inteiro e float como number

const peso1 = 1.1
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //apesar de ser um ponto o resultado é um inteiro 
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2)) //retorna uma string com numero fixado de casas