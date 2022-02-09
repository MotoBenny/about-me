'use strict';

// ask the user for their name, than as a response to each question use template literals to return a customized answer.
// prompt to establish userName let. And use

// a JS function to capitalize the first letter of a string. sourced from https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let userName = capitalizeFirstLetter(prompt('Hello and welcome! Whats your name?'));
alert(`Welcome ${userName}, Here is a handful of questions about me!`);

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
} else {
    console.log('Please answer with a yes or no');
}

// question two
let answerTwo = prompt('Am I married?').toUpperCase();

if (answerTwo === yes || answerTwo === y) {
    alert(`That is correct ${userName}! I got married in August of 2020.`);
    // console.log('You got it! I am married.');
} else if (answerTwo === no || answerTwo === n) {
    alert(`Sorry that is incorrect ${userName}. I got married in August of 2020.`);
    // console.log('Sorry thats wrong. I am married.');
} else {
    console.log('Please answer with a yes or no');
}

// question three
let answerThree = prompt('Am I a musician?').toUpperCase();

if (answerThree === yes || answerThree === y) {
    alert(`I think the term is a little generous for what I do, but you are correct ${userName}.`);
    // console.log('Correct! Ben poorly plays guitar in a terrible punk band!');
} else if (answerThree === no || answerThree === n) {
    alert(`You get partial credit ${userName}. I dont think of myself as one, but I do play guitar.`);
    // console.log('Incorrect! I play guitar in a really bad punk band.');
} else {
    console.log('Please answer with a yes or no');
}

// question four
let answerFour = prompt('Am I a Washington state native?').toUpperCase();

if (answerFour === yes || answerFour === y) {
    alert(`Nailed it! ${userName}. Born and raised here in the evergreen state!`);
    // console.log('Correct answer! I was born in Everett.');
} else if (answerFour === no || answerFour === n) {
    alert(`Ah, sorry ${userName}, I am a Washington state native.`);
    // console.log('answered incorrectly. I was born in Everett.');
} else {
    console.log('Please answer with a yes or no');
}

// question five
let answerFive = prompt('Am I ambidextrous?').toUpperCase();

if (answerFive === yes || answerFive === y) {
    alert(`Thats right ${userName}, I swap between left and right hand depending on the task I am doing.`);
    // console.log('Correct answer! I am ambidextrous.');
} else if (answerFive === no || answerFive === n) {
    alert(`Ah darn, wrong answer ${userName}.`);
    // console.log('Incorrect answer, I am.');
} else {
    console.log('Please answer with a yes or no');
}
