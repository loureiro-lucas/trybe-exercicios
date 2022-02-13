const fs = require('fs').promises;

const printCharacters = async () => {
  simpsons = await fs.readFile('./simpson.json', 'utf-8');
  characters = await JSON.parse(simpsons);
  characters.forEach(({id, name}) => console.log(`${id} - ${name}`));
};

const getCharacter = async (id) => {
  simpsons = await fs.readFile('./simpson.json', 'utf-8');
  charactersList = await JSON.parse(simpsons);
  character = charactersList.find((character) => character.id === id);
  if (!!character) {
    return (`${id} - ${character.name}`);
  } throw new Error('Id não encontrado!');
};

const removeCharacter = async () => {
  simpsons = await fs.readFile('./simpson.json', 'utf-8');
  charactersList = await JSON.parse(simpsons);
  newList = charactersList.filter(({id}) => id !== "10" && id !== "6");
  fs.writeFile('./simpson.json', JSON.stringify(newList));
};

const createSimpsonFamily = async () => {
  simpsons = await fs.readFile('./simpson.json', 'utf-8');
  charactersList = await JSON.parse(simpsons);
  newList = charactersList.filter(({id}) => id <= 4);
  fs.writeFile('./simpsonFamily.json', JSON.stringify(newList));
};

const addNelson = async () => {
  const simpsons = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const charactersList = await JSON.parse(simpsons);
  charactersList.push({ id: charactersList.length + 1, name: 'Nelson Muntz' });
  fs.writeFile('./simpsonFamily.json', JSON.stringify(charactersList));
};

const switchNelsonToMaggie = async () => {
  const simpsons = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const charactersList = await JSON.parse(simpsons);
  const nelson = charactersList.find((character) => character.name === 'Nelson Muntz');
  const newList = charactersList
    .map((character) => character.id === nelson.id
      ? { id: nelson.id, name: "Maggie Simpson" }
      : character)
  fs.writeFile('./simpsonFamily.json', JSON.stringify(newList));
};

createSimpsonFamily();
