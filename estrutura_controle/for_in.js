const array = [2, 56, 9, 8, 7, 89, 9, 7, 23]

for (let i in array) { //o let garante que a variável i será usada somente nesse bloco
    console.log(i, array[i]) 
}

const pessoa = {
    nome: 'joão',
    idade: 29,
    profissão: 'inss'
}

for(let i in pessoa) { //legal o obleto responde como o array
    console.log(i, pessoa[i])
}