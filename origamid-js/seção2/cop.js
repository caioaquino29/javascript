 let button = document.querySelector('#butt');
// button.addEventListener('click',minhaFunction());



function minhaFunction(){
    var copieOTexto=document.querySelector('#copy')
    copieOTexto.select();
     copieOTexto.setSelectionRange(0,9999);
     navigator.clipboard.writeText(copieOTexto.value);
    alert(`Texto copiado com sucesso ${copieOTexto.value}`)
    button.style.backgroundColor='red';
    
    
}

