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

//-------------------- BACKGROUND AND FONT COLOR

function backgroundColorChanger() {
  let localBackgroundColor = localStorage.getItem('backgroundColor');
  let localFontColor = localStorage.getItem('fontColor');

  if (localBackgroundColor !== undefined) {
    body.style.backgroundColor = localBackgroundColor;
  }
  if (localFontColor !== undefined) {
    article.style.color = localFontColor;
  }

  whiteButton.addEventListener('click', function() {
    body.style.backgroundColor = 'white';
    article.style.color = 'black';
    localStorage.setItem('backgroundColor','white')
    localStorage.setItem('fontColor','black')
  })
  grayButton.addEventListener('click', function() {
    body.style.backgroundColor = 'lightgray';
    article.style.color = 'black';
    localStorage.setItem('backgroundColor','lightgray')
    localStorage.setItem('fontColor','black')
  })
  blackButton.addEventListener('click', function() {
    body.style.backgroundColor = 'black';
    article.style.color = 'lightgray';
    localStorage.setItem('backgroundColor','black')
    localStorage.setItem('fontColor','lightgray')
  })
}

backgroundColorChanger();

//-------------------- FONT SIZE

function textSizeChanger() {
  localTextSize = localStorage.getItem('textSize');

  if (localTextSize !== undefined) {
    body.style.fontSize = localTextSize;
  }
  
  fontReduceButton.addEventListener('click', function() {
    body.style.fontSize = '12px';
    localStorage.setItem('textSize', '12px');
  })
  fontResetButton.addEventListener('click', function() {
    body.style.fontSize = '16px';
    localStorage.setItem('textSize', '16px');
  })
  fontIncreaseButton.addEventListener('click', function() {
    body.style.fontSize = '20px';
    localStorage.setItem('textSize', '20px');
  })
}

textSizeChanger();

//-------------------- FONT STYLE

function fontStyleChanger() {
  localTextStyle = localStorage.getItem('texStyle');

  if (localTextStyle !== undefined) {
    article.style.fontFamily = localTextStyle;
  }

  fontStyleButton.addEventListener('click', function() {
    if (article.style.fontFamily !== 'sans-serif') {
      article.style.fontFamily = 'sans-serif';
      localStorage.setItem('textStyle', 'sans-serif');
    } else {
      article.style.fontFamily = 'serif';
      localStorage.setItem('textStyle', 'serif');
    }
  })
}

fontStyleChanger();

//-------------------- LINE SPACING 

function lineSpacingChanger() {
  localLineSpacing = localStorage.getItem('lineSpacing');

  if (localLineSpacing !== undefined) {
    article.style.lineHeight = localLineSpacing;
  }
  
  lineReduceButton.addEventListener('click', function() {
    article.style.lineHeight = '100%';
    localStorage.setItem('lineSpacing', '100%');
  })
  lineResetButton.addEventListener('click', function() {
    article.style.lineHeight = '135%';
    localStorage.setItem('lineSpacing', '135%');
  })
  lineIncreaseButton.addEventListener('click', function() {
    article.style.lineHeight = '175%';
    localStorage.setItem('lineSpacing', '175%');
  })
}

lineSpacingChanger();
