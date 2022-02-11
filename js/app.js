'use strict';

// ask the user for their name, than as a response to each question use template literals to return a customized answer.
// prompt to establish userName let. And use

// a JS function to capitalize the first letter of a string. sourced from https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
let correctAnswers = 0;
let userName = capitalizeFirstLetter(prompt('Hello and welcome! Whats your name?'));
alert(`Welcome ${userName}, Here is a handful of questions about me!`);
let correct = 0;



function questionCat(userName) {
    //let correct = 0;
    // question one for About me
    let answerOne = prompt('Do I have a puppy?').toUpperCase();
    const yes = 'YES';
    const y = 'Y';
    const no = 'NO';
    const n = 'N';

    if (answerOne === yes || answerOne === y) {
        alert(`I do not ${userName}! I've got a great kitty cat.`);
        //console.log('You are wrong, I dont have a dog.');
        
    } else if (answerOne === no || answerOne === n) {
        alert(`You got it ${userName}! No puppy in my life.`);
        // console.log('Nailed it! I\'ve got a wonderful cat!');
        correct += 1;
    } else {
        console.log('Please answer with a yes or no');
    }
    console.log(correct);
    //return correct;
}


function rightAnswers(correct, correctAnswers) {
    correctAnswers = correctAnswers + correct;
    //sum of  all correct answers and return that value
    return correctAnswers;
}
rightAnswers(correct, correctAnswers);
console.log(correctAnswers);
function questionMarried(userName, correctAnswers) {
//let correct =0
    // question two 
    let answerTwo = prompt('Am I married?').toUpperCase();
    const yes = 'YES';
    const y = 'Y';
    const no = 'NO';
    const n = 'N';

    if (answerTwo === yes || answerTwo === y) {
        alert(`That is correct ${userName}! I got married in August of 2020.`);
        correct += 1;
        // console.log('You got it! I am married.');
    } else if (answerTwo === no || answerTwo === n) {
        alert(`Sorry that is incorrect ${userName}. I got married in August of 2020.`);
        // console.log('Sorry thats wrong. I am married.');
    } else {
        console.log('Please answer with a yes or no');
    }
    //return correct;
}

rightAnswers(correct,correctAnswers);
console.log(correctAnswers);

function questionMusic(userName, correctAnswers) {
    // question three
    let answerThree = prompt('Am I a musician?').toUpperCase();
    const yes = 'YES';
    const y = 'Y';
    const no = 'NO';
    const n = 'N';

    if (answerThree === yes || answerThree === y) {
        alert(`I think the term is a little generous for what I do, but you are correct ${userName}.`);
        correct += 1;
        // console.log('Correct! Ben poorly plays guitar in a terrible punk band!');
    } else if (answerThree === no || answerThree === n) {
        alert(`You get partial credit ${userName}. I dont think of myself as one, but I do play guitar.`);
        // console.log('Incorrect! I play guitar in a really bad punk band.');
    } else {
        console.log('Please answer with a yes or no');
    }
    //return correctAnswers;
}

function questionWa(userName, correctAnswers) {
    // question four
    let answerFour = prompt('Am I a Washington state native?').toUpperCase();
    const yes = 'YES';
    const y = 'Y';
    const no = 'NO';
    const n = 'N';

    if (answerFour === yes || answerFour === y) {
        alert(`Nailed it! ${userName}. Born and raised here in the evergreen state!`);
        correct += 1;
        // console.log('Correct answer! I was born in Everett.');
    } else if (answerFour === no || answerFour === n) {
        alert(`Ah, sorry ${userName}, I am a Washington state native.`);
        // console.log('answered incorrectly. I was born in Everett.');
    } else {
        console.log('Please answer with a yes or no');
    }
    //return correctAnswers;
}

