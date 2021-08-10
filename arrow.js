//Arrow function
//function expression:
const incremento = function(n){
    return n+1
}

//sempre ANONIMA
//tira a palavra function, acrescenta a arrow depois do parametro

const incremento2 = (n) => {
    return n+1
}

//se tem um UNICO parametro, pode tirar os parenteses
const incremento3 = n => {
    return n+1
}

//quando o corpo {} for de apenas uma linha, pode tirar as chaves e o return está implicito
const incremento4 = n => n+1

//pode ter mais de um parametro:
const sum = (a, b) => a+b

console.log(sum(2,8))
console.log(incremento(1))
console.log(incremento2(2))
console.log(incremento3(3))
console.log(incremento4(4))