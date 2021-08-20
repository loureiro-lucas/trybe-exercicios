// arrays feitos pelo Adadezer Iwazaki, turma 15A da Trybe.

const arraySiglaEstado = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RS', 'RR', 'SC', 'SE', 'SP', 'TO'];
const arrayNomeEstado = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato rosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];
let fullname = document.getElementById('user-fullname');
let email = document.getElementById('user-email');
let cpf = document.getElementById('user-cpf');
let adress = document.getElementById('user-adress');
let state = document.getElementById('user-state');
let types = document.getElementsByName('house-type');
let abstract = document.getElementById('user-abstract');
let position = document.getElementById('user-position');
let positionDescription = document.getElementById('user-position-description');
let startingDate = document.getElementById('position-starting-date');


function createStatesOptions() {
  const selector = document.getElementById('user-state');
  for (let index = 0; index < arraySiglaEstado.length; index += 1) {
    const state = document.createElement('option');
    state.innerText = arrayNomeEstado[index];
    state.value = arraySiglaEstado[index];
    selector.appendChild(state);
  }
}

createStatesOptions();

//------------------------------









// function checkName() {
//   let fullnameValue = fullname.value;
//   if (fullnameValue.length > 0 && fullnameValue.length <= 40) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function checkEmail() {
//   let emailValue = email.value;
//   if (emailValue.length > 0 && emailValue.length <= 50) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function checkCpf() {
//   let cpfValue = cpf.value;
//   if (cpfValue.length === 11) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function checkAdress() {
//   adressValue = adress.value;
//   if (adressValue.length > 0 && adressValue.length <= 200) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function checkState() {
//   let stateValue = state.value;
//   if (stateValue !== '') {
//     return true;
//   } else {
//     return false;
//   }
// }

// function checkHouseType() {
//   if (types[0].checked === true || types[1].checked === true) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let houseType = '';

// function whatType() {
//   if (types[0].checked === true) {
//     houseType = types[0].value;
//   } else if (types[1].checked === true) {
//     houseType = types[1].value;
//   }
// }

// function checkAbstract() {
//   let abstractValue = abstract.value;
//   if (abstractValue.length > 0 && abstractValue.length <= 1000) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function checkPosition() {
//   let positionValue = position.value;
//   if (positionValue.length > 0 && positionValue.length <= 40) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function checkPositionDescription() {
//   let positionDescriptionValue = positionDescription.value;
//   if (positionDescriptionValue.length > 0 && positionDescriptionValue.length <= 500) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function checkStartingDay() {
//   let startingDateValue = startingDate.value;
//   let day = [];
//   for(let index = 8; index < 10; index += 1) {
//     day.push(startingDateValue[index]);
//   }
//   day = day.join('');
//   day = parseInt(day);

//   if (day > 0 && day <= 31) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function checkStartingMonth() {
//   let startingDateValue = startingDate.value;
  
//   let month = [];
//   for(let index = 5; index < 7; index += 1) {
//     month.push(startingDateValue[index]);
//   }
//   month = month.join('');
//   month = parseInt(month);

//   if (month > 0 && month <= 12) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function checkStartingYear() {
//   let startingDateValue = startingDate.value;

//   let year = [];
//   for(let index = 0; index < 4; index += 1) {
//     year.push(startingDateValue[index]);
//   }
//   year = year.join('');
//   year = parseInt(year);

//   if (year > 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function validation(event) {
//   event.preventDefault();
//   whatType();
//   let div = document.createElement('div');
//   let body = document.getElementsByTagName('body')[0];
//   if (checkName() && checkEmail() && checkCpf() && checkAdress() && checkState() && checkHouseType() && checkAbstract() && checkPosition() && checkPositionDescription() && checkStartingDay() && checkStartingMonth() && checkStartingYear()) {
//     div.innerHTML = fullname.name+': '+fullname.value+'<br>'+email.name+': '+email.value+'<br>'+cpf.name+': '+cpf.value+'<br>'+adress.name+': '+adress.value+'<br>'+state.name+': '+state.value+'<br>'+types[0].name+': '+houseType+'<br>'+abstract.name+': '+abstract.value+'<br>'+position.name+': '+position.value+'<br>'+positionDescription.name+': '+positionDescription.value+'<br>'+startingDate.name+': '+startingDate.value;
//     body.appendChild(div);
//   } else {
//     if (checkStartingDay() !== true || checkStartingMonth() !== true || checkStartingYear() !== true) {
//       div.innerHTML = 'Data inválida';
//     body.appendChild(div);
//     } else {
//       div.innerText = 'Dados inválidos';
//     body.appendChild(div);
//     }
//   }
// }

// function submitButton() {
//   let button = document.getElementById('submit-button');
//   button.addEventListener('click', validation);
// }

// submitButton();
