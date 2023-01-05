let adicButt=document.querySelector('#adicButt')
adicButt.addEventListener('click',gerar)
let adicNum=document.querySelector('#adicNum')
let numAdic=document.querySelector('#numAdic')
let valor=[]
function isnum(n){
if(Number(n)>=1 && Number(n)<=100){ return true
}else{return false}
}
function inlist(n,l){
    if(l.indexOf(Number(n) )!=-1)
    { return true}
    else{ return false}
}
function gerar(){
    
    
if(isnum(adicNum.value)&& !inlist(adicNum.value,valor)) {
valor.push(Number(adicNum.value))
var item=document.createElement('option')
item.text=`Valor ${adicNum.value} adicinado`
item.value=numAdic
numAdic.appendChild(item)
textFin.innerHTML=' '

    
} 
    
else{
    alert('Valor incorreto ou já encontrado na lista ')
    
    
   

}
adicNum.value=''
adicNum.focus()



    
}
let finButt=document.querySelector('#finButt')
let textFin=document.querySelector('#textFin')
finButt.addEventListener('click', finalizar)


function finalizar(){ 
    
       
 if(valor.length==0)
 { alert('preecher as informações ')

 }else{
    let total=valor.length
    let maior=valor[0]
    let menor=valor[0]
    let soma=0
    let media=0
    for(let pos in valor) {
        soma+=valor[pos]
        if(valor[pos]>maior)
        { maior=valor[pos]}
        if(valor[pos]<menor)
        {menor=valor[pos]}
    }
    media=soma/total
    textFin.innerHTML=''
    textFin.innerHTML+=`<p>Total adicinado ${total} número(s) </p>`
    textFin.innerHTML+=`<p> O maior valor é ${maior}</p>`
    textFin.innerHTML+=`<p> O menor valor é ${menor}</p>`
    textFin.innerHTML+=`<p>A soma dos valores é ${soma}</p>`
    textFin.innerHTML+`<p>A média dos valores são ${media}</p>`

 }
   
   

}