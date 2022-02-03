function frutas(fruta) {
    switch(fruta) {
        case 'maça':
            return 'não vendemos essa fruta aqui'
        
        case 'kiwi':
            return 'estamos com escassez de kiwi'
            
        case 'melancia':
            return 'aqui está, são 3 reais o quilo'
        
        default:
            return 'entrada inválida'
    }
}

console.log(frutas('limão'))