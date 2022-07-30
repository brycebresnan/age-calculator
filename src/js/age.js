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
}