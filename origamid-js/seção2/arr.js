var videoGames=['Switch','PS4','XBox', 'Saturno']
for(let i =0; i<videoGames.length;i++){
    console.log(videoGames[i])
    if(videoGames[i]==='XBox')
    {break }
}
let brasilCampeo=[1959,1962,1970,1994,2002]
for(let i=0;i<brasilCampeo.length;i++){
    console.log(`O Brasi ganhou a copa de ${brasilCampeo[i]}`)
}
var frutas=['Banana','Maçã','Uva','Morango']
var sepFru=frutas[frutas.length-1]
for( var i =0;i<frutas.length;i++){ if(frutas[i]==='Maçã'){
    console.log(`Fruta favorita ${frutas[i]}`)
}else {   
    console.log(frutas[i])

}}

let carros=['Palio','Monza','Fusca','Sandeiro',103]
console.log(carros.push('Ferari'))
console.log(carros.pop())
carros.forEach(function(item,index,arry){
    console.log(item,index,arry)
})

