const myObjects = require('./exercise5');

describe('test if objects are equal or not', () => {
  test('test if obj1 === obj2', () => {
    expect(myObjects.obj1).toEqual(myObjects.obj2);
  });
  test('test if obj1 !== obj3', () => {
    expect(myObjects.obj1).not.toEqual(myObjects.obj3);
  });
  test('test if obj2 !== obj3', () => {
    expect(myObjects.obj2).not.toEqual(myObjects.obj3);
  });
});
