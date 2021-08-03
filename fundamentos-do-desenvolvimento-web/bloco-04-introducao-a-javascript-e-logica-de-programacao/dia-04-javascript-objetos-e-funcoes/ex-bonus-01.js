function romanToArabic(roman) {
  const conversionTable = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  roman = roman.toUpperCase();
  let arabicArray = [];
  for (romanNumeral of roman) {
    for (item in conversionTable) {
      if (romanNumeral == item) {
        arabicArray.push(conversionTable[item]);
        break;
      }
    }
  }
  let number = arabicArray[arabicArray.length - 1];
  if (arabicArray.length > 1) {
    for (let index = arabicArray.length -1; index > 0; index -= 1) {
      if (arabicArray[index] > arabicArray[index - 1]) {
        number -= arabicArray[index - 1];
      } else {
        number += arabicArray[index - 1];
      }
    }
  } 

  return number;
}

let romanNumber = 'ixc';

console.log(romanToArabic(romanNumber));
