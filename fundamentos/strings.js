const escola = 'cod3r'

console.log(escola.charAt(4)) //retorna o valor da string
console.log(escola.charAt(5)) //retorna o valor vazio sem gerar  erro
console.log(escola.charCodeAt(3)) //retorna o valor da tabela ask
console.log(escola.indexOf('d')) //retorna o indice se tiver o caractre na string

console.log(escola.substring(1)) //retorna uma substring do 1 para frente
console.log(escola.substring(0, 3)) //retorna uma substring de 0 até 3

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + '!')
console.log('Escola', escola,'!')
console.log(escola.replace('3', 'e')) //substitui o valor na string

console.log('ana, maria, joão, isis'.split(',')) //cria um array usando a virguna para separar

//template string

console.log(`Escola ${escola} !`) //muito melhor

console.log(escola.toUpperCase())