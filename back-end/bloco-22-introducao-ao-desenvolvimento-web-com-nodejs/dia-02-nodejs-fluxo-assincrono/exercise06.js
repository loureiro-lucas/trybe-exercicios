const readlineSync = require('readline-sync');
const fs = require('fs').promises;

const fileReader = async () => {
  const fileName = readlineSync.question('What file do you want to read?');

  try {
    const fileContant = await fs.readFile(fileName, 'utf-8');
    console.log(fileContant);
  } catch {
    console.log('Arquivo inexistente');
  };
};

fileReader();
