const sum = require('./exercise1');

describe('test sum function', () => {
  it('test if 4 + 5 = 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('test if 0 + 0 = 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('test if 4 + "5" = error', () => {
    expect(() => sum(4, '5')).toThrow(new Error('parameters must be numbers'));
  });
});
