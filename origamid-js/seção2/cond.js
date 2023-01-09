var idade=33
var idadeParente= 33 
if(idade>idadeParente){
    console.log('É maior!!')

}else if(idade<idadeParente) {
    console.log('É menor!!')
}else { console.log('É igual!!')};
var epressao = (5-2) && (5-' ') && (5-2);
console.log(epressao)
var nome='Caio';
var idade=29;
var possui=false;
var emprego;
var dinheiro=0
if(nome){ console.log('true')}

else{ console.log('false')}
if(('Gato'==='gato')&&(5>2)){
    console.log('Verdadeiro')

}else{ console.log('Falso')}
if(('Gato'==="gato")||(5>2)){console.log('Gato'&&"Cão")}
else{ console.log('Falso')}


function areaRetangulo(comprimento,largura){
    if(largura=='x'){ 
        console.log('nao é numero')
    } else{

    return comprimento*largura}
}
console.log(areaRetangulo(10,"x"))
 
function exemplo(){
    console.log('Receba!!!')
}
exemplo()
function pi(){
    return 3.14;
}
var total=5*pi() 
console.log(total)
function imc(peso,altura){
    var imc=peso/(altura**2);
    return imc;

}

console.log(imc(92,1.9))
function corfavorita(cor){
    if(cor=='Azul'){
        return 'Você é Cruzerence!!'
    }else if(cor=="Preto"){
        return'Você é Atleticano!!'

    } else{return"Você é Americano!!!"
    }

}
console.log(corfavorita())
addEventListener('click',function(){console.log('É isso ai!!!')})

function imc2(peso,altura)
{
  const imc= peso/(altura**2);
  console.log(imc)  
}
console.log(imc2(60,1.5))
 function terceiraIdade(idade){
    if(typeof idade !=='number'){
    return "Por favor preecher com numeral!!"
}else if(idade>=60) { 
    return true;
}else{ 
    return false
}

 } console.log(terceiraIdade('p'))