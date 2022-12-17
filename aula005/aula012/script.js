
function data(){
var inf=window.document.querySelector('.par')
var img=window.document.querySelector("#foto")
var tempo= new Date()
var hora = tempo.getHours ()
inf.textContent='Agora são '+hora+' hora'
if(hora>=0 && hora<=12){
img.src= "imagem/dia.png"
document.body.style.backgroundColor="#D1D8D1"
}else if (hora>=12 && hora<18){
    img.src= "tarde.png"
    document.body.style.backgroundColor="#A64037"

}else {  img.src="noite.png" 
document.body.style.backgroundColor="#011126"}


}