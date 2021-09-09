const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.join().split('')
  .reduce((total, letter) => letter.toLowerCase() === 'a' ? total += 1 : total, 0);
}

assert.deepStrictEqual(containsA(), 20);