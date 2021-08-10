//function expression
//funcao anonima:
(function (a, b){
    return a+b
})

//function expression: atribui a uma variavel o valor de uma funcao
//se não for anonima e chamar pelo nome, e não pelo nome da variável, ele não vai chamar, por isso usa anonima
var x = 1
var sum = function(a, b){
    return a+b
}

//chama só usando sum(2, 3), mas pra imprimir no console precisa de uma nova variavel
const resultSum = sum(2,3)
console.log(resultSum)

const anotherSum = sum
console.log(anotherSum (4,5))

var x = 3
console.log (x)

x = sum
console.log (x(6, 4))
//a variavel pode assumir outros valores, inclusive o de uma funcao