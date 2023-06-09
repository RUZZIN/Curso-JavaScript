// Exemplo 1

var x = 1

document.write('Inicio <br/>')

while(x <= 10) {
    x++
    if( x === 5) {
        continue
    }
    document.write(x + '<br/>')
}


document.write('Fim <br/>')

// Exemplo 2

var y = 2

while(y <= 100) {
    document.write(y + '<br/>')
    x++
}

// Exemplo 3

var z = 1

while(z <= 20) {
    if(x === 5) {
         break //Pode usar o breck para parar o laço de repetição
    }
    x++
}