let submitButton = document.querySelector('#generate-board');
let pixelTable = document.querySelector('#pixel-board');
let buttonContainer = document.querySelector('#button-container');
let colorPalette = document.querySelector('#color-palette');

function setFirstElement() {
  const colorPalette = document.querySelector('#color-palette');
  const firstItem = colorPalette.firstElementChild;
  firstItem.className = 'color selected';
}

setFirstElement();

function setNewClass(event) {
  const colorPalette = document.querySelector('#color-palette');
  const childColorPalette = colorPalette.children;

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
}

function updateCanvas() {
  let inputField = document.querySelector('#board-size');
  let inputValue = parseInt(inputField.value);
  let tableContainer = document.querySelector('#pixel-board');
  tableContainer.parentNode.removeChild(tableContainer);
  createCanvas(inputValue);
}

buttonContainer.addEventListener('click', clearContent);
pixelTable.addEventListener('click', selectNewColor);
colorPalette.addEventListener('click', setNewClass);

