function trataErro(erro) {
    throw 'erro catastrófico'    //forma de lançar um erro
}

function gritando(obj) {
    try {                       //tentativa para um possível erro
        console.log(obj.name.toUpperCase()) + '!!!'
    } catch (e) {               // se der erro chama a função de erro
        trataErro(e)
    } finally {                 //mesmo se der erro vai executar
        console.log('final')
    }
}

const obj2 = {nome: 'roberto'}
gritando(obj2)


//professor
function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)