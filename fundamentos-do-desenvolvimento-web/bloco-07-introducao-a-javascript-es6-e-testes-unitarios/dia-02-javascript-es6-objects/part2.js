const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// EXERCISE 1
const shiftAdder = (objectName, keyName, valueName) => objectName[keyName] = valueName;

shiftAdder(lesson2, 'turno', 'manhã');

// EXERCISE 2
const keyReader = objectName => Object.keys(objectName);

// EXERCISE 3
const objectSize = objectName => Object.keys(objectName).length;

// EXERCISE 4
const valueReader = objectName => Object.values(objectName);

// EXERCISE 5
// primeira resolução
// const allLessons = {lesson1, lesson2, lesson3};
// segunda resolução após consultar gabarito
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

// EXERCISE 6
const studentCounter = objectName => {
  const lessons = Object.keys(objectName);
  let students = 0;
  for (lesson of lessons) {
    const currentLesson = objectName[lesson];
    students += currentLesson.numeroEstudantes;
  }
  return students;
}

console.log(studentCounter(allLessons));