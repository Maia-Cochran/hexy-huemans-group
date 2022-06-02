
class Color {
  constructor() {
    this.id = Date.now();
    this.hexCode = this.getRandomHex();
    this.isLocked = false;
  }



function getRandomHex() {
    var letters = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    var color = '#';
    for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * letters.length)];
        }
    return color;
  }



