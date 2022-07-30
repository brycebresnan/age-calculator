export default class Age {
  constructor (userYears) {
    this.earthYears = userYears;
  }

  mercury() {
    return (this.earthYears * 0.24);
  }
}