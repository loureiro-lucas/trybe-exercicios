function arrayOfNumbers(vector) {
  let evenNumbers = [];
  for (item of vector) {
    for (number of item) {
      if (number%2===0) {
        evenNumbers.push(number);
      }
    }
  }
  return evenNumbers
}

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

console.log(arrayOfNumbers(vector));
