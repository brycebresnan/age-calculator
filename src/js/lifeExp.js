export default class LifeExp {
  constructor (obj) {    
    this.age = obj.earthYears;
  }

  calcLifeExpect() {
    let result = (78.6 - this.age);
    return parseFloat(result.toFixed(1));
  }
}