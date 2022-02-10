const readlineSync = require('readline-sync');

const distance = readlineSync.questionInt("What's the distance (m): ");
const time = readlineSync.questionInt("How many time spent in it (min): ");

const averageSpeed = (distance, time) => console.log(distance / (time * 60));

averageSpeed(distance, time);
