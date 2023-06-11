// A janela (ou Window) em programação se refere a uma área retangular de exibição em uma interface gráfica de usuário (GUI), na qual informações, conteúdo ou elementos de interface são exibidos. Ela serve como um contêiner visual que pode conter botões, campos de entrada, gráficos, texto ou qualquer outro componente de interface. A janela proporciona uma maneira de organizar e apresentar informações de forma visualmente agradável e interativa, permitindo que os usuários interajam com os elementos exibidos.

function abrirPopUp() {
    janela = window.open('http://www.google.com','nova_janela', 'width=500, height=300')
}

function fecharPopUp() {
    janela.close()
}


