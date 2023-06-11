
// setTimeout(function() {document.write('Text')}, 2000);
// clearTimeout()

var i = 10

setInterval(function() {
    document.write(i)
    i--
    if(i === 0) {
        window.location.reload()
    }
}, 1000);
clearInterval()
//--------------------------------------------------------------------------------------
var z = 5

var z = setInterval(function() {
    document.write(z)
    i--
    if(i === 0) {
        clearInterval(z)
    }
}, 1000);
clearInterval()

// Medir o tempo de execução de um trecho de código
    // console.time('tempoExecucao');
// Código a ser medido
    // console.timeEnd('tempoExecucao');

// Obter o tempo atual em milissegundos desde o início do carregamento da página
    // var tempoAtual = performance.now();

// Calcular a diferença entre dois momentos de tempo
    // var tempoInicial = performance.now();
// Código a ser medido
    // var tempoFinal = performance.now();
    // var duracao = tempoFinal - tempoInicial;

// Agendar uma função para ser executada após um certo período de tempo
    // setTimeout(function() {
        // Código a ser executado após o intervalo de tempo especificado
    // }, 1000);

// Executar uma função em intervalos regulares de tempo
    // setInterval(function() {
       // Código a ser executado em intervalos regulares
    // }, 2000);