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
// first answer
// const allLessons = {lesson1, lesson2, lesson3};
// second answer after checking template
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

// EXERCISE 6
const studentCounter = objectName => {
  const lessons = Object.keys(objectName);
  let students = 0;
  for (index in lessons) {
    // first answer
    // const currentLesson = objectName[lesson];
    // students += currentLesson.numeroEstudantes;
    // second answer after checking template
    students += objectName[lessons[index]].numeroEstudantes;
  }
  return students;
}

// EXERCISE 7
const valueByIndex = (objectName, index) => Object.values(objectName)[index];


// EXERCISE 8
const objectChecker = (objectName, keyName, valueName) => {
  const entries = Object.entries(objectName);
  let contains = false;
  for(index in entries) {
    if (entries[index][0] === keyName && entries[index][1] === valueName) {
      contains = true;
    }
  }
  return contains;
}

