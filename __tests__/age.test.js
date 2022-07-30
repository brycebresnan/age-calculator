import Age from './../src/js/age.js'

describe('Age', () => {

  test('should create an Age type object', () => {
    const newAge = new Age();
    expect(typeof(newAge)).toEqual('object');
  });

  test('should take in years as a parameter and set it as the value in earthYears property',() => {
    const years = 20;
    const newAge = new Age(years);
    expect(newAge.earthYears).toEqual(20);
  });

});