const { getUserName } = require('./exercise02');

describe('test function getUserName', () => {
  it('test if when there is a valid id(1), the right name(Mark) is returned', () => (
      getUserName(1).then((user) => {
        expect(user).toBe('Mark');
      })
  ));

  it('test if when there is a valid id(2), the right name(Paul) is returned', () => (
    getUserName(2).then((user) => {
      expect(user).toBe('Paul')
    })
  ));

  it('test if when there is not a valid id, an error is returned', () => {
    expect.assertions(1);
    return getUserName(3).catch((error) => {
      expect(error.message).toBe('User with 3 not found.')
    })
  });
});
