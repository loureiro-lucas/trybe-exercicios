const promise = new Promise((resolve,reject) => {
  const newArray = [];
  for (let index = 1; index <= 10; index +=1) {
    newArray.push((Math.floor((Math.random() * 50) + 1)) ** 2);
  };
  newArray.reduce((sum, current) => sum + current, 0) > 8000 ? resolve() : reject();
})
.then(() => console.log('Promise resolvida'))
.catch(() => console.log('Promise rejeitada'));
