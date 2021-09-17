const promise = new Promise((resolve,reject) => {
  const newArray = [];
  for (let index = 1; index <= 10; index +=1) {
    newArray.push((Math.floor((Math.random() * 50) + 1)) ** 2);
  };
  const sum = newArray.reduce((total, current) => total + current, 0);
  sum > 8000 ? resolve(sum) : reject();
})
.then((sum) => [2, 3, 5, 10].map((number) => sum / number))
.catch(() => console.log('Promise rejeitada'));
