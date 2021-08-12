function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// exercício 1

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function liMaker (liTexts) {
  let daysList = document.getElementById('days');
  for (liText of liTexts) {
    let newLi = document.createElement('li');
    daysList.appendChild(newLi);
    daysList.lastElementChild.innerHTML = liText;
    daysList.lastElementChild.className = 'day';
    if (liText === 24 || liText === 25 || liText === 31) {
      daysList.lastElementChild.className += ' holiday';
    }
    if (liText === 4 || liText === 11 || liText === 18 || liText === 25) {
      daysList.lastElementChild.className += ' friday';
    }
  }
}

liMaker(dezDaysList);

// exercício 2

