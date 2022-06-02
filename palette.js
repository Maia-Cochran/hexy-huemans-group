class Palette {
  constructor() {
    this.colors = [new Color(), new Color(), new Color(), new Color(), new Color()];
    this.id = Date.now();
  }

  checkLock() {
    for(var i = 0; i <= 5; i++) {
      if (!this.colors[i].locked) {
        this.colors.splice(i, 1, new Color());
      }
      this.colors[i].id = `${i}`;
    }
  }
}
