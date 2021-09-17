const sumRandomNumbers = () => {
  const newArray = [];
  for (let index = 1; index <= 10; index +=1) {
    newArray.push((Math.floor((Math.random() * 50) + 1)) ** 2);
  };
  const sum = newArray.reduce((total, current) => total + current, 0);
  if (sum > 8000){
    throw new Error();
  }
  return sum;
};

const sumArrayFromSum = (sum) => {
  return [2, 3, 5, 10]
    .map((number) => sum / number)
    .reduce((total, current) => total + current, 0);
}

const fetchPromise = async () => {
  try {
    const sum = await sumRandomNumbers();
    const sumFromSum = await sumArrayFromSum();
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

fetchPromise();
