let num =[1,6,90,5,3]
console.log('este meu array "num"... '+num+' como valor.')
console.log('sort()..organiza em ordem crescente '+num.sort())

 for(let org=0;org<num.length;org++){console.log('Posição '+org+' tem seguinte valor '+num[org])}

console.log("'var ou let num'tem "+num.length+" elmentos")
num.push(2)
console.log('Para acrescentar na ultima posição só usar .push() '+num[5])
for(let org in num){ console.log('Posição  '+org+' tem seguinte valor '+num[org])}
console.log('O valor 90 está seguinte posição: '+num.indexOf(90))

console.log('O valor 99 está seguinte posição: '+num.indexOf(99))
let i=num.indexOf(100)
if(i==-1){ console.log(`Não existe este valor `)}
else{ console.log( `Valor eta na posição: ${i} `)}
// console.log(`valor 100 na var num ${num.indexOf(100)} ${i}`)

  