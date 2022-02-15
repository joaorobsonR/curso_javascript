const sequencia = {
    _valor: 1, //convenção de atributo privado
    get valor() {return this._valor++},
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000 //aqui é invocado o metodo set
console.log(sequencia.valor, sequencia.valor)
console.log(sequencia.valor)

sequencia.valor = 900
console.log(sequencia.valor) //vai imprimir mais de mil, por que não tem uma condição 