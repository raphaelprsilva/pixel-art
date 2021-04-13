const submitButton = document.querySelector('#generate-board');
const pixelTable = document.querySelector('#pixel-board');
const buttonContainer = document.querySelector('#button-container');
const colorPalette = document.querySelector('#color-palette');

colorPalette.children[0].className = ' color selected';

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

function updateCanvas() {
  clearPalette();
  let inputField = document.querySelector('#board-size');
  let inputValue = parseInt(inputField.value);
  
  for (let index = 0; index < inputValue; index += 1) {
    const row = document.createElement('tr');
    pixelTable.appendChild(row);
    for (let index2 = 0; index2 < inputValue; index2 += 1) {
      const cell = document.createElement('td');
      cell.className = 'pixel';
      row.appendChild(cell);
    }
  }
  colorPalette.children[0].className = 'color selected';
  selectNewColor();
}

submitButton.addEventListener('click', updateCanvas);
buttonContainer.addEventListener('click', clearContent);
pixelTable.addEventListener('click', selectNewColor);
colorPalette.addEventListener('click', setNewClass);
