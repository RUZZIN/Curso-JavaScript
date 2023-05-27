//void
//retorno

function calcularAreaTerreno(largura, comprimento) {
    //Lógica 
    var area = largura * comprimento

    // document.write('O terreno possui '+area+ 'metros quadrados')
    return area
}

var largura = prompt('Digite a largura do terreno em metros')
var comprimento = prompt('Digite o comprimento do terreno em metros')
var area = calcularAreaTerreno(15, 25)
document.write('O terreno possui ' + area + ' metros quadrados ')