let piece = 'queen';

switch (piece.toLowerCase()) {
  case "pawn" :
    console.log ('moves 1 square foward and attacks 1 square diagonally');
    break;
  case "bishop" :
    console.log ('moves and attacks freely diagonally');
    break;
  case "knight" :
    console.log ('moves and attacks in a like a 3x2 L moviment');
    break;
  case "rook" :
    console.log ('moves and attacks freely horizontally or vertically');
    break;
  case "queen" :
    console.log ('moves and attacks freely horizontally, vertically or diagonally');
    break;
  case "king" :
    console.log ('moves and attacks 1 square horizontally, vertically or diagonally');
    break;
  default:
    console.log ('not a chess piece!');
    break;
};
