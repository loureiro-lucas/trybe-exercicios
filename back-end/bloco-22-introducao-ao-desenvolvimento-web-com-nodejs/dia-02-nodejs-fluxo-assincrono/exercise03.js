const exercise01 = (number1, number2, number3) => {
  const promise = new Promise((resolve, reject) => {
    const numbers = [number1, number2, number3];
    if (numbers.find((number) => typeof number !== 'number')) {
      reject(new Error('Informe apenas números'));
    };
    const result = (number1 + number2) * number3;
    if (result < 5000) {
      reject(new Error('Valor muito baixo'));
    } else {
      resolve(`O valor é ${result}!`);
    };
  });
  return promise;
};

const exercise02 = async () => {
  const number1 = 'a';
  const number2 = Math.floor((Math.random() * 100) + 1);
  const number3 = Math.floor((Math.random() * 100) + 1);

  try {
    const promiseReturn = await exercise01(number1, number2, number3);
    console.log(promiseReturn);
  } catch (error) {
    console.log(`${error}`);
  }
};

exercise02();
