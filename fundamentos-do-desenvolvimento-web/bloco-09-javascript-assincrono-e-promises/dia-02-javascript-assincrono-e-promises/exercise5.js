const fetchPromise = () => {
  const promise1 = new Promise((resolve,reject) => {
  const newArray = [];
  for (let index = 1; index <= 10; index +=1) {
    newArray.push((Math.floor((Math.random() * 50) + 1)) ** 2);
  };
  const sum = newArray.reduce((total, current) => total + current, 0);
  sum > 8000 ? resolve(sum) : reject();
  })

  promise1
  .then((sum) => [2, 3, 5, 10].map((number) => sum / number))
  .then((array) => array.reduce((total, current) => total + current, 0))
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
}

fetchPromise();
