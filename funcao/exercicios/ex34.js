function verificacaoDeString (string1, string2) {
    let estaContido = true;
    for (let i = 0; i < string1.length; i++) {
        let caractereString1 = string1.charAt(i).toLowerCase()
        for(let j = 0; j < string2.length; j++){
            let caractereString2 = string2.charAt(j).toLowerCase()
            if(caractereString1 == caractereString2) {
                estaContido = true //se contem então sai do laço e vai para outra letra
                break
            } else {
                estaContido = false
            }
        }
        if(!estaContido) { //se estaContido é falso returne falso se não continua o for para a segunda letra
            return estaContido
        }
    }
    return estaContido
 }

 console.log(verificacaoDeString('abc','cea'))

 //é uma estrutura de matriz, muito legal