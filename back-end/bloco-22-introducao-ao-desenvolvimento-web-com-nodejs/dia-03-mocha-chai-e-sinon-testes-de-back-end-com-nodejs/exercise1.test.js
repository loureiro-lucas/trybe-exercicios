const { expect } = require('chai');
const positiveOrNegative = require('./exercise1');

describe('testes sobre a função positiveOrNegative', () => {

  describe('testa se a função positiveOrNegative existe', () => {
    it('a função positiveOrNegative existe', () => {
      expect(positiveOrNegative).to.exist;
    });
    
    it('positiveOrNegative é uma função', () => {
      expect(positiveOrNegative).to.be.a('function');
    });
  });

  describe('testa o retorno da função quando recebe números', () => {
    it('a função recebe um número positivo e retorna \'positivo\'', () => {
      const resposta = positiveOrNegative(10);
      expect(resposta).to.be.equals('positivo');
    });

    it('a função recebe um número negativo e retorna \'negativo\'', () => {
      const resposta = positiveOrNegative(-10);
      expect(resposta).to.be.equals('negativo');
    });

    it('a função recebe o número zero e retorna \'neutro\'', () => {
      const resposta = positiveOrNegative(0);
      expect(resposta).to.be.equals('neutro');
    });
  });

  describe('testa o retorno da função quando não recebe números', () => {
    it('a função não recebe parâmetros', () => {
      const resposta = positiveOrNegative();
      expect(resposta).to.be.equals('This is not a number!');
    });

    it('a função recebe uma string', () => {
      const resposta = positiveOrNegative('teste');
      expect(resposta).to.be.equals('This is not a number!');
    });

    it('a função recebe um array', () => {
      const resposta = positiveOrNegative([]);
      expect(resposta).to.be.equals('This is not a number!');
    });

    it('a função recebe um objeto', () => {
      const resposta = positiveOrNegative({});
      expect(resposta).to.be.equals('This is not a number!');
    });
  });

});