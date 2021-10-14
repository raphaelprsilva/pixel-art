const paletteList = document.querySelector('[data-js="color-palette"]');
const pixelsBoard = document.querySelector('[data-js="pixel-board"]');
const clearButton = document.querySelector('[data-js="clear-board"]');
const pixelsForm = document.querySelector('[data-js="pixels-form"]');

const colorPalette = 'palette__list';
const selectedColorValue = 'color selected';

const setColorClass = (paletteColors) => {
  for (let index = 0; index < paletteColors.length; index += 1) {
    const currentColor = paletteColors[index];
    currentColor.className = 'color';
  }
};

const setSelectedClassName = (event) => {
  const clickedTarget = event.target;

  if (clickedTarget.parentNode.className.includes(colorPalette)) {
    const paletteColors = Array.from(paletteList.children);

    setColorClass(paletteColors);
    clickedTarget.className = selectedColorValue;
  }
};

const setNewPixelsBackground = (event) => {
  const clickedElement = event.target;
  const selectedColor = document.querySelector('.selected');
  const selectedBackgroundColor = selectedColor.style.backgroundColor;

  clickedElement.style.backgroundColor = selectedBackgroundColor;
};

const clearBoard = () => {
  const allPixels = document.querySelectorAll('.pixel');
  allPixels.forEach((pixel) => pixel.removeAttribute('style'));
};

const clearPixelsBoard = () => {
  pixelsBoard.innerHTML = '';
};

const createNewPixelsBoard = (inputValue) => {
  for (let index = 0; index < inputValue; index += 1) {
    const line = document.createElement('ul');
    line.className = 'pixel__line';
    pixelsBoard.appendChild(line);

    for (let index2 = 0; index2 < inputValue; index2 += 1) {
      const pixel = document.createElement('li');
      pixel.className = 'pixel';
      line.appendChild(pixel);
    }
  }
};

const setNewPixelsBoard = (event) => {
  event.preventDefault();
  const inputValue = document.querySelector('[data-js="pixels-input"]').value;
  const isInputValueLowerThan5 = inputValue < 5;
  const newInputValue = inputValue > 50 ? 50 : inputValue;

  if (isInputValueLowerThan5) return alert('Board inválido!');

  clearPixelsBoard();
  createNewPixelsBoard(newInputValue);
};

paletteList.addEventListener('click', setSelectedClassName);
pixelsBoard.addEventListener('click', setNewPixelsBackground);
clearButton.addEventListener('click', clearBoard);
pixelsForm.addEventListener('submit', setNewPixelsBoard);
