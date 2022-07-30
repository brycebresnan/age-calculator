import LifeExp from './../src/js/lifeExp.js';
import Age from './../src/js/age.js'

describe('LifeExp', () => {

  test('should create an object type for LifeExp', () => {
    const lifeEx = new LifeExp();
    expect(typeof(lifeEx)).toEqual('object');
  });

  test('should take in an age object as an argument and set the this.age property value from age.earthYears', () => {
    const years = 20;
    const age = new Age(years);
    const lifeEx = new LifeExp(age);
    expect(lifeEx.age).toEqual(20);
  });

});