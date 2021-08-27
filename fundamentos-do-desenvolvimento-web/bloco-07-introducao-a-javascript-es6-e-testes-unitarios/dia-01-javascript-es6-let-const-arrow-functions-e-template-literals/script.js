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
const fatorial = n => {
  let resultado = 1;
  for(let index = n; index > 0; index -= 1) {
    resultado *= index;
  }
  return resultado;
}

console.log(fatorial(0));