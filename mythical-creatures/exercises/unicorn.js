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

  isWhite() {
    // for any method, we still have access to 'this' keyword
    console.log(this.color);
    if (this.color !== 'white') {
      return false;
    }
  }

  says(message) {
    return `**;* ${message} *;**`;
  }
}

module.exports = Unicorn;
