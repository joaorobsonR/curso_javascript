const cardapio = (codigos) => {
    let valor = 0
    let somaValor = 0
    for(let codigo of codigos) {
        switch(codigo) {
            case 100:
                console.log('cachorro quente R$3,00')
                valor = 3
                break

            case 200:
                console.log('bauru R$4,00')
                valor = 4
                break

            case 300:
                console.log('x-salada R$5,00')
                valor = 5
                break

            case 400:
                console.log('x-tudo R$8,00')
                valor = 8
                break

            case 500:
                console.log('refrigerante R$3,00')
                valor = 3
                break

            case 600:
                console.log('suco R$2,00')
                valor = 2
                break

            default:
                console.log('codigo não existe')
                valor = 0

        }
        somaValor += valor
    }
    console.log(`\nO valor total do pedido é R$${somaValor}, muito obrigado!`)
}

const pedido = [100, 300, 400, 500, 600, 800, 600, 100, 700, 100]

cardapio(pedido)

//muito legal faz uma lista de pedidos e com o for e switch vai imprimindo, verificando e somando 