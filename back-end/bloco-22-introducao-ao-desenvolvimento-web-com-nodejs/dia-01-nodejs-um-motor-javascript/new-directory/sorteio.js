const readlineSync = require('readline-sync');

const userGuess = readlineSync.questionInt('Guess a number between 1 and 10: ');

const randomNumber = Math.floor((Math.random() * 10) + 1);

const game = (userGuess, randomNumber) => {
  if (userGuess === randomNumber) {
    console.log(`You nail it! (${randomNumber})`);
  } else {
    console.log(`Not this time! It was ${randomNumber}, not ${userGuess}`);
  };
};

game(userGuess, randomNumber);
