const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exc() {
    const valor = 'Local'
    minhaFuncao(valor)
}

exc() //o que vai ser chmado? global ou local?

/**
 * o que foi chamado foi global, pois a função considera o
 * contexto onde ela foi criada, como ela foi criada no 
 * contexto global será procurado a variável do mesmo contexto
 */