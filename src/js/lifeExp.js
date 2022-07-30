export default class LifeExp {
  constructor (obj) {    
    this.age = obj.earthYears;
  }

  calcLifeExpect() {
    const currentAge = this.age;
    const lifeExpect = 78.6
    let result = 0;
    if (currentAge <= lifeExpect) {
      result = (lifeExpect - currentAge);
    } else {
      result = (currentAge - lifeExpect);
    }
    return parseFloat(result.toFixed(1));    
  }
  
}