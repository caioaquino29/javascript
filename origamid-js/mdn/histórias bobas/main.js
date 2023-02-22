let persoNome = document.querySelector('#customname')
let selBr=document.querySelector('#br')
let selUk=document.querySelector('#uk')
let botao=document.querySelector('.randomize')
let parHist=document.querySelector('.historia')

botao.addEventListener('click',gerarHis)

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];


  }
  var hist ='Estava 94 Fahrenheit lá fora, então :insertx: fui dar uma volta. Quando eles chegaram a :inserty:, eles olharam horrorizados por alguns momentos, então :insertz:. Bob viu tudo, mas não ficou surpreso — :insertx: pesa 300 libras, e era um dia quente.'
  
  var insertX=['Willy o duende',' Paizão',' Papai Noel']
  
  var insertY=["a cozinha de sopa"," Disneylândia"," a casa branca"]

  var insertZ=["combustão espontânea", 'derretido em uma poça na calçada', 'se transformou em uma lesma e se arrastou para longe']
  
  
              
    
  
function gerarHis(){
    let novaHis=hist
    var xItem=randomValueFromArray(insertX);
    var yItem=randomValueFromArray(insertY);
    var zItem=randomValueFromArray(insertZ);
    
    novaHis=novaHis.replaceAll(':insertx:',xItem)
    novaHis=novaHis.replaceAll(':inserty:',yItem)
    novaHis=novaHis.replaceAll(':insertz:',zItem)
    
    
    
    if(persoNome.value !== '') {
        const nome = persoNome.value;
        
       
        

        novaHis=novaHis.replaceAll('Bob',nome)
        

    }
    
    if(document.getElementById("uk").checked) {
        const weight = Math.round(300*0.0714286);
        const temperature =  Math.round((94-32)*5/9);
        novaHis=novaHis.replace('300',weight)
        novaHis=novaHis.replace('94',temperature)
        novaHis=novaHis.replace('Fahrenheit','ºC')
        novaHis=novaHis.replace('libras','pedras')

    }

    parHist.textContent =novaHis;
    parHist.style.visibility = 'visible';  
}