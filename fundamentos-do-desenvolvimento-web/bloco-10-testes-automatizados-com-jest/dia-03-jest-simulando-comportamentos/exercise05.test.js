let exercise05 = require('./exercise05');

describe('mocking functions with new implementations', () => {
  it('mocking then reseting and then testing the first function', () => {
    const mockedUpperCase = jest
      .spyOn(exercise05, 'upperCase')
      .mockImplementationOnce((string) => string.toLowerCase());
    
    expect(mockedUpperCase('TesTe')).toBe('teste');
    expect(mockedUpperCase).toHaveBeenCalled();
    expect(mockedUpperCase).toHaveBeenCalledTimes(1);
    expect(mockedUpperCase).toHaveBeenCalledWith('TesTe');
    
    mockedUpperCase.mockRestore();
    expect(exercise05.upperCase('TesTe')).toBe('TESTE');
  });
});
