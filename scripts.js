var newPaletteButton = document.querySelector('.new-palette-button');
var largeSwatch = document.querySelectorAll('.large-swatch');

window.addEventListener('load', generateRandomColors);

newPaletteButton.addEventListener('click', generateRandomColors);


for( i in largeSwatch ) {
  largeSwatch[i].style.display = 'none';
}


function generateRandomColors() {
  console.log('#swatch1');
  for (let i = 1; i < 6; i++) {
    let color = getRandomHex();
  }
}
