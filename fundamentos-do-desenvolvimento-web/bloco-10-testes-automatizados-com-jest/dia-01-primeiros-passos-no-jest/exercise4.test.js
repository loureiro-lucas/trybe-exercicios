const myFizzBuzz = require('./exercise4');

describe('test myFizzBuzz function', () => {
  it('test if myFizzBuzz with a number divisible by 3 and 5 returns fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
});
