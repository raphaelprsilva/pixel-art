function setFirstElement() {
  const paletteList = document.querySelector('#color-palette');
  const firstItem = paletteList.firstElementChild;
  firstItem.className = 'color selected';
}

setFirstElement();

function selectColor() {
  const colorPalette = document.querySelector('#color-palette');
  const childColorPalette = colorPalette.children;

  colorPalette.addEventListener('click', function (event) {
    for (let index = 0; index < childColorPalette.length; index += 1) {
      childColorPalette[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

selectColor();
