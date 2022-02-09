function confereString(str1, str2) {
    let contemLetra = true
    for(let i = 0; i < str1.length; i++) {
        let str1Letra = str1.charAt(i).toLocaleUpperCase() //a função charAt retorna o caracter do index desejado podendo ser colocado em uma variável
        
        for(let j = 0; j < str2.length; j++) {
            let str2Letra = str2.charAt(j).toLocaleUpperCase()

            if(str1Letra == str2Letra) {
                contemLetra = true
                break //para ir para outra letra

            } else {
                contemLetra = false
            }
        }
        if(!contemLetra) //não altera a variável só manipula para entrar no return
            return contemLetra
    }
    return contemLetra
}

console.log(confereString('abc', 'cbe'))

//cuidado com os blocos!!!