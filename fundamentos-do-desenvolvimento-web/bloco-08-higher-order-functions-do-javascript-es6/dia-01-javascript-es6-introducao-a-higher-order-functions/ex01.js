const newEmployee = (nome) => ({
  Nome: nome,
  Email: `${nome.toLowerCase().replace(/ /g, '_')}@trybe.com`,
})

const newEmployees = (newEmployee) => {
  const employees = {
    id1: newEmployee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: newEmployee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: newEmployee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }  
  return employees;
};  

console.log(newEmployees(newEmployee));
