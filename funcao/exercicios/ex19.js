const cardapio = (codigo) => {
    switch(codigo) {
        case 100:
            console.log('cachorro quente R$3,00')
            break
        case 200:
            console.log('bauru R$4,00')
            break
        case 300:
            console.log('x-salada R$5,00')
            break
        case 400:
            console.log('x-tudo R$8,00')
            break
        case 500:
            console.log('refrigerante R$3,00')
            break
        case 600:
            console.log('suco R$2,00')
            break
        
        default:
            console.log('codigo não existe')
    }
}