//true && true && false = false
if(2 == 2 && 3 >= 1 && 'a' == 'b') {
    document.write('Verdadeiro')
} else {
    document.write('Falso')
}

//false || false || treu = true
if(2 == 3  || 3 >= 5 || 'a' == 'a') {
    document.write('Verdadeiro')
} else {
    document.write('Falso')
}

//false = treu | treu = false
if(!( 4 == 2) ) {
    document.write('Verdadeiro')
} else {
    document.write('Falso')
}

var nota = prompt('Digite a nota do aluno: ')
var faltas = prompt('Digite a quantidade de faltas:')
var media = 7
var faltas_maximas = 15

if(nota >= media && faltas <= faltas_maximas) {
    document.write('Aprovado')
} else {
    document.write('Reprovado')
}