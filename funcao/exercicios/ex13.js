const calculadora = (n1, sinal, n2) => {
    switch(sinal) {
        case '+':
            console.log(n1 + n2)
            break
        
        case '-':
            console.log(n1 - n2)
            break

        case '*':
            console.log(n1 * n2)
            break

        case '/':
            console.log(n1 / n2)
            break
        
        default:
            console.log('operação inválida')
    }
}

calculadora(10, '9', 6)