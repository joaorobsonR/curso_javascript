function jurosComposto(capital, taxa, mes) {
    let montante = capital * Math.pow((1 + taxa/100), mes)

    return montante
}

function valorAnuidade(mes) {
    let pagar = 0
    if(mes > 0 && mes <= 12) {
        pagar = jurosComposto(100, 5, mes)
        console.log(`valor da anuidade a ser pago é ${pagar}`)

    } else {
        console.log('valor inválido')
    }
}

function valorAnuidade2(mes) {
    let pagar = jurosComposto(100, 5, mes)
    switch(mes) {
        case 1:
            return `valor da anuidade a ser paga é ${pagar}`
        case 2:
            return `valor da anuidade a ser paga é ${pagar}`
        case 3:
            return `valor da anuidade a ser paga é ${pagar}`
        case 4:
            return `valor da anuidade a ser paga é ${pagar}`
        case 5:
            return `valor da anuidade a ser paga é ${pagar}`
        case 6:
            return `valor da anuidade a ser paga é ${pagar}`
        case 7:
            return `valor da anuidade a ser paga é ${pagar}`
        case 8:
            return `valor da anuidade a ser paga é ${pagar}`
        case 9:
            return `valor da anuidade a ser paga é ${pagar}`
        case 10:
            return `valor da anuidade a ser paga é ${pagar}`
        case 11:
            return `valor da anuidade a ser paga é ${pagar}`
        case 12:
            return `valor da anuidade a ser paga é ${pagar}`
        default:
            return 'mes inválido'
    }
}

console.log(valorAnuidade2(15))

valorAnuidade(15)