// var lsita_frutas = Array()

// lsita_frutas[0] = 'Maçã'
// lsita_frutas[1] = 'Uva'
// lsita_frutas[2] = 'Banana'
// lsita_frutas[3] = 'Morango'

var lsita_numericos = Array()

lsita_numericos[0] = 12
lsita_numericos[1] = 40
lsita_numericos[2] = 3
lsita_numericos[3] = 7
lsita_numericos[4] = 19
lsita_numericos[5] = 1


//O sort deixa os valores em ordem alfabetica
console.log(lsita_frutas.sort(ordenaNumeros))

function ordenaNumeros(a, b) {
    return a - b
    // < 0 = a ordenado antes de b
    // > 0 = b ordenado antes de a
    // == a ordem é mantida
}