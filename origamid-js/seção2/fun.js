// function truthy(cor){
//     if(cor==='azul'){
//         return true
//     }else {return false
//     }
// } var cor1= prompt( 'qual cor?')
// console.log(truthy(cor1))
var button=document.querySelector('button')
button.onclick=function(){
   var nome=prompt('Qual seu nome? ') 
   return alert(`Olá tudo bem ${nome}, bom te vê!!`)
}

let myName = 'Default';
myName = 'Chris';

let myAge = 42;
let section=document.querySelector('section')

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
const para2 = document.createElement('p');
para1.textContent = myName;
para2.textContent = `In 20 years, I will be ${myAge + 20}`;
section.appendChild(para1);
section.appendChild(para2);


function truthy(tipo){
    return !!tipo
}
console.log(truthy(null))
 function perimetro(lado){
    return lado*4
  
 }
 console.log(perimetro(4))

 function nomeCompleto(nome,sobrenome){ var nome='Caio '
 var sobrenome='Aquino'
 return console.log(`Seu nome completo é ${nome+sobrenome}`)

 }
 nomeCompleto()
 function tipo(dados){
    return typeof dados
 }
 console.log(tipo())
 addEventListener('scroll',function(){console.log('Caio Aquino')})
 function isEven(par){
    if(par%2===0){ return 'é par'}
    else{ return 'é impar'}

 }
 console.log(isEven(1006))

