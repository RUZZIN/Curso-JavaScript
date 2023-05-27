function exibirArtigo(id, callbackSucesso, CalbackErro){
    //Lógica: recuperar o id via requisição http
    if(true) {
        callbackSucesso('Funções de callback em JS', 'funções de callback são muito ultilizadas...')
    } else {
        CalbackErro('Erro ao recuperar os dados')
    }
}

var callbackSucesso = function(titilo, descricao){
    document.write('<h1>' + titulo + '</h1>')
    document.write('<hr />')
    document.write('<p>' + descricao + 'p')
}

var callbackErro = function(){
    document.write('<p><b>Erro:</b>' + erro + '</p>')
}

exibirArtigo(1, callbackSucesso, callbackErro )