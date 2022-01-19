//que diferença incrível usando let e var

let num = 1

{
    let num = 2
    console.log(num)
}

console.log(num)

/*
diferente de var, quando se usa o let para declarar variável dentro de um bloco,
que não seja uma função ou classe, o programa ainda vai "respeitar" esse bloco
entendendo como um escopo menor, coisa que não acontece com var, onde nesse exemplo acima
a variável fica no escopo global mesmo dentro de um bloco. LEGAL
*/