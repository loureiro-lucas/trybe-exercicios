// EXERCISE 1
// const assert = require('assert');
// const addOne = array => {
//   let newArray = [];
//   for (item of array) {
//     newArray.push(item + 1);
//   }
//   return newArray;
// }

// const myArray = [31, 57, 12, 5];
// const unchanged = [31, 57, 12, 5];
// const expected = [32, 58, 13, 6];
// const output = addOne(myArray);

// assert.strictEqual(typeof addOne, 'function');
// assert.deepStrictEqual(output, expected);
// assert.deepStrictEqual(myArray, unchanged);

// EXERCISE 2
// const assert = require('assert');
// const wordLengths = wordsArray => {
//   let newArray = [];
//   for (word of wordsArray) {
//     newArray.push(word.length);
//   }
//   return newArray;
// }

// const words = ['sun', 'potato', 'roundabout', 'pizza'];
// const expected = [3, 6, 10, 5];

// assert.strictEqual(typeof wordLengths, 'function');
// const output = wordLengths(words);
// assert.deepStrictEqual(output, expected);

// EXERCISE 3
const assert = require('assert');
const sumAllNumbers = numbers => {
  let sum = 0;
  for (number of numbers) {
    sum += number;
  }
  return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);