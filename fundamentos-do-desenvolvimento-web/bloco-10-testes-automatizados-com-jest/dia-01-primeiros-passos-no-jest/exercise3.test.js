const myRemoveWithoutCopy = require('./exercise3');

describe('test myRemoveWithoutCopy function', () => {

  it('test if myRemoveWithoutCopy([1, 2, 3, 4], 3) return [1, 2, 4]', () => {
    const array = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(array, 3)).toEqual([1, 2, 4]);
  });

  it('test if myRemoveWithoutCopy([1, 2, 3, 4], 3) do not return [1, 2, 3, 4]', () => {
    const array = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(array, 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('test if myRemoveWithoutCopy([1, 2, 3, 4], 3) do change original array', () => {
    const array = [1, 2, 3, 4];
    myRemoveWithoutCopy(array, 3);
    expect(array).toEqual([1, 2, 4]);
  });

  it('test if myRemoveWithoutCopy([1, 2, 3, 4], 5) return [1, 2, 3, 4]', () => {
    const array = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(array, 5)).toEqual([1, 2, 3, 4]);
  });
});
