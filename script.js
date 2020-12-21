function randomColor() {
  return 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
}

const boxes = document.querySelector('#boxes');
const colorBoxes = document.getElementsByClassName('color');
const colorPicker = document.getElementById('color-picker');

boxes.addEventListener('click', function(event) {
  if (event.target.className === 'color') {
    if (event.target.hasAttribute('data-colored')) {
      boxColored();
    } else {
      let color = colorSelector();
      event.target.style.backgroundColor = color;
      event.target.innerText = color;
      event.target.setAttribute('data-colored', color);
    }
  }
  boxesWereColored();
});

function colorSelector() {
  let color = '';
  if (colorPicker.value === '') {
    color = randomColor();
  } else {
    color = colorPicker.value;
  }
  colorPicker.value = '';
  return color;
}

function boxColored() {
  alert("The box has already been colored, please select another box.");
}

function boxesWereColored() {
  let boxesColored = true;
  for (let i = 0; i < colorBoxes.length; i++) {
    if (!colorBoxes[i].hasAttribute('data-colored')) boxesColored = false;
  }
  if (boxesColored) alert("The page has been completely colored");
}