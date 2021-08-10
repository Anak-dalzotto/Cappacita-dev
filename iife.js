//função imediatamente invocada
//funcao anonima, usada quando precisa garantir um escopo mais restrito
/*function (a, b, c) {
    return a+b+c
}

function (a, b, c){
    console.log (`O resultado é $(a+b+c)`)
}
*/
//não tem como chamar a função depois para passar os parametros, então pode invocar imediatamente, passando parametros na sequencia 
//lembrar que pra usar função anonima sem ser em expressions precisa usar entre parenteses!

(function (a, b, c){
    console.log (`O resultado é ${a + b + c}`)
}) (1, 2, 3);

//se tiver mais de uma, precisa separar as funcoes por ;

// pode tambem ter sem parametros, só pra definir o escopo local:

(function () {
    let x = 300
    console.log(x)
}) ();

//também pode escrever como arrow, com corpo
(() => {
    console.log("arrow")
}) ();

//ou arrow sem corpo:

(() => console.log("arrow2"))();
