let carro={
    marca:'Fiat',ano:2010,placa:'HNK-4367'
}
let quadrado={
    ladoS:4,
    area:function(lado){
        return lado**2
    },
    perimetro:function(lado){
        return this.ladoS*lado
    },
    cinco(){ return true}

}
console.log(quadrado.area(5),quadrado.perimetro(5),quadrado.cinco())
// console.table(quadrado)
 var menu={
    with:800,
    height:50,
    backgroundColor:'#84E',
 }
 menu.backgroundColor='#000';
 menu.color='blue'
  
 let dadosPessoais={
    nome:'Caio ',
    sobrenome:'Aquino',
    altutra:1.89,
    escolaridade:'Ensino Técnico',
    profissão:'Mecânico de manutenção',
 }
 dadosPessoais.nomeCompleto=function(){
    return `${this.nome} ${this.sobrenome}`
 }
console.log(dadosPessoais.nomeCompleto())
let carro2={
    preço:1000,portas:4,marca:'Audi',
}
carro2.preço=3000;

let cachorro={
    raça:'Labrador',idade:10,
    
    late(observa){ if(observa==='Homem') {return 'au-au ...au-au!!!!'
}else { return '......'}},



}
console.log(cachorro.late('nada'))



var btn=document.querySelector('.btn');
btn.addEventListener('click', function(){  return innerHTML='Clicou!!!'})
console.log('caio'.toLocaleUpperCase())
console.log('caio'.charAt(0))
console.log('Caio'.repeat(200))
console.log('Caio'.length)
document.URL