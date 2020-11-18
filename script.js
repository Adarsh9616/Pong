//alert("Connected");
let ball = document.querySelector(".ball");
let board= document.querySelector(".board");
let leftPaddle=document.querySelector(".left");
let rightPaddle=document.querySelector(".right");
let boardBound= board.getBoundingClientRect();
let x=true;
let y=true;
document.addEventListener("keydown",function(e){
    if(e.key=="w")
    {
        movePaddle(leftPaddle,-window.innerHeight*0.1);
    }
    else if(e.key=="s")
    {
        movePaddle(leftPaddle,window.innerHeight*0.1);
    }
    else if(e.key=="ArrowUp")
    {
        movePaddle(rightPaddle,-window.innerHeight*0.1);
    }
    else if(e.key=="ArrowDown")
    {
        movePaddle(rightPaddle,window.innerHeight*0.1);
    }
})

function movePaddle(cPaddle,change)
{
    let cPaddleBounds=cPaddle.getBoundingClientRect();
    if(cPaddleBounds.top+change>=boardBound.top&&cPaddleBounds.bottom+change<=boardBound.bottom)
        cPaddle.style.top=cPaddleBounds.top+change+"px";
}
function moveBall()
{
    let ballCord=ball.getBoundingClientRect();
    let ballTop= ballCord.top;
    let ballLeft= ballCord.left;
    let ballBottom=ballCord.bottom;
    let ballRight=ballCord.right;
    if(ballTop<=boardBound.top||ballBottom>=boardBound.bottom)
    {
        y=!y;
    }
    let leftPaddleBounds=leftPaddle.getBoundingClientRect();
    let rightPaddleBounds=rightPaddle.getBoundingClientRect();
    if(ballLeft<=leftPaddleBounds.right&&ballRight>=leftPaddleBounds.left&&ballTop+30>=leftPaddleBounds.top&&ballBottom-30<=leftPaddleBounds.bottom)
    {
        x=!x;
    }
    if(ballLeft<=rightPaddleBounds.right&&ballRight>=rightPaddleBounds.left&&ballTop+30>=rightPaddleBounds.top&&ballBottom-30<=rightPaddleBounds.bottom)
    {
        x=!x;
    }    
    ball.style.top=(y==true)?ballTop+3+"px":ballTop-3+"px";
    ball.style.left=(x==true)?ballLeft+3+"px":ballLeft-3+"px";
    requestAnimationFrame(moveBall);
}
requestAnimationFrame(moveBall);