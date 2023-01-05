function parImp(n){
    if(n%2==0){return'par'}
    else{ return 'impar'}

}
console.log(parImp(10))

function fatorial(n){ 
    let fat=1
    for(var c=n;c>1;c--)
    { fat*=c}
    return fat
}
console.log(fatorial(5));
let b=function(n){ return n*2}
console.log(b(5))
function soma(n1,n2){
    return n1+n2
}
console.log(soma(600,5));
function perG(n){ if(n==="sim")
{ return'Exato'}else{return 'Errado'}
}
console.log(perG('sim'))
