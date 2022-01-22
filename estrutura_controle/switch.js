const imprimirNota = function (nota) {
    switch(Math.floor(nota)) {  //Muito importante o switch não retorna um valor booleano
        case 10:
        case 9:
            return 'quadro de honra'
        case 8:
        case 7:
            return 'aprovado'
        case 6:
        case 5:
            return 'exame'
        case 4:
        case 3:
            return 'recuperação'
        case 2:
        case 1:
            return 'reprovado'
        case 0:
            return 'muito reprovado'
        default:
            return 'nota inválida'
    }
}

console.log(imprimirNota(10))
