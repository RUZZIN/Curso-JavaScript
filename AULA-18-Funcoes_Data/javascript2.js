// var data = new Date()

// //Adicionar ou remover dias da data com setDate
// document.write(data.toSrintg())
// data.setDate(data.getDate() + 720)
// document.write('<hr />')
// document.write(data.toSrintg())
// document.write('<br /> <hr />')

// //Adicionar ou remover meses da data com setMonth
// document.write(data.toSrintg())
// data.setMonth(data.getMonth() - 1)
// document.write('<hr />')
// document.write(data.toSrintg())

// //Adicionar ou remover anos da data com setFullYear
// document.write(data.toSrintg())
// data.setFullYear(data.getFullYear() + 5)
// document.write('<hr />')
// document.write(data.toSrintg())

//17/01/2017
var data1 = new Date(2017, 0, 15)

//23/02/2017
var data2 = new Date(2017, 1, 23)

document.write(data.toString(data1))
document.write('<hr />')
document.write(data.toString(data2))

document.write('<br/ ><br/ > <hr />')
// Converter data para algo que possamos calcular
document.write(data.getTime(data1))
document.write('<hr />')
document.write(data.getTime(data2))

//1 de janeiro de 1970

//Encontrar a quantidade de milissengundos entre data1 e data2
var milissegundo_entre_datas = Math.abs(data1.getTime() - data2.getTime())
document.write(milissegundo_entre_datas)

//1 dia tem 24, cada hora tem 60 minutos, cada minuto tem 60 segundos e cada segundo tem 1000 milissegundos, então quantos milissegundo existem em um dia?
var milissegundo_por_dia = (1*24*60*60*1000)
document.write('1 dia tem:' + milissegundo_por_dia + 'milissegundos')

document.write('<br/ ><br/ > <hr />')
document.write('A difença de data1 e data2 é' +Math.ceil(milissegundo_entre_datas / milissegundo_por_dia))


