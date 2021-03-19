class Unicorn {
  constructor(name, color) {
    this.name = name;
    if (color === undefined) {
      // undefined because in this particular test, there was only a name and not a color; therefore, the color = undefined! 
      this.color = 'white';
    } else {
      this.color = color;
    }
  }
}

module.exports = Unicorn;
