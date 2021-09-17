// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const newElement = (data) => {
  const body = document.getElementsByTagName('body')[0];
  const p = document.createElement('p');
  p.innerText = data.joke;
  body.appendChild(p);
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then((data) => newElement(data));
};

window.onload = () => fetchJoke();