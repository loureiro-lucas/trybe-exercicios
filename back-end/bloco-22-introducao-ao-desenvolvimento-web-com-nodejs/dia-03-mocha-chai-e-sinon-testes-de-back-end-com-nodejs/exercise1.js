const positiveOrNegative = (number) => {
  if (typeof number !== 'number') {
    return 'This is not a number!';
  } else if (number === 0) {
    return 'neutro';
  } if (number > 0) {
    return "positivo";
  } return "negativo";
};

module.exports = positiveOrNegative;