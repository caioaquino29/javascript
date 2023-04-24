const papel=document.querySelector('.desenho');
const ctx =papel.getContext('2d');
const largura=papel.width=window.innerWidth;
const altura=papel.height=window.innerHeight;
const para=document.querySelector('p');
let count=0;


function aletorio(min, max){
    const num=Math.floor(Math.random() * (max-min+1))+ min;
    return num;
}
function Forma(x,o,velx,vely,existe){
    this.x=x;
    this.o=o;
    this.velx=velx;
    this.vely=vely;
    this.existe=existe
 
}
function Bola(x,o,velx,vely,existe,cor,raio){
    Forma.call(this,x,o,velx,vely,existe);
    this.cor=cor
    this.raio=raio
}
Bola.prototype=Object.create(Forma.prototype);
Object.defineProperty(Bola.prototype,'constructor',{
    value: Bola,
    enumerable: false,
    writable:true

})

function CirculoMaligno(x,o,velx,vely,existe,cor,raio){
    Forma.call(this,x,o,velx,vely,existe);
    this.cor=cor;
    this.raio=raio;

}


CirculoMaligno.prototype=Object.create(Forma.prototype);
Object.defineProperty(Forma.prototype,'constructor',{
    value: Bola,
    enumerable: false,
    writable:true

})
CirculoMaligno.prototype.drawMau= function(){
    ctx.beginPath();
    ctx.lineWidth=3
    ctx.strokeStyle=this.cor;
    ctx.arc(this.x,this.o,this.raio,0,2*Math.PI);
    ctx.stroke();
}
CirculoMaligno.prototype.verificarLimit=function(){
    if ((this.x+this.raio)>=largura){
        this.x -= this.raio;
    }
    if((this.x-this.raio)<=0){
        this.x += this.raio;
    }
    if ((this.o + this.raio)>= altura){
        this.o -= this.raio;
    }
    if((this.o - this.raio)<=0){
        this.o += this.raio;
    }
    
}

CirculoMaligno.prototype.setControle= function(){
    var _this = this; 

window.onkeydown = function(Event) {
   
    if (Event.keyCode === 65) {
      _this.x -= _this.velx;
    } else if (Event.keyCode === 68) {
      _this.x += _this.velx;
    } else if (Event.keyCode === 87) {
      _this.o -= _this.vely;
    } else if (Event.keyCode === 83) {
      _this.o += _this.vely;
    }
  } 
  window.ontouchend = function(Event) {
   
    if (Event.keyCode === 65) {
      _this.x -= _this.velx;
    } else if (Event.keyCode === 68) {
      _this.x += _this.velx;
    } else if (Event.keyCode === 87) {
      _this.o -= _this.vely;
    } else if (Event.keyCode === 83) {
      _this.o += _this.vely;
    }
  } 
}

CirculoMaligno.prototype.colidirDeletar=function(){
    for(let j=0;j<bolas.length;j++){
        
        if(!(bolas[j].existe===false)){
            const dx =this.x - bolas[j].x;
            const dy = this.o - bolas[j].o;
            const distancia =Math.sqrt(dx*dx+dy*dy);
            if(distancia<this.raio+bolas[j].raio){ 

                bolas[j].existe=this.existe=false;
                --count;
                para.textContent=`Bolas em jogo: ${count}`;
                
            };
            }
        
    }

    };
    


Bola.prototype.draw= function(){
    ctx.beginPath();
    ctx.fillStyle=this.cor;
    ctx.arc(this.x,this.o,this.raio,0,2*Math.PI);
    ctx.fill();
}
Bola.prototype.atualizacao=function(){
    if ((this.x+this.raio)>=largura){
        this.velx = -(this.velx);
    }
    if((this.x-this.raio)<=0){
        this.velx = -(this.velx);
    }
    if ((this.o + this.raio)>= altura){
        this.vely = -(this.vely);
    }
    if((this.o - this.raio)<=0){
        this.vely = -(this.vely);
    }
    this.x += this.velx;
      this.o += this.vely;
}
Bola.prototype.colisorDetector= function(){
    for(let j=0;j<bolas.length;j++){
        if(!(this===bolas[j])){
            const dx =this.x - bolas[j].x;
            const dy = this.o - bolas[j].o;
            const distancia =Math.sqrt(dx*dx+dy*dy);
            if(distancia<this.raio+bolas[j].raio){
                bolas[j].cor=this.cor=`rgb(${aletorio(0,255)},${aletorio(0,255)},${aletorio(0,255)})`;
            }
        }
    }
}
let bolas=[];
while(bolas.length<50){
    let raio = aletorio(5,35);
    let bola= new Bola(
        aletorio(0 + raio,largura - raio),
        aletorio(0 + raio,
            altura - raio),
        aletorio(-7,10),
        aletorio(-7,10),
        existe=true,
        'rgb(' + aletorio(0,255) + ',' + aletorio(0,255) + ',' + aletorio(0,255) +')',
        raio
    );
   bolas.push(bola);
   count++;
  para.textContent=`Bolas em jogo: ${count}`
    
};



let mauCicurlo= new CirculoMaligno(aletorio(0,largura),aletorio(0,altura),20,20,true,'white',10);
mauCicurlo.setControle();

function loop(){
    

    ctx.fillStyle=`rgba(0,0,0,0.22)`;
    ctx.fillRect(0,0,largura,altura);
    for(let i=0;i<bolas.length;i++){
        if(!(bolas[i].existe===false)){ 
        bolas[i].draw();
        bolas[i].atualizacao();
        bolas[i].colisorDetector();
    }
        }
        mauCicurlo.drawMau();
        mauCicurlo.colidirDeletar();
        mauCicurlo.verificarLimit();
    requestAnimationFrame(loop);
    
    
}



loop()


 