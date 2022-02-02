function bissesto(ano) {
    if(ano % 4 === 0) {
        return `${ano} é um ano bissesto`
        
    }
    if((ano % 100 === 0) && (ano % 400 ===0)) {
        return `${ano} é um ano bissesto`

    }
    else {
        return `${ano} não é ano bissesto`
    }
}

console.log(bissesto(2000))