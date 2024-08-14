let randomnumber = parseInt(Math.random() * 100 + 1);
// here random is created and hence we want from 1 to 99
// multiply by 100 will convert decimal to two digits and +1 in case of 0

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessfield')

// Previous Guesses:
const guessSlot = document.querySelector('.guesses')

// remaining attempt
const remaining = document.querySelector('.lastresult')
    
const loworHi = document.querySelector('.loworHi')

const Startover =document.querySelector('.resultparas')

// storing a paragraph
const p = document.createElement('p');

// prev guess by user
let prevGuess = [];

// attempts 
let numGuess = 1;

// lets you play the game condition 
let playGame = true;

if (playGame) {
    submit.addEventListener('click' , function (e) {
        e.preventDefault();
        const guess = parseInt(userinput.value)
        console.log(guess);
        validateguess(guess) // passing the guess value to next condition 
    })
}

function validateguess(guess){
    // checking the condition if the given guess is as per rules
    if (isNaN(guess)) {
        alert('please enter a valid number :')
    }
    else if(guess < 1){
        alert('please enter a valid number :')
    }
    else if(guess > 100){
        alert('please enter a valid number :')
    }
    else{
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayguess(guess) // dispalying the user seected number
            displaymessage(`Game over  ,  Ramdom number was ${randomnumber}`);
            endgame();
        }
        else{
            displayguess(guess);
             checkguess(guess); // passing to check guess
        }
    }
}

function checkguess(guess){
// msg for checking the number if it's correct low or high from the no.
if (guess === randomnumber) {
    displaymessage('you guessed it right');
    endgame();
}
else if(guess < randomnumber){
    displaymessage('number is too low ');
}
else if(guess > randomnumber){
    displaymessage('number is too high ');
}

}

function displayguess(guess){
    // display the guess of user and will empty the guess for next guess if not correct
    // update the array // and reduce the availale guess

    userinput.value = '';   // here giving empty string to user input to empty 
    guessSlot.innerHTML += `${guess} , ` ;// it will push the guess values of prev attempts means dispaly it
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`; // reduce the number of guesses 
}

function displaymessage(message){
    // from check guess and will respond as a message result
    // directly interact with dom 
    loworHi.innerHTML = `<h2> ${message} </h2>`;
}

// disable everything
function endgame(){
    userinput.value = ''
    userinput.setAttribute('disabled' , '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"> Start New Game</h2>`
    Startover.appendChild(p) 
    playGame = false; 
    newgame();
}

// reset everything
function newgame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click' , function (e) {
        randomnumber = parseInt(Math.random() * 100 +1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userinput.removeAttribute('disabled')
        Startover.removeChild(p);
        playGame = true;
    })

}