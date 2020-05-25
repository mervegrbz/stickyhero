export default class ground{
    constructor(x,width,height,board){
        this.width=Math.floor(Math.random()*150+60);
        this.height=3*height/5;
        this.x=x;
    
    }
    draw(board){
        board.fillStyle="black";
        board.fillRect(this.x,this.height,this.width,this.height/3*2)
        
    }

}