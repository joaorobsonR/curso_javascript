{ 
    { 
        { 
            { 
                var sera = 'Será???' //esse bloco faz parte do escopo global
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste() {          //essa variável só será acessada se for chamada a função
    var local = 123
    console.log(local)
}

teste()
//console.log(local) //não será imprimido

//exemplos
 var a = 1

 {
     var a = 2
     console.log(a)
 }
 console.log(a)
 //nesse caso será imprimido duas vezes a var a com o valor 2, pois ambos fazem parte do escopo global