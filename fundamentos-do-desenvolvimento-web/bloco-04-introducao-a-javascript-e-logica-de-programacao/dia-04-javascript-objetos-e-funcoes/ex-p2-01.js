function palindrome(line) {
  let reversedLine = line.split("").reverse().join("");
  if (line === reversedLine) {
    return true;
  } else {
    return false;
  }
}
