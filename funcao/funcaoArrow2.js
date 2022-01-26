let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) //nesse caso this pertence a global

const obj = {}
comparaComThis = comparaComThis.bind(obj) //amarrou o this ao obj, com bind
comparaComThis(global) //agora this não faz parte da global
comparaComThis(obj)     //faz parte do objeto

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

/**
 * a função arrow o this não faz parte do global, mas faz parte do modulo do node
 * no node cada arquivo faz parte de um modulo e afunção arrow mesmo quando foi
 * tentado amarrar o this no obj com bind, a função arrow não permitiu e o this
 * continuou fazendo parde do modulo, isso permite que a função arrow seja mais
 * previsível e segura para ser usada, além de insetivar a construção de funções
 * especificas e menores, que é o recomendado.
 */