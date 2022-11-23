// Função: Cria um novo parágrafo e o insere no fim do arquivo HTML.
    function createParagraph() {
        let para=document.createElement('p')
        para.textContent='Você clicou no botão!!!'
        document.body.appendChild(para)
    }
    /* 
    1. Captura referências de todos os botões na página e armazena isso em um array.
    2. Vai até todos os botões e adiciona um event listener click a cada um deles.
    Quando cada botão é clicado, a função criarParagrafo() será executada. */

    const buttons = document.querySelectorAll('button')
    for(let i=0; i< buttons.length; i++) {
        buttons [i].addEventListener('click', createParagraph)
    }
