import ground from "./ground.js";
import stickman from "./stickman.js";
import cubuk from "./cubuk.js";

var board=document.getElementById("board").getContext("2d");
var text=document.getElementById("text").getContext("2d");
var score=0;
var width=800;
var height=600;
var speed =4;
var adam=new stickman(board,width,height);
var ground1=new ground(width/10,width,height,board);
var stick=new cubuk(adam.x,adam.y,200);
var space=Math.floor(Math.random()*200+100);
var lengthen =false;
var draw=true;
var start=true;
document.addEventListener("keydown",event => {
    if(event.keyCode==82){
    animation=cancelAnimationFrame(animation);
    console.log("start again");
    gamecreator();
    game();   
    }
    if(event.keyCode==32){
       
        lengthen =true; 
    }
    
});
document.addEventListener("keyup",event => {
    if(event.keyCode==32){
        
        isrotate=true;
        lengthen=false;
        degree=-90;
    }
});
var degree=-90;

var isrotate=false;
var x;
var y;
var isrotated=true;
var positions={x:0,y:0};
var groundlist=[ground1];
var animation;
var image=new Image();
image.src="./bg.jpg";
function game(){
    space=Math.floor(Math.random()*200+100);
    var num;
    board.clearRect(0,0,800,800);
    text.clearRect(0,0,800,800);
    text.fillStyle = "red";
    text.font = "20px sans-serif";
    text.fillText(score, 5, 100);
    board.fillStyle="pink";
    board.drawImage(image,0,0,width,height);
    for (var i=0;i<groundlist.length;i++){
                
        groundlist[i].draw(board);
                
            if(adam.x<=groundlist[i].x+groundlist[i].width&&adam.x>=groundlist[i].x)
                num=i;
                
                
    }
    console.log
    if(lengthen&&num!=undefined){
        stick.height+=5;
        x=adam.x;
        y=adam.y;
        board.beginPath();
        board.lineWidth=10;
        board.strokeStyle="red";
        board.moveTo(x+40, y+50);
        positions= stick.rotate(30,x,y,board,-90);
        board.lineTo(positions.x,positions.y);
        board.stroke();
        
    }
    
    if(isrotate&&num!=undefined){
        
        draw=true;
        board.beginPath();
        board.lineWidth=10;
        board.strokeStyle="red";
        board.moveTo(x+40, y+50);
        positions= stick.rotate(30,x,y,board,degree);
        board.lineTo(positions.x,positions.y);
        degree+=2;
        
    }
    if(draw)
    board.stroke();
    adam.draw(board);
    if(degree==2){
        isrotate=false;
       isrotated=true;
       degree=-90;
      
    
       

    }
    if(num!=undefined)
        if(groundlist.length-num<=2)
            groundlist.push(new ground(groundlist[groundlist.length-1].x+groundlist[groundlist.length-1].width+space,width,height,board));   
        

if(num!=undefined)
    if(groundlist[num].x>80){
        if(positions.x<=adam.x){

            draw=false;
             x-=speed;
             
             positions.x-=speed;
             adam.x-=speed;
             for (var i=0;i<groundlist.length;i++)
             groundlist[i].x-=speed;
        }
            
        }
        
       // stick.draw(board,x+40,y+50,stick.height,10);

    
    
    if(num!=undefined){
        if((adam.x>groundlist[num].x+groundlist[num].width)){
            adam.gravity=10;
            
            speed = 0;
        }

        }
        else{
            if(adam.x>positions.x){
            adam.gravity=10;
            speed = 0;
        }
    }

            


if(adam.x>=positions.x-15){
    stick.height=0;
    positions={x:0, y:adam.y+50};
} 
        if(isrotated){
            console.log
            adam.x+=speed;
        }
if(num!=undefined)
if(groundlist[num].x+groundlist[num].width-adam.x-40<=2&&groundlist[num].x+groundlist[num].width-adam.x-40>=-2&&positions.x<=adam.x+40){

        isrotated=false;
    }
if(num!=undefined){
    score=num;
}
control();
adam.update();
animation=requestAnimationFrame(game);
}
function control(){
    console.log("control")
    if(adam.y>height-200){
        text.clearRect(0,0,800,800);
        console.log("has failed");
    text.fillStyle = "red";
    text.font = "20px sans-serif";
    text.fillText("game over...press R to start", 5, 100);
    
     
    animation=cancelAnimationFrame(animation);

    }
}
function gamecreator(){
    degree=-90;
    ground1.x=width/10;
    stick.length=0;
    speed=4;
    lengthen =false;
    draw=false;
    isrotate=false;
    x=undefined;
    y=undefined;
     isrotated=true;
     positions={x:0,y:0};
     groundlist=[ground1];
    adam.x=width/6;
     adam.y=3*height/5-50;
     adam.gravity=0;

}
game();