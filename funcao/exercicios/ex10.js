const verifica = num => {
    num = num.toString()
    num.split(',')
    let soma = 0
    for(let i = 0; i < num.length; i++) {
        soma += num[i]
    }
    if(soma % 3 === 0) {
        return true
    } else {
        return false
    }
}

console.log(verifica(45))