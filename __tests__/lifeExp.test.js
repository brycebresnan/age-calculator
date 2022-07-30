import LifeExp from './../src/js/lifeExp.js';
import Age from './../src/js/age.js'

describe('LifeExp', () => {

  test('should create an object type for LifeExp', () => {
    const years = 20;
    const newAge = new Age(years);
    const lifeEx = new LifeExp(years);
    expect(typeof(lifeEx)).toEqual('object');
  });

  test('should initiliaze LifeExp object with a expect property that has a number value.', () => {
    const years = 20;
    const newAge = new Age(years);
    const lifeEx = new LifeExp(years);
    expect(typeof(lifeEx.expect)).toEqual('number');
  });

  test('should take in an age object as an argument and set the this.age property value from age.earthYears', () => {
    const years = 20;
    const newAge = new Age(years);
    const lifeEx = new LifeExp(years);
    expect(lifeEx.age).toEqual(20);
  });

  test('should take the age property and return number of remaining years if the age is less than the life expectency', () => {
    const years = 20;
    const newAge = new Age(years);
    const lifeEx = new LifeExp(years);
    expect(lifeEx.calcLifeExpect()).toEqual(58.6);
  });

  test('should take the age property and return number of years past expectation if the age is greater than the life expectency', () => {
    const years = 80;
    const newAge = new Age(years);
    const lifeEx = new LifeExp(years);
    expect(lifeEx.calcLifeExpect()).toEqual(1.4);
  });

  test('should take the age property and return life expectation in mercury years', () => {
    const years = 20;
    const newAge = new Age(years);
    const lifeEx = new LifeExp(years);
    expect(lifeEx.calcMercExpect()).toEqual(244);
  });

  test('should take the age property and return life expectation in venus years', () => {
    const years = 20;
    const newAge = new Age(years);
    const lifeEx = new LifeExp(years);
    expect(lifeEx.calcVenusExpect()).toEqual(95);
  });
  
  test('should take the age property and return life expectation in mars years', () => {
    const years = 20;
    const newAge = new Age(years);
    const lifeEx = new LifeExp(years);
    expect(lifeEx.calcMarsExpect()).toEqual(31);
  });

  test('should take the age property and return life expectation in jupiter years', () => {
    const years = 20;
    const newAge = new Age(years);
    const lifeEx = new LifeExp(years);
    expect(lifeEx.calcJupExpect()).toEqual(5);
  });

});