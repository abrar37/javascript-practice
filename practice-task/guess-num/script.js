let randomNumber = Math.floor(Math.random() * 50) + 1;
const userInput = document.getElementById('userInput');
const submitButton = document.getElementById('submitbtn')
const resultText = document.getElementById('result');
const attemptsNum = document.getElementById('attempts');
const allGuesses = document.getElementById('all-guesses')

const newElement = document.createElement('p')

let attemptsLeft = 10;
let playGame = true;

if(playGame){
    submitButton.addEventListener("click", function(e){
        e.preventDefault();
        let userGuess = userInput.value;
        validateGuess(userGuess);
        attempts.innerText = `${--attemptsLeft}`;
    })
}

function validateGuess(num){
    if(isNaN(num) || num < 1 || num > 50){
        displayMessage("Number Shloud be between 1 and 50")
    }else(
        checkGuess(num)
    )
}

function checkGuess(num){
    if(num > randomNumber){
        displayMessage("Number Too heigh");
    }else if(num < randomNumber){
        displayMessage("Number Too low");
    } else{
        displayMessage(`congratulations: You guess the Number.<br>The Rendom Number was: ${randomNumber}`);
        gameEnd();
    }
    allGuesses.innerHTML += `${num}, `
    userInput.value = ''
    if(attemptsLeft === 1){
        displayMessage(`Game Over. Rendom Number was ${randomNumber}`);
        gameEnd();
    }
}

function displayMessage(message) {
    resultText.innerHTML = `${message}`;
}

function gameEnd(){
    userInput.setAttribute('disabled', '')
    playGame = false;
    newElement.classList.add('button');
    newElement.innerHTML = '<span id="new-game">Click Here to start new game</span>';
    resultText.appendChild(newElement);
    gameRestart();
}

function gameRestart(){
    const newGame = document.querySelector("#new-game")
    newGame.addEventListener('click', function(e){
        randomNumber = Math.floor(Math.random() * 50) + 1;
        attemptsLeft = 10;
        attempts.innerText = `${attemptsLeft}`;
        allGuesses.innerHTML = ''
        userInput.removeAttribute('disabled', '')
        resultText.removeChild(newElement);
        displayMessage('Game Restarted');
        playGame = true;
    })
    
}