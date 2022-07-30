export default class Age {
  constructor (userYears) {
    this.earthYears = userYears;
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