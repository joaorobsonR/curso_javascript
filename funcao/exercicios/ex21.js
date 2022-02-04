function confereIdade(idade) {
    if(idade < 10) {
        return 80
    } else if(idade >= 10 && idade <=30) {
        return 50
    } else if(idade > 30 && idade <= 60) {
        return 95
    } else if(idade > 60) {
        return 130
    }
}

function confereAdicional(idade) {
    let adicional = confereIdade(idade)
    
    switch(adicional) {
        case 80:
            console.log(`valor a ser pago ${100 + 80}`)
            break
    
        case 50:
            console.log(`valor a ser pago ${100 + 50}`)
            break

        case 95:
            console.log(`valor a ser pago ${100 + 95}`)
            break

        case 130:
            console.log(`valor a ser pago ${100 + 130}`)
            break

    }
}

confereAdicional(95)