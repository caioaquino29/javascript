const mario =document.querySelector('.mario')
const pipe=document.querySelector('.pipe')
const nuvem =document.querySelector('.nuvem')
const pulo =function(){
    mario.classList.add
    ('pulo')
    setTimeout(() => {
      mario.classList.remove('pulo')  
    }, 500);
}
const loop = setInterval(()=>{
const pipePosição=pipe.offsetLeft;
const marioPosição=+window.getComputedStyle(mario).bottom.replace('px',' ');
const nuvemPosição =nuvem.offsetLeft;
console.log(marioPosição)
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

clearInterval(loop)
}
},10);

document.addEventListener('keypress',pulo)
