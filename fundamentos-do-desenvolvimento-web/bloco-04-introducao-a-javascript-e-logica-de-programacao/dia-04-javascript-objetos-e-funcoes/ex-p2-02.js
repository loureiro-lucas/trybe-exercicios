function biggestIndex(array) {
  let biggest = "";
  let index = "";
  for (number of array) {
    if (number>biggest) {
      biggest = number;
      index = array.indexOf(number);
    }
  }
  return index;
}

array = [2, 3, 6, 7, 10, 1];

console.log(biggestIndex(array));
