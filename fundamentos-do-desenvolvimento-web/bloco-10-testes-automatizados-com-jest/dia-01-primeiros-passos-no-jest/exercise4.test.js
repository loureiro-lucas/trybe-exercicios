const myFizzBuzz = require('./exercise4');

describe('test myFizzBuzz function', () => {
  it('test if myFizzBuzz with a number divisible by 3 and 5 returns fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('test if myFizzBuzz with a number divisible by 3 fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  it('test if myFizzBuzz with a number divisible by 5 returns buzz', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it('test if myFizzBuzz with a number not divisible by 3 and/or 5 returns the number itself', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });
  it('test if myFizzBuzz with a number divisible by 3 and 5 returns fizzbuzz', () => {
    expect(myFizzBuzz('x')).toBeFalsy();
  });
});
