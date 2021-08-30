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

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

// EXERCISE 1
const mathStudents = objectName => {
  const lessons = Object.keys(objectName);
  let students = 0;
  for(index in lessons) {
    if(objectName[lessons[index]].materia === 'Matemática') {
      students += objectName[lessons[index]].numeroEstudantes;
    }
  }
  return students;
}

// EXERCISE 2
const teacherLog = (objectName, teachersName) => {
  const lessons = Object.keys(objectName);
  let aulas = [];
  let students = 0;
  for(index in lessons) {
    if(objectName[lessons[index]].professor === teachersName) {
      aulas.push(objectName[lessons[index]].materia);
      students += objectName[lessons[index]].numeroEstudantes;
    }
  }
  return {professor: teachersName, aulas: aulas, estudantes: students}
}
