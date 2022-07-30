export default class Age {
  constructor (userYears) {
    this.earthYears = userYears;
    this.mercuryYears = this.mercury(userYears);
    this.venusYears = this.venus(userYears);
    this.marsYears = this.mars(userYears);
    this.jupiterYears = this.jupiter(userYears);
  }

  mercury(years) {
    return (Math.round(years / 0.24));
  }

  venus(years) {
    return (Math.round(years / 0.62));
  }

  mars(years) {
    return (Math.round(years / 1.88));
  }

  jupiter(years) {
    return (Math.round(years / 11.86));
  }
}