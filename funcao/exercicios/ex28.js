const vetor = []
let num = 0

for(let i = 0; i < 20; i++) {
    num = Math.random() * 10
    num = Math.ceil(num)
    vetor.push(num)
}

function separa(array) {
    let vetorPar = []
    let vetorImpar = []

    for(let a of array) {
        if(a % 2 === 0) {
            vetorPar.push(a)

        } else {
            vetorImpar.push(a)

        }
    }
    console.log(vetorPar)
    console.log(vetorImpar)
}

separa(vetor)