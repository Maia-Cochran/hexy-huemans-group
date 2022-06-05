class Colour {
  constructor(hex, element) {
    this.hex = hex;
    this.element = element;
    this.locked = false;
  }

  setHex(hex) {
    this.hex = hex;
    this.element.style.backgroundColor = hex;
    this.element.querySelector(".colour-input").value = hex;
  }

  setLocked(locked) {
    this.locked = locked;
    if (locked) {
      this.element.querySelector(".lock-toggle").classList.add("is-locked");
      this.element.querySelector("img").src = "assets/lock.svg";
    } else {
      this.element.querySelector(".lock-toggle").classList.remove("is-locked");
      this.element.querySelector("img").src = "assets/open-lock.svg";
    }
  }

  toggleLocked() {
    this.setLocked(!this.locked);
  }

  generateHex() {
    if (this.locked) {
      return
    }

    const chars = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)];
    }

    this.setHex(color);
  }
}

class Palette {
  constructor(colors) {
    this.id = Date.now();
    this.colors = colors || [];

  }
}

const colour_elements = document.querySelectorAll('.colours .colour');

const colours = [];
const currentPalette = new Palette(colours);
currentPalette.colours = [];

for (let i=0; i < colour_elements.length; i++) {
  const colour_element = colour_elements[i];

  const input = colour_element.querySelector(".colour-input");
  const lock_toggle = colour_element.querySelector(".lock-toggle");


  const hex = input.value;

  const colour = new Colour(hex, colour_element);

  input.addEventListener('input', (e) => colour.setHex(e.target.value));
  lock_toggle.addEventListener('click', () => colour.toggleLocked());


  colour.generateHex();
  currentPalette.colours.push(colour);
  console.log(currentPalette);
}

//const savedPalettes = document.querySelector('.saved-palettes-section');

//function savedPalettesSection() {
  //savedPalettes.innerHTML = '';
  //for (var i = 0; i < currentPalette.colours.length; i++);
//}

document.querySelector(".generator-button").addEventListener("click", () => {
  for (let i=0; i < currentPalette.colours.length; i++) {
    currentPalette.colours[i].generateHex();
  }
});

document.addEventListener('keypress', (e) => {
    if (e.code.toLowerCase() === "space") {
      document.querySelector(".generator-button").click();
  }
})
