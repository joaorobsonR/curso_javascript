function calculafatorial(num) {
    let fatorial = 1
    for(let i = 1; i !== num + 1; i++) {
        fatorial = fatorial * i
    }
    return fatorial
}

console.log(calculafatorial(5))