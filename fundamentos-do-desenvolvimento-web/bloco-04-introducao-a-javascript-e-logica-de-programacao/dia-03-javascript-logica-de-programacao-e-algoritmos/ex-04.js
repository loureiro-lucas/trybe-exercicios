let n = 6;
// let x = n/2;

// for (let index = 1; index <= n; index += 2) {
//   let line = '';
//   for (let index_2 = 1; index_2 <= x; index_2 += 1) {
//     line += ' ';
//   }
//   for (let index_3 = 1; index_3 <= index; index_3 += 1) {
//     line += '*';
//   }
//   for (let index_2 = 1; index_2 < x; index_2 += 1) {
//     line += ' ';
//   }
//   x -= 1; 
//   console.log(line);
// }


for (let index = 1; index <= (n); index += 2) {
  let line = '';
  let asterisk = '';
  let space = '';
  for (let index_2 = 1; index_2 <= index; index_2 += 1) {
    asterisk += '*';
  }
  for (let index_3 = 1; index_3 <= ((n-index)/2); index_3 += 1) {
    space += ' ';
  }
  line = space + asterisk + space; 
  console.log(line);
}
