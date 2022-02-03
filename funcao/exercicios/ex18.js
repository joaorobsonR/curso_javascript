const escreverNumero = (num) => {
    switch(num) {
        case 10:
            console.log('dez')
            break
        case 9:
            console.log('nove')
            break
        case 8:
            console.log('oito')
            break
        case 7:
            console.log('sete')
            break
        case 6:
            console.log('seis')
            break
        case 5:
            console.log('cinco')
            break
        case 4:
            console.log('quatro')
            break
        case 3:
            console.log('tres')
            break
        case 2:
            console.log('dois')
            break
        case 1:
            console.log('um')
            break
        case 0:
            console.log('zero')
            break
        default:
            console.log('intervalo não existe')
    }
}

escreverNumero(10)