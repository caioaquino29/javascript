var button = document.querySelector("#botao")
button.addEventListener('click',cotador)

function cotador(){
var inicio=document.querySelector("#inicio")
var fim=document.querySelector ('#fim')
var passo=document.querySelector('#passo')
if((inicio.value.length==0 ||fim.value.length==0||passo.value.length==0))
{ alert('[Erro] preencha as lacunas' )}
else {
  
     var n =Number(inicio.value)
     var x=Number(fim.value)
     var y=Number(passo.value)
    var res=document.querySelector('#res')
    if(y<=0)
     {alert('[PASSO INVALIDO]considerar passo = 1')
     y = 1
     }
    if(n<x){
        for( var i = n;i <= x;i +=y ) {
          res.textContent+=i+' \u{1F449}'
          }
    }else{
        for( var i = n;i >= x;i -=y ) {
          res.textContent+=i+' \u{1F449}'}
    }res.textContent+='\u{1F3C1}'
}
}