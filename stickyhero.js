export default class stickyhero{
    //this class creates the stickyhero 
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
    //it draws the hero to the board
    draw(board,width,height){
        console.log("droaw");
       this.image.src="./st2.png";
        board.drawImage(this.image,this.x,this.y,this.width,this.height); 
    }
    //updates the changes in coordinates due to speed x and y 
    update(){
        
        this.x+=this.xspeed;
        this.y+=this.gravity;
    
    }

}