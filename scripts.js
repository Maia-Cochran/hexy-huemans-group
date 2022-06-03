//global variables
class Color {
  constructor() {
    //this.id = Date.now();
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
    for (var i = 0; i <= 4; i++){
    colours.push(new Color());
  }
  return colours
}

  checkLock() {
    for(var i = 0; i <= 4; i++) {
      if (!this.colors[i].isLocked) {
        this.colors.splice(i, 1, new Color());
      }
      this.colors[i].hexCode = `${i}`;
    }
  }
}

var currentPalette = new Palette();
var savedPalette = [];
console.log(currentPalette);
//querySelectors
var newPaletteButton = document.querySelector('.new-palette-button');
var hex1 = document.querySelector('.hex-lock-1');
var hex2 = document.querySelector('.hex-lock-2');
var hex3 = document.querySelector('.hex-lock-3');
var hex4 = document.querySelector('.hex-lock-4');
var hex5 = document.querySelector('.hex-lock-5');

var largeSwatch1 = document.querySelector('.large-swatch-1');
var largeSwatch2 = document.querySelector('.large-swatch-2');
var largeSwatch3 = document.querySelector('.large-swatch-3');
var largeSwatch4 = document.querySelector('.large-swatch-4');
var largeSwatch5 = document.querySelector('.large-swatch-5');

//event listener

window.addEventListener('load', generateRandomColors);
newPaletteButton.addEventListener('click', generateRandomColors);

//data model functions
// for( i in largeSwatch ) {
//   largeSwatch[i].style.display = 'none';
// }

//generate 5 different colors

function generateRandomColors() {
  var color1 = currentPalette.colors[0].hexCode;
  var color2 = currentPalette.colors[1].hexCode;
  var color3 = currentPalette.colors[2].hexCode;
  var color4 = currentPalette.colors[3].hexCode;
  var color5 = currentPalette.colors[4].hexCode;
  // currentPalette.checkLock();
  // console.log('#swatch1');
  // for (var i = 1; i < 6; i++) {
  //   var color = getRandomHex();
  hex1.innerText = color1;
  largeSwatch1.style.backgroundColor = color1;
  hex2.innerText = color2;
  largeSwatch2.style.backgroundColor = color2;
  hex3.innerText = color3;
  largeSwatch3.style.backgroundColor = color3;
  hex4.innerText = color4;
  largeSwatch4.style.backgroundColor = color4;
  hex5.innerText = color5;
  largeSwatch5.style.backgroundColor = color5;
}
// }

// function pageLoadRandom(){
//
// }
