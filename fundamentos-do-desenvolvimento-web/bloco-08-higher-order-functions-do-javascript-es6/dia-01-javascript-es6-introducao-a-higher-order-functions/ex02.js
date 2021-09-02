const checker = (bet, drawn) => bet === drawn;

const prizeDraw = (bet, checker) => {
  const drawn = Math.floor((Math.random() * 5) + 1);
  const result = checker(bet, drawn) ? 'Parabéns você ganhou' : 'Tente novamente';
  return result;
}

console.log(prizeDraw(4, checker));
