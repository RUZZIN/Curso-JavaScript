// Exemplo usando a plataforma de series e filmes Netflix

// throw new Error('Houve um erro mas não se preocupe, estamos trabalhando nisso agora!!!')

var video = Array()

video[1] = Array()
video[1]['Nome'] = 'Fullmetal Alchemist'
video[1]['Categoria'] = 'Anime'

function getVideo(video) {
    try {
        //Lógica
        //http
        console.log(video[0])
    } catch(erro) {
        console.log(erro)
        console.log('Agora sim podemos tratar esse erro')
        throw new Error('Houve um erro mas não se preocupe, estamos trabalhando nisso agora!!!')

    } finally {
        console.log('Sempre passa por aqui (try / catch)')
    }
    
    console.log('A aplicação não morreu')
}

function tratarErro(e) {
    // Lógica para registrar o erro no servidor
    console.log(e)
}

getVideo(video)

// try {
//     // Código que pode gerar exceções
// } catch (TipoDeExcecao1 excecao1) {
//     // Tratamento para TipoDeExcecao1
// } catch (TipoDeExcecao2 excecao2) {
//     // Tratamento para TipoDeExcecao2
// } finally {
//     // Bloco opcional que sempre será executado, independentemente de haver uma exceção ou não
// }