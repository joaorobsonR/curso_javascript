const fabricante = ['mercedes', 'audi', 'fiat']

const imprimir = (nome, indice) => console.log(`${indice + 1}. ${nome}`)

fabricante.forEach(imprimir)
fabricante.forEach(fabricante => console.log(fabricante))