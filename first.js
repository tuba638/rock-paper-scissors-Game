let userScore = 0 ;
let compScore = 0 ;

const options = ["rock", "paper", "scissors"] ;

const choices = document.querySelectorAll(".choice") ; //NodeList

let msg = document.getElementById("msg") ;

const genCompChoice = () => {
    let randomChoice = options[Math.floor(Math.random() * 3)];
    // console.log(`comp choice was ${randomChoice}`) ; 
    return randomChoice ;
};

let playGame = (userChoice) => {
    console.log(`user choice was ${userChoice}`) ;  

    //generate computer choice -> modular
    let compChoice = genCompChoice() ;
    console.log(`comp choice was ${compChoice}`) ; 

    //work out the result of this round
    if(userChoice === compChoice){
        //its a draw
        console.log('its a draw') ;
        msg.innerText = "Its a draw!" ;
        msg.style.backgroundColor =  "purple" ;
        return ;
    }
    //else: userChoice !== compChoice
    let userWins = true ;
    if(userChoice === "rock"){
        if(compChoice==="paper"){
            //comp wins
            userWins = false ;
        }
    }
    else if(userChoice==="paper"){
        if(compChoice==="scissors"){
            //comp wins
            userWins = false ;
            msg.innerText = "comp wins. scissors beat paper" ;
        }
    }
    else{
        //userChoice is scissors
        if(compChoice==="rock"){
            //comp wins
            userWins = false ;
        }
    }
    //show winner
    if(userWins){
        console.log('you win') ;
        userScore +=1 ;
        document.getElementById("user-score").innerText = userScore ;
        msg.innerText = `user wins. ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor =  "green" ;
    }
    else{
        console.log('you lose') ;
        compScore += 1 ;
        document.getElementById("comp-score").innerText = compScore ;
        msg.innerText = `comp wins. ${compChoice} beats ${userChoice}` ;
        msg.style.backgroundColor =  "red" ;
    }
};

choices.forEach( (c) => {
    // console.log(c) ;
    c.addEventListener("click", () => {
        const userChoice = c.getAttribute("id") ;

        //computer plays- then result is calc'd
        playGame(userChoice) ;
    });
});

