let { randomNumber } = require('./exercise01');

describe('testing randomNumber and mocking it with two new implementations', () => {
  it('first implementation', () => {
    randomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);

    expect(randomNumber(10, 5, 2)).toBe(100);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(10, 5, 2);
  });

  it('second implementation', () => {
    randomNumber = jest.fn().mockImplementationOnce((a) => a * 2);

    expect(randomNumber(7)).toBe(14);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(7);
  });
});
