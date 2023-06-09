var lista_frutas = Array()

lista_frutas[0] = 'Banana'
lista_frutas[1] = 'Maçã'
lista_frutas[2] = 'Morango'
lista_frutas[3] = 'Uva'

var y = 0

//A propriedade "length" em JavaScript é usada para obter o número de elementos em uma string, array ou estrutura de dados semelhante a um array. É útil para determinar o tamanho de uma coleção de elementos e para realizar operações baseadas no número de elementos.
while(y < lista_frutas.length) {
    document.write(lista_frutas[y] + '<br/>')
    y++
}