let { randomNumber } = require('./exercise02');

describe('testing randomNumber function', () => {
  it('mocking it with a new implementation ((a, b) => a / b)', () => {
    randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(randomNumber(10, 5)).toBe(2);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });
});
