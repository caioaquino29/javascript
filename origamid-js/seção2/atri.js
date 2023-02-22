   var idade = 19
   var naoPossuiDiabetes=true
   var podeBeber=(idade>=18&& naoPossuiDiabetes)? 'Pode beber!!':'Não pode beber'
   console.log(podeBeber)
   var scroll=1000
   scroll+=500

   var possuiCarro=true
   var possuiCasa=true
   var darCredito=(possuiCarro&&possuiCasa)
   function mostrarCarro(){
    var carro='Fusca ';
    console.log(carro);
   }
   console.log(this.carro)
   {
    var dad=15.69
    let dad2=16.89
   }
// let nao vaza o bloco acima {}
console.log(dad)
function somarDois(x){
    let dois= 2
    return x+dois;
}
function dividirDois(x){
    return x+(this.dois);
}
somarDois(4)