const submitButton = document.querySelector('#generate-board');
const pixelTable = document.querySelector('#pixel-board');
const buttonContainer = document.querySelector('#button-container');
const colorPalette = document.querySelector('#color-palette');

colorPalette.children[0].className = ' color selected';

function generateRandonColor() {
  const color = [];
  for (let index = 0; index < 3; index += 1) {
    const r = Math.floor(Math.random() * 255);
    color[index] = r;
  }
  return `rgb(${color[0]} , ${color[1]} , ${color[2]})`;
}

function setRandonColor() {
  const firstColor = colorPalette.children[0];
  firstColor.style.backgroundColor = 'black';

  for (let index = 1; index < colorPalette.children.length; index += 1) {
    colorPalette.children[index].style.backgroundColor = generateRandonColor();
  }
}

setRandonColor();

function setNewClass(event) {
  const canvas = document.querySelector('#color-palette');
  const childColorPalette = canvas.children;

  for (let index = 0; index < childColorPalette.length; index += 1) {
    childColorPalette[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function selectNewColor(event) {
  const selectedItem = document.querySelector('.selected');
  const backgroundColor = getComputedStyle(selectedItem).getPropertyValue('background-color');
  event.target.style.backgroundColor = backgroundColor;
}

function clearContent() {
  const canvas = document.querySelectorAll('.pixel');
  for (let index = 0; index < canvas.length; index += 1) {
    canvas[index].style.backgroundColor = 'white';
  }
  colorPalette.children[0].className = ' color selected';
}

function clearPalette() {
  pixelTable.innerHTML = '';
}

function updateCanvas(input) {
  clearPalette();
  for (let index = 0; index < input; index += 1) {
    const row = document.createElement('tr');
    pixelTable.appendChild(row);
    for (let index2 = 0; index2 < input; index2 += 1) {
      const cell = document.createElement('td');
      cell.className = 'pixel';
      row.appendChild(cell);
    }
  }
  colorPalette.children[0].className = 'color selected';
}

function checkBoardSize() {
  const inputField = document.querySelector('#board-size');

  if (inputField.value === '') {
    alert('Board inválido!');
  }
  else if (inputField.value < 5) {
    inputField.value = 5;
    alert('O tamanho mínimo permitido é 5');
    updateCanvas(inputField.value);
  } else if (inputField.value > 50) {
    inputField.value = 50;
    alert('O tamanho máximo permitido é 50');
    updateCanvas(inputField.value);
  } else {
    updateCanvas(inputField.value);
  }
}

submitButton.addEventListener('click', checkBoardSize);
buttonContainer.addEventListener('click', clearContent);
pixelTable.addEventListener('click', selectNewColor);
colorPalette.addEventListener('click', setNewClass);
