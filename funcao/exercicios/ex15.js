function diaDoMes(dia) {
    if(dia < 32) {

        switch(dia) {
            case 1: case 8: case 15: case 22: case 29:
                return 'domingo'
        
            case 7: case 14: case 21: case 28:
                return 'sabado'

            default:
                return 'dia util'
        }
    } else {
        return 'quantidade de dias inválidos'
    }
}

console.log(diaDoMes(32))