//Class Section
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
//Query Selectors & Even Listeners
const colour_elements = document.querySelectorAll('.colours .colour');
const savedPalettes = document.querySelector('.saved-palettes-section');
const savedPaletteButton = document.querySelector(".save-palette-button");

const savedPalette = [];
const colours = [];
const currentPalette = new Palette(colours);

savedPaletteButton.addEventListener('click', savePalette);
savedPalettes.addEventListener('click', deleteSaved);


//Data Model & DOM Functions
document.querySelector(".generator-button").addEventListener("click", () => {
  for (let i=0; i < currentPalette.colors.length; i++) {
    currentPalette.colors[i].generateHex();
    console.log(currentPalette);
  }
});

  for (let i=0; i < colour_elements.length; i++) {
    const colour_element = colour_elements[i];

    const input = colour_element.querySelector(".colour-input");
    const lock_toggle = colour_element.querySelector(".lock-toggle");

    const hex = input.value;

    const colour = new Colour(hex, colour_element);

    input.addEventListener('input', (e) => colour.setHex(e.target.value));
    lock_toggle.addEventListener('click', () => colour.toggleLocked());


    colour.generateHex();
    currentPalette.colors.push(colour);
}

function savePalette() {
  savedPalette.push(currentPalette);
  savedPalettesSection();
}

function savedPalettesSection() {
    savedPalettes.innerHTML +=
    `<section class="saved-palette">
      <section class="swatch-small" style='background-color:${currentPalette.colors[0].hex}'></section>
      <section class="swatch-small" style='background-color:${currentPalette.colors[1].hex}'></section>
      <section class="swatch-small" style='background-color:${currentPalette.colors[2].hex}'></section>
      <section class="swatch-small" style='background-color:${currentPalette.colors[3].hex}'></section>
      <section class="swatch-small" style='background-color:${currentPalette.colors[4].hex}'></section>
      <img class="trashBin" src="assets/trashimg.svg" alt="delete icon">
    </section>`;
}

function deleteSaved(event){
  if (event.target.classList.contains("trashBin")) {
    event.target.closest("section").remove();
  }
  for(let i = 0; i < savedPalette.length; i++){
    if(savedPalette[i].id == event.target.parentElement.id){
    savedPalette.splice(i, 1);
    return savedPalette;
    }
  }
}
