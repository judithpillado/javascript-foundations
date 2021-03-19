class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.eatTally = 0
  }

  greet() {
    return `Hi, ${this.rider}!`
  }

  eat() {
    this.eatTally += 1;
    if (this.eatTally > 2) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;
