function biggestName(array) {
  let biggest = "";
  // let index = "";
  for (listedName of array) {
    if (listedName.length>biggest.length) {
      biggest = listedName;
      // index = array.indexOf(listedName);
    }
  }
  return biggest;
}

array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(biggestName(array));
