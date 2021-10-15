const paletteList = document.querySelector('[data-js="color-palette"]');
const pixelsBoard = document.querySelector('[data-js="pixel-board"]');
const clearButton = document.querySelector('[data-js="clear-board"]');
const pixelsForm = document.querySelector('[data-js="pixels-form"]');

const colorPalette = 'palette__list';
const selectedColorValue = 'color selected';

const generateRandomColors = () => {
  let colors = [];

  for (let index = 0; index < 3; index += 1) {
    const randomNumber = Math.floor(Math.random() * 256);
    colors = [...colors, randomNumber];
  }
  const [firstColor, secondColor, thirdColor] = colors;
  return `rgb(${firstColor}, ${secondColor}, ${thirdColor})`;
};

const generateNewPaletteColors = () => {
  const paletteColorsQuantity = 4;

  paletteList.innerHTML = '';

  for (let index = 0; index < paletteColorsQuantity; index += 1) {
    const colorBox = document.createElement('li');

    if (!index) {
      colorBox.className = 'color selected';
      colorBox.style.backgroundColor = 'black';
      paletteList.appendChild(colorBox);
    } else {
      colorBox.className = 'color';
      colorBox.style.backgroundColor = generateRandomColors();
      paletteList.appendChild(colorBox);
    }
  }
};

generateNewPaletteColors();

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

const createPixelElement = (inputValue, pixel, line) => {
  const thePixel = pixel;
  const isInputValueGreaterThan10 = inputValue > 10;

  // verificnado o input para setar a propriedade height do estilo
  // senão, os pixels ficariam distorcidos
  if (isInputValueGreaterThan10) {
    thePixel.className = 'pixel';
    thePixel.style.height = '1.5rem';
    line.appendChild(thePixel);
  } else {
    thePixel.className = 'pixel';
    line.appendChild(thePixel);
  }
};

const createNewPixelsBoard = (inputValue) => {
  for (let index = 0; index < inputValue; index += 1) {
    const line = document.createElement('ul');
    line.className = 'pixel__line';
    pixelsBoard.appendChild(line);

    for (let index2 = 0; index2 < inputValue; index2 += 1) {
      const pixel = document.createElement('li');

      createPixelElement(inputValue, pixel, line);
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
  pixelsForm.reset();
};

paletteList.addEventListener('click', setSelectedClassName);
pixelsBoard.addEventListener('click', setNewPixelsBackground);
clearButton.addEventListener('click', clearBoard);
pixelsForm.addEventListener('submit', setNewPixelsBoard);
