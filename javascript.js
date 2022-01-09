console.log ('Hello World')

let list = ['Rock','Paper','Scissors']

function computerPlay ()
{
    let v_result = list[Math.floor(Math.random()*list.length)]
    console.log (v_result)
    return v_result
    
}

function playRound (playerSelection,computerSelection) {
    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection==='Rock') {
            return 0
        }
        else if (computerSelection ==='Scissors'){
            return 1
        }
        else {
            return -1
        }
    }
    else if (playerSelection.toLowerCase()==='paper'){
        if (computerSelection==='Rock') {
            return 1
            }
        else if (computerSelection ==='Scissors'){
            return -1
        }
        else {
            return 0
        }
    }
    else if (playerSelection.toLowerCase()==='scissors'){
        if (computerSelection==='Rock') {
            return -1
        }
        else if (computerSelection ==='Scissors'){
            return 0
        }
        else {
            return 1
        }
    }
    else {
        return 'You must choose Rock Paper or Scissors'
    }
}

function game(){
    let userScore = 0
    let computerScore = 0
    for (let ind = 0; ind < 5;ind++){
        let playerSelection = prompt('Choose Rock Paper or Scissors')
        let computerSelection = computerPlay()
        if (playRound(playerSelection,computerSelection)===1) {
            console.log(`You win. ${playerSelection} beats ${computerSelection}`)
            userScore = ++userScore
        }
        else if (playRound(playerSelection,computerSelection)===-1){
            console.log(`You lose. ${computerSelection} beats ${playerSelection}`)
            computerScore = ++computerScore
        }
        else {
            console.log ('Tie')
        }
    }
    console.log(`Game is over. After 5 rounds we have following scores:
    User score : ${userScore}; 
    Computer score : ${computerScore}`)
}

// let playerSelection = prompt('Choose Rock Paper or Scissors')
// let computerSelection = computerPlay()
// console.log(playRound (playerSelection,computerSelection))
game()

