const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checker = (rightAnswers, studentAnswers) => {
  let score = 0;
  for (index in studentAnswers) {
    if (studentAnswers[index] !== 'N.A') {
      studentAnswers[index] === rightAnswers[index] ? score += 1 : score -= 0.5;
    }
  }
  return score;
}

const testResult = (rightAnswers, studentAnswers, checker) => checker(rightAnswers, studentAnswers);

console.log(testResult(RIGHT_ANSWERS, STUDENT_ANSWERS, checker));
