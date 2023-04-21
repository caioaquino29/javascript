const mario =document.querySelector('.mario')
const pipe=document.querySelector('.pipe')
const nuvem =document.querySelector('.nuvem')
const para=document.querySelector('p')
const audio=document.querySelector('audio')


let contador=0;
document.addEventListener('DOMContentLoaded', function mostrarMensagem(){
   
  var html=document.querySelector('.bloco-game');
  var painel = document.createElement('div');
  painel.setAttribute('class','msgBox');
  html.appendChild(painel);

  
  var msg=document.createElement('p');
  msg.textContent='Está pronto para iniciar o jogo preste atenção no obstáculo!!';
  painel.appendChild(msg)
  msg.style.color=''

  var inicioBtn = document.createElement('button');
  inicioBtn.textContent='INICIAR';
  painel.appendChild(inicioBtn);
  
    
  
  
  pipe.style.animation='none';
  pipe.style.left=`-80px`;
  
  
  inicioBtn.onclick=function(){
    painel.parentNode.removeChild(painel);
    pipe.style.animation='';
    pipe.style.left=``;
    
    const loop = setInterval(()=>{
      
    const pipePosição=pipe.offsetLeft;
    const marioPosição=+window.getComputedStyle(mario).bottom.replace('px',' ');
    const nuvemPosição =nuvem.offsetLeft;
    console.log(marioPosição)
    // tentando colocar contardor de pontos
    contador++;
    para.textContent=` SCORE: ${Math.floor(contador/10)}`;
    
    
    if(pipePosição<=115 && pipePosição>0 &&marioPosição<88){
      
    nuvem.style.animation='none'
    nuvem.style.left=`${nuvemPosição}px`
    pipe.style.animation='none';
    pipe.style.left=`${pipePosição}px`;
    mario.style.animation='none';
    mario.style.bottom=`${marioPosição}px`;
    mario.src='imagem/gameover.webp'
    mario.style.width='75px'
    mario.style.marginLeft='25px'

    var box = document.createElement('div')
    html.appendChild(box);
    box.setAttribute('class','box');
    // var over =document.createComment('h1');
    // box.appendChild(over);
    // over.setAttribute('class','over')
    box.textContent='GAME OVER';
    box.style.color='red'
    var btn = document.createElement('button');
    box.appendChild(btn);
    btn.setAttribute('class', 'btn');
    btn.textContent='reiniciar'
    btn.addEventListener("click",()=>{  document.location.reload()})
    
    
    clearInterval(loop)
    
    }
    },10);
    
    document.addEventListener('keypress',pulo)
    
      
  }}  );
  const pulo =function(){
    mario.classList.add
    ('pulo')
    setTimeout(() => {
      mario.classList.remove('pulo')  
    }, 500);
}
  