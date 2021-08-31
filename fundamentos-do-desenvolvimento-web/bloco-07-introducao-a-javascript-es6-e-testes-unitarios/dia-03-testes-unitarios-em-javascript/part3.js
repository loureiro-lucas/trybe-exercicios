// EXERCISE 1
const greetPeople = (people) => {
  let finalGreeting = [];
  for (const person in people) {
    let greeting = 'Hello ';
    greeting += people[person];
    finalGreeting.push(greeting);
  }
  return finalGreeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

const assert = require('assert');

assert.strictEqual(typeof(greetPeople), 'function');
assert.deepStrictEqual(greetPeople(parameter), result);
