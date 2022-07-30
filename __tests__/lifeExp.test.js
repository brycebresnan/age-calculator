import LifeExp from './../src/js/lifeExp.js';
import Age from './../src/js/age.js'

describe('LifeExp', () => {

  test('should create an object type for LifeExp', () => {
    const years = 20;
    const newAge = new Age(years);
    const lifeEx = new LifeExp(newAge);
    expect(typeof(lifeEx)).toEqual('object');
  });

  test('should take in an age object as an argument and set the this.age property value from age.earthYears', () => {
    const years = 20;
    const newAge = new Age(years);
    const lifeEx = new LifeExp(newAge);
    expect(lifeEx.age).toEqual(20);
  });

  test('should take the age property and return number of remaining years if the age is less than the life expectency', () => {
    const years = 20;
    const newAge = new Age(years);
    const lifeEx = new LifeExp(newAge);
    expect(lifeEx.calcLifeExpect()).toEqual(58.6);
  });

  test('should take the age property and return number of years past expectation if the age is greater than the life expectency', () => {
    const years = 80;
    const newAge = new Age(years);
    const lifeEx = new LifeExp(newAge);
    expect(lifeEx.calcLifeExpect()).toEqual(1.4);
  });

});