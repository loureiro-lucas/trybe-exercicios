let n = 5;
let x = n;

for (let index = 1; index <= n; index += 1) {
  let line = '';
  for (let index_2 = 1; index_2 < x; index_2 += 1) {
    line += ' ';
  }
  for (let index_3 = 1; index_3 <= index; index_3 += 1) {
    line += '*';
  }
  x -= 1; 
  console.log(line);
}
