'use strict';

// ask the user for their name, than as a response to each question use template literals to return a customized answer.
// prompt to establish userName let. And use 
let userName = prompt('Hello and welcome! Whats your name?').toLocaleUpperCase;


// question one for About me
let answerOne = prompt('Do I have a puppy?').toUpperCase();

if (answerOne === 'YES' || answerOne === 'Y') {
    alert(`I do not ${userName}! I've got a great Kitty cat.`);
    console.log(`You are wrong, I dont have a dog.`);
} else if (answerOne === 'NO' || answerOne === 'N') {
    alert(`You got it ${userName}! No puppy in my life.`);
    console.log(`Nailed it! I've got a wonderful cat!`);
}

// question two

// question three

// question four

// question five
