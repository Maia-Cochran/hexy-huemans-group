//global variables
class Color {
  constructor() {
    this.id = Date.now();
    this.hexCode = this.getRandomHex();
    this.isLocked = false;
  }

  getRandomHex() {
    var letters = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    var color = '#';
    for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * letters.length)];
        }
    return color;
  }
}


class Palette {
  constructor() {
    this.colors = this.createColors();
    this.id = Date.now();
  }

  createColors(){
    var colours = [];
    for (var i = 0; i <= 5; i++){
    colours.push(new Color());
  }
  return colours
}

  checkLock() {
    for(var i = 0; i <= 5; i++) {
      if (!this.colors[i].isLocked) {
        this.colors.splice(i, 1, new Color());
      }
      this.colors[i].id = `${i}`;
    }
  }
}

var currentPalette = new Palette();
var savedPalette = [];
console.log(currentPalette);
//querySelectors
var newPaletteButton = document.querySelector('.new-palette-button');
var largeSwatchAll = document.querySelectorAll('.large-swatch');
var swatch1 = document.getElementById('swatch1');
var hex1 = document.querySelector('.hex-lock1');
//event listener

window.addEventListener('load', generateRandomColors);
newPaletteButton.addEventListener('click', generateRandomColors);

//data model functions
// for( i in largeSwatch ) {
//   largeSwatch[i].style.display = 'none';
// }

//generate 5 different colors

function generateRandomColors() {
  // currentPalette.checkLock();
  // console.log('#swatch1');
  // for (var i = 1; i < 6; i++) {
  //   var color = getRandomHex();
  hex1.innerText = currentPalette.colors[0].hexcode;
  swatch1.style.backgroundColor = currentPalette.colors[0].hexcode;

  }
// }

// function pageLoadRandom(){
//
// }
