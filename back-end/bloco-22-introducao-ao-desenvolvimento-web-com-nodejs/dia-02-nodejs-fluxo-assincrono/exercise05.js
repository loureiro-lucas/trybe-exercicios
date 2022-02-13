const fs = require('fs').promises;

const promisesAll = async () => {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  const createFiles = strings.map((string, index) => {
    const fileName = `./file${index + 1}.txt`;
    fs.writeFile(fileName, string);
    return fileName;
  });

  const filesNames = await Promise.all(createFiles);

  const allStrings = await Promise.all(filesNames.map((fileName) => fs.readFile(fileName, 'utf-8')));

  const finalString = allStrings.join(' ');

  fs.writeFile('./fileAll.txt', finalString);
};

promisesAll();
