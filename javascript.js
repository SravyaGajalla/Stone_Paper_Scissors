let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const  genCompChoice =() =>{
    const options =["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame =() =>{
    console.log("game was draw");
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "rgb(1, 9, 15)";

}

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText ="You Win! Your "+ userChoice + " beats " + compChoice;
        msg.style.backgroundColor = "green";
    }
    else{
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = "You Lost! "+ compChoice + " beats your " + userChoice;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice)=>{
    const compChoice = genCompChoice();

    if(userChoice === compChoice)
    {
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock")
        {
            userWin = compChoice === "paper"? false : true;
        }
        else if(userChoice === "paper")
        {
            userWin = compChoice === "rock"? true:false;
        }
        else{
            userWin = compChoice === "rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
