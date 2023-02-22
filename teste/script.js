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

    const buttons = document.querySelectorAll('#btn')
    for(let i=0; i< buttons.length; i++) {
        buttons [i].addEventListener('click', createParagraph)
    }
    let buttcop = document.querySelector('#cop')
    buttcop.addEventListener('click', copiar)
    function copiar(){
        let copia=document.querySelector("#doc")
        copia.select();
        copia.setSeletionRange(0,99999)
        navigator.clipboard.writeText(copia.value)
    }
