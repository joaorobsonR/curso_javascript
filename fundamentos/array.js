const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) //mostra os valores
console.log(valores[4]) //mostra undefined

valores[4] = 10
console.log(valores)
console.log(valores.length) // mostra a tamanho do array

valores.push({id: 3}, false, null, 'teste') //aceita varios tipos no mesmo array
console.log(valores)

console.log(valores.push(100)) //adiciona no ultimo elemento
console.log(valores.pop()) //retira o ultimo elemento do array
delete valores[0] //deleta o elemento do indice
console.log(valores)

console.log(typeof valores) //array é um tipo objeto

//muitos mais tipos que serão vistos mais adiante