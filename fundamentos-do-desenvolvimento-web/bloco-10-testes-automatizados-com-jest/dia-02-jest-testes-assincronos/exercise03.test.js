const { expect } = require('@jest/globals');
const { getUserName } = require('./exercise02');

describe('test function getUserName', () => {
  it('test if when there is a valid id(1), the right name(Mark) is returned', async () => {
    await expect(getUserName(1)).resolves.toBe('Mark');
  })

  it('test if when there is a valid id(2), the right name(Paul) is returned', async () => {
    await expect(getUserName(2)).resolves.toBe('Paul');
  })

  it('test if when there is not a valid id, an error is returned', async () => {
    expect.assertions(1);
    await expect(getUserName(3)).rejects.toEqual(new Error('User with 3 not found.'))

    // ANOTHER OPTION
    // try {
    //   await getUserName(3);
    // } catch(error) {
    //   expect(error.message).toEqual('User with 3 not found.')
    // }
  })
});
