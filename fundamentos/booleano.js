let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...') //recurso importante para conferir cadastros
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) //verifica o verdadeiro

let nome = 'Lucas'
console.log(nome || 'Desconhecido')
/*
essa é uma pecurialidade interessante do javascript
caso o nome fosse uma string vazia o valor padrão seria Desconhecido
pois uma istring vazia retorna um valor falso. 
*/