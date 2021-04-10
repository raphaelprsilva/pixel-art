function setFirstElement() {
  const paletteList = document.querySelector('#color-palette');
  const firstItem = paletteList.firstElementChild;
  firstItem.className = 'color selected';
}

setFirstElement();

function setNewClass() {
  const colorPalette = document.querySelector('#color-palette');
  const childColorPalette = colorPalette.children;

  colorPalette.addEventListener('click', (event) => {
    for (let index = 0; index < childColorPalette.length; index += 1) {
      childColorPalette[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

setNewClass();

function selectNewColor() {
  const pixelTable = document.querySelector('#pixel-board');

  pixelTable.addEventListener('click', (event) => {
    const selectedItem = document.querySelector('.selected');
    const backgroundColor = getComputedStyle(selectedItem).getPropertyValue('background-color');
    event.target.style.backgroundColor = backgroundColor;
  });
}

selectNewColor();

function clearContent() {
  const buttonContainer = document.querySelector('#button-container');
  const buttonClearContent = document.createElement('button');
  buttonClearContent.type = 'button';
  buttonClearContent.innerText = 'Limpar';
  buttonClearContent.id = 'clear-board';
  buttonContainer.appendChild(buttonClearContent);

  buttonContainer.addEventListener('click', () => {
    const canvas = document.querySelectorAll('.pixel');
    for (let index = 0; index < canvas.length; index += 1) {
      canvas[index].style.backgroundColor = 'white';
    }
  });
}

clearContent();
