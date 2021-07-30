let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let number of numbers) {
  sum += number;
};

let average = sum / numbers.length;

if (average > 20) {
  console.log('Value greater than 20.')
} else {
  console.log('Value smaller or equal to 20.');
};
