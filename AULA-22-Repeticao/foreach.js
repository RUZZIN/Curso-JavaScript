// var listaFuncionarios = ['Viviane', 'Rosângela', 'Miguel', 'Lucas', 'Fernanda']
var listaFuncionarios = Array()

listaFuncionarios['x'] = 'Viviane'
listaFuncionarios[false] = 'Rosângela'
listaFuncionarios[3] = 'Miguel'
listaFuncionarios[27] = 'Lucas'
listaFuncionarios[-12] = 'Fernanda'

var f = function(valor, indice){
    console.log(valor, indice)
}

listaFuncionarios.forEach(f)

// console.log(listaFuncionarios)

// listaFuncionarios.forEach(function(valor, indice, array){
//     //Lógica
//     console.log('indice: ' + indice + ' | valor: ' + valor)
    
//     if(valor == 'Lucas') {
//         array[indice] = 'Um novo valor'
//     }
// })

// console.log(listaFuncionarios)
// document.write('<br/>' + listaFuncionarios[3])


//Ela permite executar um conjunto de operações em cada item da coleção sem a necessidade de indexação explícita ou iteração manual. É uma forma conveniente de percorrer e processar os elementos de uma coleção de maneira simples e eficiente. 