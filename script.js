function setFirstElement() {
  let paletteList = document.querySelector('#color-palette');
  let firstItem = paletteList.firstElementChild;
  firstItem.className = 'color selected';
}

setFirstElement();
