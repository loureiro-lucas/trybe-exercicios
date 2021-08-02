let n = 5;
let line = '';

if (n>1) {
  for (let index = 1; index <= n; index += 1) {
    line += '*';
  }
  for (let index = 1; index <= n; index += 1) {
    console.log(line);
  }
}
