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

  test('should take the Earth Years and return the equivalent in mercury years.', () => {
    const years = 20;
    const newAge = new Age(years);
    expect(newAge.mercury()).toEqual(83);
  });

  test('should take the Earth Years and return the equivalent in Venus years.', () => {
    const years = 20;
    const newAge = new Age(years);
    expect(newAge.venus()).toEqual(32);
  });
});