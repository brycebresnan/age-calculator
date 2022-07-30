import Age from './age.js';

export default class LifeExp extends Age {
  constructor (userYears) {    
    super(userYears);
    this.age = userYears;
    this.expect = 78.6
  }

  calcLifeExpect() {
    const currentAge = this.age;
    const lifeExpect = this.expect;
    let result = 0;
    if (currentAge <= lifeExpect) {
      result = (lifeExpect - currentAge);
    } else {
      result = (currentAge - lifeExpect);
    }
    return parseFloat(result.toFixed(1));    
  }

  calcMercExpect() {
    let result = super.mercury(this.calcLifeExpect());
    return parseFloat(result.toFixed(1));
  }

  calcVenusExpect() {
    let result = super.venus(this.calcLifeExpect());
    return parseFloat(result.toFixed(1));
  }

  calcMarsExpect() {
    let result = super.mars(this.calcLifeExpect());
    return parseFloat(result.toFixed(1));
  }

  calcJupExpect() {
    let result = super.jupiter(this.calcLifeExpect());
    return parseFloat(result.toFixed(1));
  }

}