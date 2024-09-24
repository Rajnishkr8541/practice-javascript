let randomNum=parseInt(Math.random()*100+1);

const submit= document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remain=document.querySelector('.lastResult')
const lowOr=document.querySelector('.lowOr')
const stratOver=document.querySelector('.result')

const p= document.createElement('p')

let prevGuess=[]
let numGuess=1

let playGame=true;

if(playGame){
    submit.addEventListener('click',function(eclick){
        eclick.preventDefault()
        const guess=parseInt(userInput.value)
        validateGuess(guess)
    });
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert('Enter a valid number')
    }else if(guess<1){
        alert('Enter a valid number')
    }else if(guess>100){
        alert('Enter a valid number')
    }else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over and random number is  ${randomNum}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}


function checkGuess(guess){
    if(guess===randomNum){
        displayMessage(`you did it`)
        endGame()
    }else if(guess<randomNum){
        displayMessage(`number is too low`)
    }else if(guess>randomNum){
        displayMessage(`Number is TOO High`)
    }

}

function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess}  `
    numGuess++;
    remain.innerHTML=`${12-numGuess}`
}
function displayMessage(message){

    lowOr.innerHTML=`<h2>${message}</h2>`  

}

function newGame(){
    const newGameButton=document.querySelector('#newgame')
    newGameButton.addEventListener('click',function(eclick){
        randomNum=parseInt(Math.random()*100+1);
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML=''
        remain.innerHTML=`${11-numGuess}`;
        userInput.removeAttribute(`disabled`)
        stratOver.removeChild(p)
        playGame=true

    })
}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id ="newgame">Start New game</h2>`
    stratOver.appendChild(p)
    playGame=false
    newGame()
}



