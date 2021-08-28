// EXERCÍCIO 1
// const testingScope = escopo => {
//   if (escopo === true) {
//     let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     const elseScope = `Não devo ser utilizada fora meu escopo (else)`;
//     console.log(elseScope);
//   }
// }

// testingScope(true);

// EXERCÍCIO 2
// const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// const sorter = array => {
//   for (let index = 1; index < array.length; index += 1) {
//     for(let index2 = array.length -1; index2 > 0; index2 -= 1) {
//       let current = array[index2];
//       let previous = array[index2 - 1]
//       if (current < previous) {
//         array[index2] = previous;
//         array[index2 - 1] = current;
//       }
//     }
//   }
//   return array;
// }

// console.log(`Os números ${sorter(oddsAndEvens)} se encontram ordenados de forma crescente!`);

//PARTE 2 - EXERCÍCIO 1
// const fatorial = n => {
//   let resultado = 1;
//   for(let index = n; index > 1; index -= 1) {
//     resultado *= index;
//   }
//   return resultado;
// }

// console.log(fatorial(3));

//PARTE 2 - EXERCÍCIO 2
//const longestWord = "Antônio foi no banheiro e não sabemos o que aconteceu" // retorna 'aconteceu'
// const biggestWord = phrase => {
//   phrase = phrase.split(' ');
//   let biggest = phrase[0];
//   for(let index = phrase.length - 1; index > 0; index -= 1) {
//     if(phrase[index].length >= biggest.length) {
//       biggest = phrase[index];
//     }
//   }
//   return biggest;
// }

// ABAIXO COM MÉTODO .SORT() EM UMA LINHA
// const biggestWord = phrase => (phrase.split(' ').sort((a, b) => b.length - a.length))[0];

// console.log(biggestWord(longestWord))

//PARTE 2 - EXERCÍCIO 4
// const finder = (string, toBeReplaced, replacer) => {
//   let newString = string.split(' ');
//   for (index = 0; index < newString.length; index += 1) {
//     if (newString[index] === toBeReplaced) {
//       newString[index] = replacer;
//     }
//   }
//   return newString.join(' ');
// }

const finder = (string, toBeReplaced, replacer) => {
  string = string.split(' ');
  string[string.findIndex(index => index === toBeReplaced)] = replacer;
  return string.join(' ');
}

console.log(finder('A trybe é x', 'x', 'foda!'));
