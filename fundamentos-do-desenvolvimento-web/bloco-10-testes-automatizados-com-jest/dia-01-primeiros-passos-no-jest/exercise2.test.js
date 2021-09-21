const myRemove = require('./exercise2');

describe('test myRemove function', () => {
  const array = [1, 2, 3, 4];

  it('test if myRemove([1, 2, 3, 4], 3) return [1, 2, 4]', () => {
    expect(myRemove(array, 3)).toEqual([1, 2, 4]);
  });

  it('test if myRemove([1, 2, 3, 4], 3) do not return [1, 2, 3, 4]', () => {
    expect(myRemove(array, 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('test if myRemove([1, 2, 3, 4], 3) do not change original array', () => {
    myRemove(array, 3);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  it('test if myRemove([1, 2, 3, 4], 5) return [1, 2, 3, 4]', () => {
    expect(myRemove(array, 5)).toEqual([1, 2, 3, 4]);
  });
});