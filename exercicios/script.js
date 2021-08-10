//notas em letra
//A >=90
//B 80-89
//C 70-79
//D 60-69
//F <60

function converteNota (nota) {

let notaA = nota>= 90 && nota<=100
let notaB = nota >= 80 && nota <= 89
let notaC = nota >=70 && nota <=79
let notaD = nota >= 60 && nota <=69
let notaF = nota>=0 && nota <60

let notaFinal;

if (notaA) {
    notaFinal = "A"
}
else if (notaB) {
    notaFinal = "B"
}
else if (notaC) {
    notaFinal = "C"
}
else if (notaD) {
    notaFinal = "D"
}
else if (notaF){
    notaFinal = "F"
}
else {
    notaFinal = "Nota inválida"
}

return notaFinal
}

converteNota (101)
converteNota(30)
converteNota(69)
converteNota(78)
converteNota(82)
converteNota(98)
converteNota(-1)