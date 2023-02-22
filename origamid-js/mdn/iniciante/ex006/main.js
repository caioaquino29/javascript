let todasImg = document.querySelector('.full-img')
let img1 =document.querySelector('.displayed-img')
let cobrir=document.querySelector('.overlay')
let btn=document.querySelector('.dark')
let barra=document.querySelector('.thumb-bar')
const imagens = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg',]
const imgDescri ={
  'pic1.jpg':'Foco no olho humano',
  'pic2.jpg':'Rocha que parece onda',
  'pic3.jpg':'Flores roxas e brancas',
  'pic4.jpg':'Incriçao tumba do faraó do Egíto',
  'pic5.jpg':'Mariposa grande numa folha'
}
// posso tambem usar resumido >>'for (const image of images)'
for(let i=0;i<imagens.length;i++) {
 const novaImg=document.createElement('img');
 novaImg.setAttribute('src',`images/${imagens[i]}`);
 novaImg.setAttribute('alt',imgDescri[imagens[i]])
 barra.appendChild(novaImg)
 novaImg.addEventListener('click', function(Event) {img1.src=Event.target.src;
img1.alt=Event.target.alt})

}
btn.addEventListener('click', function(){
  let btnClass=btn.getAttribute('class')
  if(btnClass==='dark'){
    btn.setAttribute('class','light')
    btn.textContent='Lighten'
   fundo.style.backgroundColor='rgba(0,0,0,0.5)'

  }
  else{ btn.setAttribute('class','dark');
  btn.textContent='Darken'
  fundo.style.backgroundColor='rgba(0,0,0,0)'
}
})

 
