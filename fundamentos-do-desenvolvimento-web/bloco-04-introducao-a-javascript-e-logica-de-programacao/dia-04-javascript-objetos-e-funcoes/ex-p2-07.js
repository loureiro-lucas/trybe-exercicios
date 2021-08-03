function wordEndChecker(word, ending) {
  let check = true;
  for (let index = 1; index <= ending.length; index +=1) {
    if (ending[ending.length-index] !== word[word.length-index]) {
      check = false;
    }
  }
  return check;
}

console.log(wordEndChecker('trybe', 'be'));
