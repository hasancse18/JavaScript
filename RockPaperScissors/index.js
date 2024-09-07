const resultDisplay = document.getElementById("resultDisplay");
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");




const choices = ["rock","paper","scissors"];

function playGame(choice)
{
    let result ="";
    const computerChoice = choices[Math.floor(Math.random()*3)]; 
    if(choice === computerChoice)
    {
        result="It's a Tie";
    }
    else
    {
        switch(choice)
        {
            case "rock":
                result = (computerChoice === "scissors") ? "You Win" : "You Lose";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You Win": "You Lose";
                break;
            case "scissors":
                result = (computerChoice ==="paper") ? "You Win" : "You Lose";
        }
    }
    playerDisplay.textContent= `PLAYER: ${choice}`;
    computerDisplay.textContent= `COMPUTER: ${computerChoice}`;
    
    
    resultDisplay.classList.remove("greenText","redText");
    switch(result)
    {
        case "You Win":
            resultDisplay.classList.add("greenText");
            break;
        case "You Lose":
            resultDisplay.classList.add("redText");
    }
    resultDisplay.textContent = result

}