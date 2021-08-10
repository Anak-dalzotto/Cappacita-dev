//function declaration
// não recebe parametros e não retorna nada:
function sayHello () {
    console.log("Hello!")
}
//se rodar só aqui não retorna nada, precisa chamar a função
sayHello ()

let x = sayHello ()
// retorna undefined pq a funcao nao tem return

//pode ter parametros e nãao ter retorno:
function sayHelloTo(name) {
    console.log("Hello "+ name)
}

sayHelloTo("Ana")
sayHelloTo ()

//undefined
//pode usar literals (`Hello ${name}!`)

//pode ter retorno:
function returnHi(){
    return "Hi!"
}

//aqui não aparece nada pq não está imprimindo no console
let hi = returnHi()
console.log(hi)
console.log(returnHi())

//pode ter parametro e retorno
function returnHiTo (name){
    return `Hi ${name}!`
}
console.log(returnHiTo("Le"))