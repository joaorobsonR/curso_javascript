function arredondaNota(nota) {
    let resto = nota % 5
    if(resto > 2) {
        for(; (nota % 5) !== 0; nota++);
    }
    return nota
}

const notaArredondada = arredondaNota(38)

function verificaNota(nota) {
    if(nota < 40) {
        console.log('aluno reprovado')
    } else {
        console.log('aluno aprovado')
    }
}

verificaNota(notaArredondada)
console.log(notaArredondada)