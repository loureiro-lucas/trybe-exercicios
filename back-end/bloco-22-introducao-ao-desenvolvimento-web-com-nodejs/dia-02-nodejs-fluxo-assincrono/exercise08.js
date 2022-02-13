const fizzBuzzPromisse = (number) => {
  if (number > 0) {
    return new Promise((resolve, reject) => {
      if (number % 3 === 0 && number % 5 === 0) {
        resolve('FizzBuzz');
      } else if (number % 3 === 0) {
        resolve('Fizz');
      } else if (number % 5 === 0) {
        resolve('Buzz');
      } else {
        reject(number);
      };
    });
  };
};

fizzBuzzPromisse(17)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
