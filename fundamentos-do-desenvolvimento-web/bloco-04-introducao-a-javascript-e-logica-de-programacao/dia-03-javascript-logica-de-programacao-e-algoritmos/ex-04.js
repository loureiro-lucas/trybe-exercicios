let n = 5;
let summit = 0;
if (n%2===0) {
  summit = 2;
} else {
  summit = 1;
}


for (let index = summit; index <= (n); index += 2) {
  let line = '';
  let asterisks = '';
  let spaces = '';
  for (let index_2 = 1; index_2 <= index; index_2 += 1) {
    asterisks += '*';
  }
  for (let index_3 = 1; index_3 <= ((n-index)/2); index_3 += 1) {
    spaces += ' ';
  }
  line = spaces + asterisks + spaces; 
  console.log(line);
}
