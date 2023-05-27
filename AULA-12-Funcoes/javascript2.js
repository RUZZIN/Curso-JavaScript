function soma(a, b)  {
    //b = b === undefined ? 0 : b
    return a + b
}

console.log(soma(7, 7))
console.log(soma(7, 7, 9, 15)) //Desconsidera os parâmetros adicionais
console.log(soma(7)) //Not a number
console.log(soma()) //Not a number