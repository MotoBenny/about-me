'use strict';

// ask the user for their name, than as a response to each question use template literals to return a customized answer.
// prompt to establish userName let. And use

// a JS function to capitalize the first letter of a string. sourced from https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let userName = capitalizeFirstLetter(prompt('Hello and welcome! Whats your name?'));

// question one for About me
let answerOne = prompt('Do I have a puppy?').toUpperCase();

if (answerOne === 'YES' || answerOne === 'Y') {
    alert(`I do not ${userName}! I've got a great Kitty cat.`);
    console.log('You are wrong, I dont have a dog.');
} else if (answerOne === 'No' || answerFour === 'N'){
    alert(`You got it ${userName}! No puppy in my life.`);
    console.log('Nailed it! I\'ve got a wonderful cat!');
}

// question two
let answerTwo = prompt('Am I Married?').toUpperCase();

if (answerTwo === 'YES' || answerTwo === 'Y') {
    alert(`That is correct ${userName}! I got married in august of 2020.`);
    console.log('You got it! I am married.');
} else if (answerTwo === 'NO' || answerTwo === 'N') {
    alert(`Sorry that is incorrect ${userName}. I got married in August of 2020`);
    console.log('Sorry thats wrong. I am married.');
}

// question three
let answerThree = prompt('Am I a musician?').toUpperCase();

if (answerThree === 'YES' || answerThree === 'Y') {
    alert(`I think the term is a little generous for what I do, but you are correct ${userName}.`);
    console.log('Correct! Ben poorly plays guitar in a terrible punk band!');
} else if (answerThree === 'NO' || answerThree === 'N') {
    alert(`You get partial credit ${userName}. I dont think of myself as one, but I do play guitar.`);
    console.log('Incorrect! I play guitar in a really bad punk band.');
}

// question four
let answerFour = prompt('Am I a washington state native?').toUpperCase();

if (answerFour === 'YES' || answerFour === 'Y') {
    alert(`Nailed it! ${userName}. Born and raised here in the evergreen state!`);
    console.log('Correct answer! I was born in Everett.');
} else if (answerFour === 'NO' || answerFour === 'N') {
    alert(`Ah, sorry ${userName}, I am a washington state native.`);
    console.log('answered incorrectly. I was born in Everett.');
}

// question five
let answerFive = prompt('Am I ambidextrous?').toUpperCase();

if (answerFive === 'YES' || answerFive === 'Y') {
    alert(`Thats right ${userName}, I swap between left and right hand depending on the task I am doing.`);
    console.log('Correct answer! I am ambidextrous.');
} else if (answerFive === 'NO' || answerFive === 'N') {
    alert(`Ah darn, wrong answer ${userName}.`);
    console.log('Incorrect answer, I am.');
}
