function smallestIndex(array) {
  let smallest = array[0];
  let index = 0;
  for (number of array) {
    if (number<smallest) {
      smallest = number;
      index = array.indexOf(number);
    }
  }
  return index;
}

array = [2, 3, 6, 7, 10, 1];

console.log(smallestIndex(array));
