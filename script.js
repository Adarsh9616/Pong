//alert("Connected");
let ball = document.querySelector(".ball");
let board= document.querySelector(".board");
let boardBound= board.getBoundingClientRect();
let x=true;
let y=true;
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
    if(ballLeft<=boardBound.left||ballRight>=boardBound.right)
    {
        x=!x;
    }
    ball.style.top=(y==true)?ballTop+1+"px":ballTop-1+"px";
    ball.style.left=(x==true)?ballLeft+1+"px":ballLeft-1+"px";
    requestAnimationFrame(moveBall);
}
requestAnimationFrame(moveBall);