var num1 = prompt('Digite o valor de num1')
var num2 = prompt('Digite o valor de num2')

num1 = parceInt(num1) 
num2 = parceInt(num2) 
num1 = parceInt(num1 + num2) 

document.write('A soma entre'+ num1 +' e '+ num2 +' é: ' + (num1 + num2))
document.write('A subtração entre'+ num1 +' e '+ num2 +' é: ' + (num1 - num2))
document.write('A multiplicação entre'+ num1 +' e '+ num2 +' é: ' + (num1 * num2))
document.write('A divisão entre'+ num1 +' e '+ num2 +' é: ' + (num1 / num2))
document.write('A módulo entre'+ num1 +' e '+ num2 +' é: ' + (num1 % num2)) //Retornar o resto inteiro da divisão.
document.write('A incremento de'+ num1 +' e '+ (num1++) +' é: <br />')
document.write(num1)
document.write('A decremento de'+ num1 +' e '+ (--num1) +' é: <br />')
document.write(num1)

