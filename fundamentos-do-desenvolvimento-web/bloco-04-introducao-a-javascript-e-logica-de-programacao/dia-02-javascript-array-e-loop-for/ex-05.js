let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let biggest = null;

for (let number of numbers) {
  if (number > biggest) {
    biggest = number
  };
};

console.log (biggest);