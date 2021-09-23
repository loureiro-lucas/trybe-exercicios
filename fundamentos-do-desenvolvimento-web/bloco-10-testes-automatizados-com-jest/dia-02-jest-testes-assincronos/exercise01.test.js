const { expect } = require('@jest/globals');
const uppercase = require('./exercise01');

describe('test uppercasefunction', () => {
  it('test if uppercase(test) returns TEST', (done) => {
    uppercase('test', (text) => {
      try {
        expect(text).toBe('TEST');
        done();
      } catch(error) {
        done(error);
      }
    });
  });
});
