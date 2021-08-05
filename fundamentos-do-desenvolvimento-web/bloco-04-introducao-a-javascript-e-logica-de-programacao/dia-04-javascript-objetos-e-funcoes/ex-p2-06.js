function oneToNSum(n) {
  let sum = 0;
  for (let index = 1; index <= n; index += 1) {
    sum += index;
  }
  return sum;
}

console.log(oneToNSum(5));