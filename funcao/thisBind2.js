function Pessoa() {
    this.idade = 0

    setInterval(function (){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) //acada mile segundos dispara a função
}

//new Pessoa

/* 
agora para evitar que o this varie e causa um erro inesperado
é criada uma const de nome self, que impede do this variar e
não pertencer a função chamada, muito legal
*/

function Pessoas() {
    this.idade = 0
    
    const self = this
    setInterval(function (){
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoas