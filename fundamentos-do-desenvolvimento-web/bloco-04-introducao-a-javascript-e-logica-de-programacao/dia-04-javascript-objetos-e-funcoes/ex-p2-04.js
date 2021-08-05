function biggestName(array) {
  let biggest = "";
  for (listedName of array) {
    if (listedName.length>biggest.length) {
      biggest = listedName;
    }
  }
  return biggest;
}

array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(biggestName(array));
