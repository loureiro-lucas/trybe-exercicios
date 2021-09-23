let { randomNumber } = require('./exercise01');

describe('testing randomNumber function', () => {
  it('mocking it with value = 10', () => {
    randomNumber = jest.fn().mockReturnValue(10);

    randomNumber();
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber()).toBe(10);
    expect(randomNumber).toHaveBeenCalledTimes(2);
  });
});
