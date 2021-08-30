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
