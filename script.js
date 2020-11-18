//alert("Connected");
let ball = document.querySelector(".ball");
let board= document.querySelector(".board");
let leftPaddle=document.querySelector(".left");
let rightPaddle=document.querySelector(".right");
let boardBound= board.getBoundingClientRect();
let x=true;
let y=true;
let leftPlayerLives=3;
let rightPlayerLives=3;
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
function setColor(index)
{
    let all=document.querySelectorAll(".fas.fa-circle");
    all[index].style.color="#686de0";
}
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
    let hasTouchedLeft=ballLeft<boardBound.left;
    let hasTouchedright=ballRight>boardBound.right;
    if(hasTouchedLeft||hasTouchedright)
    {
        if(hasTouchedLeft)
        {
            leftPlayerLives--;
            setColor(leftPlayerLives);
            if(leftPlayerLives==0)
            {
                alert("Game Over!! Player 2 Won");
                document.location.reload();
            }
            else
            {
                return resetGame();
            }
        }
        else
        {
            rightPlayerLives--;
            setColor(3+rightPlayerLives);
            if(rightPlayerLives==0)
            {
                alert("Game Over!! Player 1 Won");
                document.location.reload();
            }
            else
            {
                return resetGame();
            }
        }
    }
    function resetGame()
    {
        ball.style.top=window.innerHeight*0.45+"px";
        ball.style.left=window.innerWidth*0.45+"px";
        requestAnimationFrame(moveBall);
    }
    if(ballTop<=boardBound.top||ballBottom>=boardBound.bottom)
    {
        y=!y;
    }
    let leftPaddleBounds=leftPaddle.getBoundingClientRect();
    let rightPaddleBounds=rightPaddle.getBoundingClientRect();
    if(ballLeft<=leftPaddleBounds.right&&ballRight>=leftPaddleBounds.left&&ballTop>=leftPaddleBounds.top&&ballBottom<=leftPaddleBounds.bottom)
    {
        x=!x;
    }
    if(ballLeft<=rightPaddleBounds.right&&ballRight>=rightPaddleBounds.left&&ballTop>=rightPaddleBounds.top&&ballBottom<=rightPaddleBounds.bottom)
    {
        x=!x;
    }    
    ball.style.top=(y==true)?ballTop+3+"px":ballTop-3+"px";
    ball.style.left=(x==true)?ballLeft+3+"px":ballLeft-3+"px";
    requestAnimationFrame(moveBall);
}
requestAnimationFrame(moveBall);