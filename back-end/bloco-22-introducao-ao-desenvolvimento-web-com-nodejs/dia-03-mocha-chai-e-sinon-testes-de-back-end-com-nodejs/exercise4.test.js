const fileWriter = require('./exercise4')
const fs = require('fs');

const { expect } = require('chai');
const sinon = require('sinon');

const TEXT = 'testando sinon stub';

describe('testa a função writeFile', () => {
  it('a resposta é uma string', () => {
    before(() => {
      sinon.stub(fs, 'writeFileSync').returns(TEXT);
    });

    after(() => {
      sinon.restore();
    });

    const fileText = fileWriter('exercise.txt', TEXT);

    expect(fileText).to.be.a('string');
  });

  it('a resposta é o texto esperado', () => {
    before(() => {
      sinon.stub(fs, 'writeFileSync').returns(TEXT);
    });

    after(() => {
      sinon.restore();
    });

    const fileText = fileWriter('exercise.txt', TEXT);

    expect(fileText).to.be.equals(TEXT);
  });
});
