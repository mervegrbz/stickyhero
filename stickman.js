export default class stickman{
    constructor(board,width,height){    
    this.width=40;
    this.height=50;
    this.x=width/6;
    this.y=3*height/5-this.height;
    this.xspeed=0;
    this.yspeed=0;
    this.gravity=0.0;
    this.image=new Image();
    
    
    }
    draw(board,width,height){
       // board.fillStyle="blue";
       this.image.src="./st2.png";
        board.drawImage(this.image,this.x,this.y,this.width,this.height)
        
        //board.fillRect(this.x,this.y,this.width,this.height);
        
    }
    update(){
        
        this.x+=this.xspeed;
        this.y+=this.gravity;
        
       
    }
    walk(){
        this.xspeed=4;
       


    }

    



}