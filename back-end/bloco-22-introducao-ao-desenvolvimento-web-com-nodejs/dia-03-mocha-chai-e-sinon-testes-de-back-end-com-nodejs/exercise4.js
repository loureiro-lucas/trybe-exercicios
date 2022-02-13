const fs = require('fs');

const fileWriter = (fileName, fileContent) => {
  fs.writeFileSync(`${__dirname}/${fileName}`, fileContent);
  return fileContent;
};

module.exports = fileWriter;