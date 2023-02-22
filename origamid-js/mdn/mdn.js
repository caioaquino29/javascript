let list = document.querySelector("#lista")
list.innerHTML=""
let frases=['Felizes o que têm conciêcia de sua necessidade espíritual', 'Uma mão lava outra ','Felizes os que choram, porque serão consolados.','Em grão em grão a galinha enxe o papo','Felizes os de temperamento brando.' ]

for (let i =0; i<frases.length; i++) {
    let input=frases[i]
    if( frases[i].indexOf('Felizes')!==-1) {
        
       
       let listItem = document.createElement('li');
       listItem.textContent=input;
       list.appendChild(listItem);

    }
}