const readlineSync = require('readline-sync');
const fs = require('fs').promises;

const fileWordReplacer = async () => {
  const fileName = readlineSync.question('What file do you want to read?');

  try {
    const fileContant = await fs.readFile(fileName, 'utf-8');
    const currentWord = readlineSync.question('What word do you want to replace?');
    const newWord = readlineSync.question('What new word do you want to write?');
    const newContent = fileContant.replace(currentWord, newWord);
    console.log(newContent);
    const newFileName = readlineSync.question('How do you want to call the new file?');
    fs.writeFile(newFileName, newContent);
  } catch {
    console.log('Arquivo inexistente');
  };
};

fileWordReplacer();
