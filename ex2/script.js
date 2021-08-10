//array receitas, array despesas, soma de cada array, saldo final

let receitas= [1000, 1000, 500, 150]
let receitastext= ["bolsa", "mesada", "vr", "auxilio"]
let despesas= [350, 200, 150, 110, 40, 35, 150, 914, 525]
let despesastext= ["prestação", "condomínio1", "condominio2", "internet", "telefone", "seguro", "luz", "cartao5", "cartao20"]


let totalReceitas = receitas.reduce(function(total, next){
    return total + next })
    console.log (totalReceitas)

let totalDespesas = despesas.reduce(function(total, next){
    return total+next})
console.log (totalDespesas)

console.log (totalReceitas - totalDespesas)

