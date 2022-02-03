function carrosdaLoja(carro) {
    switch(carro) {
        case 'hatch':
            console.log('compra efetuada com sucesso')
            break

        case 'sedan': case 'motocicleta': case 'caminhonete':
            console.log('tem certeza que prefere esse modelo')
            break

        default:
            console.log('não trabalhamos com esse modelo')

    }
}

carrosdaLoja('hatch')