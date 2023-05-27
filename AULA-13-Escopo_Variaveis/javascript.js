//3 escopos: global, função e o bloco

var serie = 'Friends'

//Escopo de bloco
if(true) {
    var serie2 = 'Game of Trones'
    document.write(serie)
}

document.write(serie2)

document.write('<br />')

function x() {
    var serie3 = 'The Walking Dead'
    document.write(serie)
    document.write(serie2)
}

x()

document.write('<br />')
document.write(serie3)