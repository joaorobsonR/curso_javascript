//usar let, const, para privado
//usar this para publico

function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    //metodo publico    -> get presica retornar
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
    this.getDelta = function() {
        return delta
    }
}

const uno = new Carro()

const gol = new Carro(200, 8)

const ferrari = new Carro(350, 20)

let contU = 0
let contG = 0
let contF = 0
for(let i = 0; i < 3; i++) {
    for(; uno.getVelocidadeAtual() < 200; uno.acelerar()) {
        contU += 1
    }
    for(; gol.getVelocidadeAtual() < 200; gol.acelerar()) {
        contG += 1
    }
    for(; ferrari.getVelocidadeAtual() < 350; ferrari.acelerar()) {
        contF += 1
    }
}
console.log(uno.getVelocidadeAtual(), 'loops necessarios =', contU)
console.log(gol.getVelocidadeAtual(), 'loops necessarios =', contG)
console.log(ferrari.getVelocidadeAtual(), 'loops necessarios =', contF)

console.log(ferrari.getDelta())