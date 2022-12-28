var button = document.querySelector('#geraR');
button.addEventListener('click',tabuada);
function tabuada(){
var numeral =document.querySelector('#numero');
var res =document.querySelector('#tab');
var n =Number(numeral.value);
if((numeral.value.length==0))
{alert('[ERRO]digite algum numeral')}
else{

res.innerHTML=''
for( var i =1; i<11 ;i++){
    var item=document.createElement('option')   
    item.text=i+ ' x '+n+'='+(n*i)
    item.value='res'+i
    res.appendChild(item)
}


}

}

