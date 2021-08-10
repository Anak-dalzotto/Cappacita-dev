function logParams (a, b, c){
console.log (a, b, c)
}

logParams(1, 2, 3, 4, 5);
logParams(1, 2, 3);
logParams(1, 2);
logParams(1)

//só imprime 1, 2, 3. Onde não tem a, b,c, imprime undefined.
//Pode usar parametro default, para caso não informe. Se informar depois, vale o informado e  não o default

function defaultParams (a =1, b=2, c=3){
    console.log (a, b, c)
}

defaultParams (4, 5, 6);
defaultParams (4, 5);
defaultParams (6)

//REVER A PARTIR DAQUI, explicação usando ARRAY e SPREAD/REST para ter número variável de elementos
//Usando array:

function logNums(nums){
    for (let n of nums) {
        console.log(n)
    }
}
logNums([1, 2, 3]) //passa array pq espera receber um array. Imprime CADA ELEMENTO, pois chamei N


//Usando Spread/rest:
//... vão informar que é um número variável de parametros que devem ser armazenados na funcao

function logNums(...nums){
    console.log (Array.isArray(nums)) //ve que segue sendo um array
    for (let n of nums) {
        console.log(n)
    }
}
logNums(1, 2, 3)

//pode usar sem o for, ai vai imprimir um array
function logNums2 (...nums){
    console.log(nums)
}
logNums2 (1, 2, 3, 4, 5)

//como é um array, consigo usar todas as funcionalidades de um array, como fazer uma soma de todos os elementos
function sumAll (...nums){
    let total = 0
    for (let n of nums){
        total += n
    }
    return total
}
console.log (sumAll (1, 2, 3))
console.log (sumAll (1, 2, 3, 4, 5, 6))
