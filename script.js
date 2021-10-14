const paletteList = document.querySelector('[data-js="color-palette"]');
const pixelsBoard = document.querySelector('[data-js="pixel-board"]');
const clearButton = document.querySelector('[data-js="clear-board"]');

const colorPalette = 'palette__list';
const selectedColorValue = 'color selected';

const setColorClass = (paletteColors) => {
  for (let index = 0; index < paletteColors.length; index += 1) {
    const currentColor = paletteColors[index];
    currentColor.className = 'color';
  }
};

paletteList.addEventListener('click', (event) => {
  const clickedTarget = event.target;

  if (clickedTarget.parentNode.className.includes(colorPalette)) {
    const paletteColors = Array.from(paletteList.children);

    setColorClass(paletteColors);
    clickedTarget.className = selectedColorValue;
  }
});

pixelsBoard.addEventListener('click', (event) => {
  const clickedElement = event.target;
  const selectedColor = document.querySelector('.selected');
  const selectedBackgroundColor = selectedColor.style.backgroundColor;

  clickedElement.style.backgroundColor = selectedBackgroundColor;
});

clearButton.addEventListener('click', () => {
  const allPixels = document.querySelectorAll('.pixel');
  allPixels.forEach((pixel) => pixel.removeAttribute('style'));
});
