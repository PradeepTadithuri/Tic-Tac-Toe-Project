
let tmusic = new Audio("tittlemusic2.mp3")
let select = new Audio("Notification.mp3")
let gameover = new Audio("game-over.mp3")
let turn="X"
let isgameover = false
const winMsgElement =document.getElementById('winning-msgs')

//start the music while start of programme
window.addEventListener('DOMContentLoaded', () => {
    tmusic.play();
});
// start
start.addEventListener('click',()=>{
    turn="X";
    document.getElementsByClassName("info")[0].innerText = "Its "+turn+" turn";
    tmusic.pause();
    game();
})
 
//reset 
reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText=""
    });
    turn="X";
    isgameover=false
     window.location.href = 'https://pradeeptadithuri.github.io/Tic-Tac-Toe-Project/'; 
})


function game(){
//function to change turn
const changeTurn =()=>{
    return turn === "X"?"O":"X"
}

//function to check win
const checkWin =()=>{
 let boxtext=document.getElementsByClassName('boxtext')
   let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
   ]
   win.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!==""))
        {
         document.querySelector('.info').innerText=boxtext[e[0]].innerText+" has won the game"
         isgameover = true
         gameover.play();
         document.querySelector('.winnerText').innerText=boxtext[e[0]].innerText+" has won the game"
         winMsgElement.classList.add('show')
       }  
   })
}

// gaming logic
 let boxes=document.getElementsByClassName("boxes");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText==='')
        {
            boxtext.innerText=turn;
            turn = changeTurn();
            select.play();
            checkWin();
            if([...boxes].every(box => box.querySelector('.boxtext').innerText === "X" || box.querySelector('.boxtext').innerText === "O"))
            { 
             if(!isgameover)
              {
               gameover.play();
               document.querySelector('.winnerText').innerText='Draw! try again'
               winMsgElement.classList.add('show')
              }
            }
            if(!isgameover)
            {
                document.getElementsByClassName("info")[0].innerText = "Its  "+turn+"  turn"
            }
           
        }
       
    })
})

}




