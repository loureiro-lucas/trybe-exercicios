const exercise01 = (number1, number2, number3) => {
  const promise = new Promise((resolve, reject) => {
    const numbers = [number1, number2, number3];
    if (numbers.find((number) => typeof number !== 'number')) {
      reject(new Error('Informe apenas números'));
    };
    const result = (number1 + number2) * number3;
    if (result < 50) {
      reject(new Error('Valor muito baixo'));
    } else {
      resolve(`O valor é ${result}!`);
    };
  });
  return promise;
};

exercise01(1, 10, 10)
  .then((result) => console.log(`Result: ${result}`))
  .catch((error) => console.log (`Error: ${error}`));
