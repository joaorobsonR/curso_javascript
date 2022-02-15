const pessoa = {
    nome: 'isis',
    idade: 2,
    peso: 12
}

console.log(Object.keys(pessoa)) //retorna as chaves
console.log(Object.values(pessoa)) //retorna os valores da chave
console.log(Object.entries(pessoa)) //retorna um arry de arrys de chave valor

Object.entries(pessoa).forEach(element => {
    console.log(element[0], element[1])
});

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(chave+': '+valor)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2020'
})

console.log(Object.keys(pessoa))

const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}

Object.assign(dest, o1, o2) //sobrescreve com o ultimo valor passado se já existir atributo
console.log(dest)