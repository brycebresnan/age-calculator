export default class LifeExp {
  constructor (obj) {    
    this.age = obj.earthYears;
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


}