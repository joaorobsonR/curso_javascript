const pessoa = {
    nome: 'maria',
    idade: 29,
    endereco: {
        rua: 'das camelias',
        numero: 181
    }
}
console.log(pessoa)

const {nome, idade} = pessoa //retirar de pessoa esses atributos, isso é uma estrutura des...

console.log(nome, idade * 3)

//destructuring é desustruturar/retirar do objeto ou do array para poder acessar de forma mais rapída
//sem a necessidade de usar ponto

function rand({min, max = 1000}) { //cria uma função com uma estrutura destructurin 
    let vaalorRand = Math.random() * (max - min) + min
    return Math.floor(vaalorRand) //para arredondar para baixo
}

const obj = {min: 50, max: 100}
console.log(rand(obj))

//com array

function rad([minimo = 0, maximo = 1000]) {
    if(minimo > maximo)
        [maximo, minimo] = [minimo, maximo]
    let vaalorRand = Math.random() * (maximo - minimo) + maximo
    return Math.floor(vaalorRand)
}

const array = [100, 29]
console.log(rad(array))