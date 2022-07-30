export default class Age {
  constructor (userYears) {
    this.earthYears = userYears;
    this.mercuryYears = this.mercury();
    this.venusYears = this.venus();
    this.marsYears = this.mars();
    this.jupiterYears = this.jupiter();
  }

  mercury() {
    return (Math.round(this.earthYears / 0.24));
  }

  venus() {
    return (Math.round(this.earthYears / 0.62));
  }

  mars() {
    return (Math.round(this.earthYears / 1.88));
  }

  jupiter() {
    return (Math.round(this.earthYears / 11.86));
  }
}