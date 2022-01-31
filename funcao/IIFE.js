// IIFE invocação imediata da função

//para fugir do escopo global para segurança da aplicação

(function() {
    console.log('será executado na hora')
    console.log('foge do escopo mais abrangente')
    console.log('fundamental no browser')
})()

//dessa forma toca o escopo global, então é mais perigoso
console.log('será executado na hora')
console.log('foge do escopo mais abrangente')
console.log('fundamental no browser')