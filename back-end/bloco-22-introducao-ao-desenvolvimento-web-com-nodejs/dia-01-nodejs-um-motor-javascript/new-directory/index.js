const readlineSync = require('readline-sync');

const askForScript = () => {
  
  console.log(`1 para imc \n2 para sorteio \n3 para velocidade`)
  const witchScript = readlineSync.questionInt('Qual script você quer?');
  switch (witchScript) {
    case 1:
      require('./imc');
      break;
    case 2:
      require('./sorteio');
      break;
    case 3:
      require('./velocidade');
      break;
    default:
      console.log('Opção inválida!')
      break;
  };
};

askForScript();