function questionAmbi(userName, correctAnswers) {


    // question five
    let answerFive = prompt('Am I ambidextrous?').toUpperCase();
    const yes = 'YES';
    const y = 'Y';
    const no = 'NO';
    const n = 'N';

    if (answerFive === yes || answerFive === y) {
        alert(`Thats right ${userName}, I swap between left and right hand depending on the task I am doing.`);
        correct += 1;
        // console.log('Correct answer! I am ambidextrous.');
    } else if (answerFive === no || answerFive === n) {
        alert(`Ah darn, wrong answer ${userName}.`);
        // console.log('Incorrect answer, I am.');
    } else {
        console.log('Please answer with a yes or no');
    }
    //return correctAnswers;
}


function questionNumb(userName, correctAnswers) {
    // Question Six

    let numGuess = prompt(`Okay ${userName} Guess a number between 0 and 10. Whole numbers only!`);
    let correctNum = Math.floor(Math.random() * 10);
    let i = 0;

    // While `i` is less than or equal too 5 Loop through the if else statement. which checks if the number is high or low. If the guess is correct, break out of the while loop.
    // I still need to tell the user what the correct number was if they run out of guesses.

    while (i < 3) {
        i++;
        if (numGuess > correctNum) {
            alert(`Your guess of ${numGuess} Is too high! Guess again.`);
            numGuess = prompt(`Enter a new guess ${userName}, your last guess of ${numGuess} was too high.`);
        } else if (numGuess < correctNum) {
            alert(`Your guess of ${numGuess} is too low! Guess again.`);
            numGuess = prompt(`Enter a new guess ${userName}, your last guess of ${numGuess} was too low. `);
        } else {
            correct += 1;
            alert(`You got it ${userName}! the correct number is ${correctNum} and it took you ${i} guesses.`);
            break;
        }
    }
    alert(`Sorry ${userName}, You've run out of guesses. The correct number was ${correctNum}`);
    //return correctAnswers;
}

// question 7
// create an array with multiple objects. These objects are the possible correct answers to a question.
// ask the question and prompt the user for an answer. store the answer and iterate through the array to check for that answer. If the array contains the answer congratulate and exit loop
// If the array doers not contain the users answer, ++ to a counter and prompt the user to guess again. The user should have 6 guesses before the loop exits with a "sorry you didn't get it within 6 guesses." And display contents of the array to show the correct answers.
//use a for loop to iterate through the array

function questionTravel(userName, correctAnswers) {

    let myArr = ['BRAZIL', 'THAILAND', 'IRELAND', 'CHINA', 'CANADA', 'MEXICO', 'ICELAND'];
    let answer = prompt('I\'ve been lucky to tavel a lot in my life. Name one country you think I have traveled too!').toUpperCase();

    let turn = 0;
    let index = 0;
    let attempts = 6;
    breaklabel:
    for (turn = 0; turn < attempts; turn++) {
        do {
            let isTrue = false;
            for (index = 0; index < myArr.length; index++) {
                isTrue = (answer === myArr[index]);
                if (isTrue === true) {
                    break;
                }
            }
            if (isTrue) {
                alert(`You got one! I loved traveling to ${answer}`);
                answer = true;
                correct += 1;
                break breaklabel;
            } else if (turn === 5) {
                alert(`You've run out of turns, the correct answers were ${myArr}`);
                break breaklabel;
            } else {
                alert('Sorry I haven\'t been there.');
                answer = prompt('Try another country.').toUpperCase();
                break;
            }
        } while (answer !== true);
    }
    //return correctAnswers;
}




questionCat(userName);
questionMarried(userName, correctAnswers);
questionMusic(userName, correctAnswers);
questionWa(userName, correctAnswers);
questionAmbi(userName, correctAnswers);
questionNumb(userName, correctAnswers);
questionTravel(userName, correctAnswers);
alert(`Okay, ${userName} you got ${correct} out of 7 questions correct!`);




/*


let attempts = 4;
let answer = Math.floor(Math.random() * 10);

while (attempts){
    attempts--;
    let userGuess = prompt('Guess a number between 0 and 10');
    if (+userGuess === answer) {
    alert('Yay you got the answer correct');
    break;
    } else if (+userGuess > answer) {
    alert('Too high');
    } else {
    alert('Too low');
    }

    if (attempts === 0) {
    alert(`You've run out of quesses the correct number was ${answer}`);
    }
}

*/


