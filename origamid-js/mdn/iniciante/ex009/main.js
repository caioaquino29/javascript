const papel=document.querySelector('.desenho');
const ctx =papel.getContext('2d');
const largura=papel.width=window.innerWidth;
const altura=papel.height=window.innerHeight;

function aletorio(min, max){
    const num=Math.floor(Math.random() * (max-min+1))+ min;
    return num;
}
function Bola(x,o,velx,vely,cor,raio){
    this.x=x;
    this.o=o;
    this.velx=velx;
    this.vely=vely;
    this.cor=cor;
    this.raio=raio;
}
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
        'rgb(' + aletorio(0,255) + ',' + aletorio(0,255) + ',' + aletorio(0,255) +')',
        raio
    );
    bolas.push(bola);
}
function loop(){
    ctx.fillStyle=`rgba(0,0,0,0.22)`;
    ctx.fillRect(0,0,largura,altura);
    for(let i=0;i<bolas.length;i++){
        bolas[i].draw();
        bolas[i].atualizacao();
        bolas[i].colisorDetector();
    
    }
    requestAnimationFrame(loop);
}



loop()


 