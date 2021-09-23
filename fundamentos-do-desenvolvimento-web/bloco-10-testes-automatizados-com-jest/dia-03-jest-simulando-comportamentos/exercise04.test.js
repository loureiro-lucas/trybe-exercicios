let { upperCase, firstLetter, stringConcater } = require('./exercise04');

describe('mocking functions with new implementations', () => {
  it('mocking first function', () => {
    upperCase = jest.fn().mockImplementationOnce((string) => string.toLowerCase());

    expect(upperCase('TesTe')).toBe('teste');
    expect(upperCase).toHaveBeenCalled();
    expect(upperCase).toHaveBeenCalledTimes(1);
    expect(upperCase).toHaveBeenCalledWith('TesTe');
  });

  it('mocking second function', () => {
    firstLetter = jest.fn().mockImplementationOnce((string) => string.charAt(string.length - 1));

    expect(firstLetter('TesTe')).toBe('e');
    expect(firstLetter).toHaveBeenCalled();
    expect(firstLetter).toHaveBeenCalledTimes(1);
    expect(firstLetter).toHaveBeenCalledWith('TesTe');
  });

  it('mocking third function', () => {
    stringConcater = jest.fn().mockImplementationOnce((string1, string2, string3) => string1 + string2 + string3);

    expect(stringConcater('TesTe', 'de', 'mock')).toBe('TesTedemock');
    expect(stringConcater).toHaveBeenCalled();
    expect(stringConcater).toHaveBeenCalledTimes(1);
    expect(stringConcater).toHaveBeenCalledWith('TesTe', 'de', 'mock');
  });
});
