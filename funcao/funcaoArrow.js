function dobro(num) {
    return 2 * num
}

let dobroArrow = (num) => 2 * num //return está implicito

dobroArrow = num => 2 * num

console.log(dobroArrow(Math.PI))
console.log(dobro(2), dobroArrow(2))

let saud = () => 'ola'
saud = () => 'ola mundo'

console.log(saud())

//um dos motivos d criação da função arrow é que thid não varia

function Pessoa() {
    this.idade = 0,

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa