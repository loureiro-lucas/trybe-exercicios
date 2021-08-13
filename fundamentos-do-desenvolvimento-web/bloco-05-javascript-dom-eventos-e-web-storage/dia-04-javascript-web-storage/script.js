let body = document.getElementsByTagName('body')[0];
let article = document.getElementsByTagName('article')[0];
let whiteButton = document.getElementById('white');
let grayButton = document.getElementById('gray');
let blackButton = document.getElementById('black');
let fontReduceButton = document.getElementById('font-reduce');
let fontResetButton = document.getElementById('font-reset');
let fontIncreaseButton = document.getElementById('font-increase');
let fontStyleButton = document.getElementById('font-style-button');
let lineReduceButton = document.getElementById('spacing-reduce');
let lineResetButton = document.getElementById('spacing-reset');
let lineIncreaseButton = document.getElementById('spacing-increase');

function backgroundColorChanger() {
  whiteButton.addEventListener('click', function() {
    body.style.backgroundColor = 'white';
    article.style.color = 'black';
  })
  grayButton.addEventListener('click', function() {
    body.style.backgroundColor = 'lightgray';
    article.style.color = 'black';
  })
  blackButton.addEventListener('click', function() {
    body.style.backgroundColor = 'black';
    article.style.color = 'lightgray';
  })
}

backgroundColorChanger();

function textSizeChanger() {
  fontReduceButton.addEventListener('click', function() {
    body.style.fontSize = '12px';
  })
  fontResetButton.addEventListener('click', function() {
    body.style.fontSize = '16px';
  })
  fontIncreaseButton.addEventListener('click', function() {
    body.style.fontSize = '20px';
  })
}

textSizeChanger();

function fontStyleChanger() {
  fontStyleButton.addEventListener('click', function() {
    if (article.style.fontFamily !== 'sans-serif') {
      article.style.fontFamily = 'sans-serif';
    } else {
      article.style.fontFamily = 'serif';
    }
  })
}

fontStyleChanger();

function lineSpacingChanger() {
  lineReduceButton.addEventListener('click', function() {
    article.style.lineHeight = '100%';
  })
  lineResetButton.addEventListener('click', function() {
    article.style.lineHeight = '135%';
  })
  lineIncreaseButton.addEventListener('click', function() {
    article.style.lineHeight = '175%';
  })
}

lineSpacingChanger();
