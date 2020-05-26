export default class ground{
    //creates the grounds that hero can stand.
    constructor(x,width,height,board){
        this.width=Math.floor(Math.random()*150+60);
        this.height=3*height/5;
        this.x=x;
    
    }
    //draws the boards to the board
    draw(board){
        
        board.fillStyle="black";
        board.fillRect(this.x,this.height,this.width,this.height/3*2)
        
    }

}