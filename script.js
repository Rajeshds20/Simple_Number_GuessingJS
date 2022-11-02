// console.log('Hello')


var luckyNumber = Math.floor(Math.random()*20);

console.log(luckyNumber);

var score = 20;
var highScore = 0;

var userGuess = document.getElementById('guessing');
var checkbtn = document.getElementById('check');
var mainSection = document.getElementById('main');
var marker = document.getElementById('marker');
var message = document.getElementById('message');
var scoreSection = document.getElementById('score');
var highsc = document.getElementById('highscore');
var againbtn = document.getElementById('again');

function checkYourGuess() {
    var guessedNumber = parseInt(userGuess.value);
    console.log(guessedNumber);
    if(guessedNumber>20 || guessedNumber<1){
        console.log('Please guess a number between 1 and 20');
    } else {
        if(guessedNumber==luckyNumber){
            mainSection.style.backgroundColor = '#009933';
            console.log('You Won !!!');
            marker.innerText = '😎';
            message.innerText = 'You Won !!!'
            if(highScore<score) {
                highScore = score;
                highsc.innerText = highScore;
            }
        } else if(guessedNumber<luckyNumber) {
            console.log('Too Low');
            mainSection.style.backgroundColor = '#cc0000';
            marker.innerText = '😫';
            score--;
            scoreSection.innerText = score;
            message.innerText = 'Your Guess is Too Low, guess higher';
        } else if(guessedNumber>luckyNumber){
            console.log('Too High');
            mainSection.style.backgroundColor = '#cc3300';
            marker.innerText = '😫';
            score--;
            scoreSection.innerText = score;
            message.innerText = 'Your Guess is Too High, guess lower';
        }
    }
}

function restart() {
    luckyNumber = Math.floor(Math.random()*20);
    console.log(luckyNumber);
    score = 20;
    mainSection.style.backgroundColor = '#222';
    marker.innerText = '?';
    message.innerText = 'Start Guessing...';
}

checkbtn.addEventListener('click',checkYourGuess);
againbtn.addEventListener('click',restart);





