const getLargestNumber = (array) => {
  let largestNumber = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > largestNumber) {
      largestNumber = array[index];
    }
  }
  return largestNumber;
}

const parameter1 = [45, 8, 2, 50, 1, 7, 99];
const result1 = 99;

const parameter2 = [45, 8, 200, 50, 1, 7, 99];
const result2 = 200;

const parameter3 = [4500, 8, 2, 50, 1, 7, 99];
const result3 = 4500;

const assert = require('assert');

assert.strictEqual(typeof(getLargestNumber), 'function');
assert.deepStrictEqual(getLargestNumber(parameter1), result1);
assert.deepStrictEqual(getLargestNumber(parameter2), result2);
assert.deepStrictEqual(getLargestNumber(parameter3), result3);
