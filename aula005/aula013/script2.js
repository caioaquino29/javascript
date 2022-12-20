var botao = document.querySelector('#botao')


botao.addEventListener('click', verificar )
function verificar(){
    var data= new Date ()
    var ano= Number(data.getFullYear())
    var anofinal=document.querySelector("#textano")
    // var valor =Number(anofinal.value)
    var res = document.querySelector (".res")
   if(anofinal.value.length==0||Number(anofinal.value)>ano){window.alert('[ERRO] verifique os dados e tente novamente!')}
   else{ 
  var fsex = document.getElementsByName('vfsexo')}
   var idade=ano-Number(anofinal.value)
   var genero=''
   var img=document.createElement('img')
   if(fsex[0].checked) {
  genero='Homem'

if(idade>=0&&idade<=11)
img.setAttribute('src','menino.png')
else if(idade>11 && idade<18 )
img.setAttribute('src','ojovem.png')
else if(idade<60)
img.setAttribute('src','homem.png')
else { img.setAttribute('src',"idoso.png")}}

else if(fsex[1].checked)
{genero='Mulher'

if(idade>=0&&idade<=11)
img.setAttribute('src','menina.png')
else if(idade>11 && idade<18 )
img.setAttribute('src','ajovem.png')
else if(idade<60)
img.setAttribute('src','mulher.png')
else{ img.setAttribute('src',"idosa.png")}}
res.getElementsByClassName.textAlign="center"
  res.innerHTML=  "Detectamos "
     +genero+' '+idade+" anos."
     res.appendChild(img)
 }