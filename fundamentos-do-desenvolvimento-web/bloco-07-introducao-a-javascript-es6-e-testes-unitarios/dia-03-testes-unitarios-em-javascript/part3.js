// EXERCISE 1
// const greetPeople = (people) => {
//   let finalGreeting = [];
//   for (const person in people) {
//     let greeting = 'Hello ';
//     greeting += people[person];
//     finalGreeting.push(greeting);
//   }
//   return finalGreeting;
// };

// const parameter = ['Irina', 'Ashleigh', 'Elsa'];
// const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

// const assert = require('assert');

// assert.strictEqual(typeof(greetPeople), 'function');
// assert.deepStrictEqual(greetPeople(parameter), result);

//EXERCISE 2
const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let number = 1;
  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      results.push(number);
      number += 1;
    } else {
      results.push(characters[index]);
    }
  }
  return results.join('');
};


const parameter = 'Dayane';
const result = 'D1y2n3';

const assert = require('assert');

assert.strictEqual(typeof(removeVowels), 'function');
assert.strictEqual(removeVowels(parameter), result);
