function aumentoSalario(salario, plano) {
    switch(plano) {
        case 'a':
            salario = salario * 1.1
            return salario

        case 'b':
            salario = salario * 1.15
            return salario

        case 'c':
                salario = salario * 1.2
                return salario

    }
}

console.log(aumentoSalario(1000, 'c'))