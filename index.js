
console.log("Hello");

let turn ="X";
let gameover=false;

function changeturn(){
    console.log("turn changed");
    return turn === "X"?"0":"X"
}

//Game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".box-text");
    element.addEventListener("click", ()=>{
        new Audio("./Sounds./crash.mp3").play();
        if(boxtext.innerText === ''){
             boxtext.innerText = turn;
             turn =changeturn();
             checkwin();
             if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;  
             }
             
        }
    });
});

//Checkwin
function checkwin()
{
    let boxtext = document.querySelectorAll(".box-text");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && boxtext[e[0]].innerText !=="" )
        {
            document.querySelector(".Top-msg").innerText=boxtext[e[0]].innerText +" WON ";
            gameover=true
            if(gameover){
                $(".Top-msg").fadeIn(200).fadeOut(200).fadeIn(200);
                $("body").addClass("game-over");
                $(".animated-gif").css("width","260px");
                
            
                setTimeout(function(){
                    
                    $("body").removeClass("game-over");
                  },400);
            
                 new Audio("./Sounds./win.mp3").play();
            }

        }
    })
}


//Reseting everything
reset.addEventListener("click", function(){
    let boxtext = document.querySelectorAll(".box-text")
    Array.from(boxtext).forEach(element =>{
        element.innerText =""
    });
    turn ="X";
    gameover=false;
    if(!gameover){
        document.querySelector(".Top-msg").innerText="Welcome to Game";
        document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;  
        $(".animated-gif").css("width","0");
     }

});

