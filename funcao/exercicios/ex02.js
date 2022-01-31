const triangulos = (a, b, c) => {
    if(a === b && a === c) {
        console.log('triangulo equilatero')

    } else if(a === b || a === c || c === b) {
        console.log('triangulo isoceles')
    
    } else {
        console.log('triangulo escaleno')
    }
}

triangulos(10, 10, 10)
triangulos(5, 10, 10)
triangulos(10, 7, 5)

//o bom de usar a função arrow é que há uma segurança de escopo melhor
//o ruim é que é lida depois das declaração tradicional