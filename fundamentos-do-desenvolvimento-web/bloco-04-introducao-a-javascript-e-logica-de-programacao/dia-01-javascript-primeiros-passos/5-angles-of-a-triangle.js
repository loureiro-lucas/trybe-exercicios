let angle1 = 40;
let angle2 = 60;
let angle3 = 80;
let triangle;

if (angle1 < 0 || angle2 < 0 || angle3 < 0) {
  triangle = 'erro';
} else if (angle1 + angle2 + angle3 == 180) {
  triangle = true;
} else {
  triangle = false;
};

console.log (triangle);
