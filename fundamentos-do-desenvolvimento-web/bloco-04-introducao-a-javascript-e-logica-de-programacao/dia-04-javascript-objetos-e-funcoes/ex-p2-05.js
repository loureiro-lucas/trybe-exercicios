function mostRepeatedNumber(array) {
  let mostRepeated = "";
  let totalRepetitions = 0;
  for (number of array) {
    let numberRepeated = "";
    let repetitions = 0;
    for (let index = 0; index < array.length; index += 1) {
      numberRepeated = number;
      if (array[index] === number) {
        repetitions += 1;
      }
      if (repetitions>totalRepetitions) {
        totalRepetitions = repetitions;
        mostRepeated = numberRepeated;
      }
    }
  }
  return mostRepeated;
}

array = [2, 3, 2, 5, 8, 2, 3];

console.log(mostRepeatedNumber(array));
