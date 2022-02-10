const readlineSync = require('readline-sync');

const height = readlineSync.questionFloat("What's your height(m)? ");
const weight = readlineSync.questionFloat("What's your weight(kg)? ");

const imc = (height, weight) => weight/(height ^ 2);

console.log(imc(height, weight));
