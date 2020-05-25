export default class cubuk{
    constructor(x,y,space){
        this.width=4;
        this.height=40;
        this.y=y;
        this.x=x;
        this.uzama=15;

    }
    draw(board,x,y,width,height){
        
        board.fillStyle="red";
        board.fillRect(x,y,width,height);
    }
    
    lenghten(){
        
        this.height+=this.uzama;
        //this.y-=this.uzama;
       
    }
    rotate(space,x,y,board,degree){
                var x2=x+40+this.height*Math.cos(degree*Math.PI/180);
                var y2=y+50+this.height*Math.sin(degree*Math.PI/180);    
              
            return {x: x2, y: y2};
            
          
           

           
        
        
    }
    
}