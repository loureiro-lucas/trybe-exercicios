let { randomNumber } = require('./exercise01');

describe('testing randomNumber function', () => {
  it('mocking it with value = 10', () => {
    randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(randomNumber(10, 5)).toBe(2);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });
});
