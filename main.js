import ground from "./ground.js";
import hero from "./stickyhero.js";
import stick from "./stick.js";

var board=document.getElementById("board").getContext("2d");
var text=document.getElementById("text").getContext("2d");
var width=800;
var height=600;
var myhero=new hero(board,width,height);
var ground1=new ground(width/10,width,height,board);
var mystick=new stick(myhero.x,myhero.y,200);
var score=0;
var speed =4;
var space=Math.floor(Math.random()*200+100);
var lengthen =false;
var draw=true;
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
document.addEventListener("keydown",event => {
    if(event.keyCode==82){
    animation=cancelAnimationFrame(animation);
    gamecreator();
    game();   
    }
    if(event.keyCode==32)  
        lengthen =true; 
    
});
document.addEventListener("keyup",event => {
    if(event.keyCode==32){  
        isrotate=true;
        lengthen=false;
        degree=-90;
    }
});
function game(){
    space=Math.floor(Math.random()*200+100);
    board.clearRect(0,0,800,800);
    text.clearRect(0,0,800,800);
    var num;
    text.fillStyle = "red";
    text.font = "20px sans-serif";
    text.fillText(score, 5, 100);
    board.drawImage(image,0,0,width,height);
    myhero.draw(board);
    
    for (var i=0;i<groundlist.length;i++){  
        console.log("draw");     
        groundlist[i].draw(board);   
            if(myhero.x<=groundlist[i].x+groundlist[i].width&&myhero.x>=groundlist[i].x)
                num=i;     
    }
    if(lengthen&&num!=undefined){
        mystick.height+=5;
        x=myhero.x;
        y=myhero.y;
        board.beginPath();
        board.lineWidth=10;
        board.strokeStyle="red";
        board.moveTo(x+40, y+50);
        positions= mystick.rotate(30,x,y,board,-90);
        board.lineTo(positions.x,positions.y);
        board.stroke();   
    }
    // if(mystick.height>=100){
    //     isrotate=true;
    //     lengthen=false;
    // }
    
    if(isrotate&&num!=undefined){
        draw=true;
        board.beginPath();
        board.lineWidth=10;
        board.strokeStyle="red";
        board.moveTo(x+40, y+50);
        positions= mystick.rotate(30,x,y,board,degree);
        board.lineTo(positions.x,positions.y);
        degree+=2;    
    }
    if(draw)
    board.stroke();
    if(degree==2){
        isrotate=false;
        isrotated=true;
        degree=-90;
    
    }
    if(num!=undefined){
        if(groundlist.length-num<=1)
            groundlist.push(new ground(groundlist[groundlist.length-1].x+groundlist[groundlist.length-1].width+space,width,height,board));   
        if(groundlist[num].x>80)
        {
            if(positions.x<=myhero.x){
                draw=false;
                x-=speed;
                positions.x-=speed;
                myhero.x-=speed;
                for (var i=0;i<groundlist.length;i++)
                    groundlist[i].x-=speed;
            }
     
        }
        if((myhero.x>groundlist[num].x+groundlist[num].width)){
            myhero.gravity=10;
            speed = 0;
        }

    }
    else
        if(myhero.x>positions.x){
        myhero.gravity=10;
        speed = 0;
    }
    if(myhero.x+20>=positions.x){
        mystick.height=0;
        positions={x:0, y:0};
    } 
    if(isrotated)
        myhero.x+=speed;
    
    if(num!=undefined){

    
    if(groundlist[num].x+groundlist[num].width-myhero.x-40<=2&&groundlist[num].x+groundlist[num].width-myhero.x-40>=-2&&positions.x<=myhero.x+40)
            isrotated=false; 
    
        score=num;
    }

control();
myhero.update();
animation=requestAnimationFrame(game);
}
function control(){
    console.log("control")
    if(myhero.y>height-200){
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
    mystick.length=0;
    speed=4;
    lengthen =false;
    draw=false;
    isrotate=false;
    x=undefined;
    y=undefined;
     isrotated=true;
     positions={x:0,y:0};
     groundlist=[ground1];
     myhero.x=width/6;
     myhero.y=3*height/5-50;
     myhero.gravity=0;

}
game();