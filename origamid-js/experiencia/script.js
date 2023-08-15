const imagens =document.getElementById('img');
const imagem = document.querySelectorAll('#img img');
let idx=0;
function Carrossel(){
    idx++;
    if(idx> imagem.length -1 ){
        idx=0;
    }
    imagens.style.transform=`translateX(${-idx *699}px)`;
}
setInterval(Carrossel, 2000)