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

  test('should take in years as an argument and return the equivalent in mercury years.', () => {
    const years = 20;
    const newAge = new Age(years);
    expect(newAge.mercury(years)).toEqual(83);
  });

  test('should take in years as an argument and return the equivalent in Venus years.', () => {
    const years = 20;
    const newAge = new Age(years);
    expect(newAge.venus(years)).toEqual(32);
  });

  test('should take in years as an argument and return the equivalent in Mars years.', () => {
    const years = 20;
    const newAge = new Age(years);
    expect(newAge.mars(years)).toEqual(11);
  });

  test('should take in years as an argument and return the equivalent in Jupiter years.', () => {
    const years = 20;
    const newAge = new Age(years);
    expect(newAge.jupiter(years)).toEqual(2);
  });

  test('should take the age of the person ', () => {
    const years = 20;
    const newAge = new Age(years);
    expect(newAge.jupiter(years)).toEqual(2);
  });

  test('should use the mercury function to set the mercuryYears property when the Age object is constructed. ', () => {
    const years = 20;
    const newAge = new Age(years);
    expect(newAge.mercuryYears).toEqual(83);
  });

  test('should use the venus function to set the venusYears property when the Age object is constructed. ', () => {
    const years = 20;
    const newAge = new Age(years);
    expect(newAge.venusYears).toEqual(32);
  });

  test('should use the mars function to set the marsYears property when the Age object is constructed. ', () => {
    const years = 20;
    const newAge = new Age(years);
    expect(newAge.marsYears).toEqual(11);
  });

  test('should use the jupiter function to set the jupiterYears property when the Age object is constructed. ', () => {
    const years = 20;
    const newAge = new Age(years);
    expect(newAge.jupiterYears).toEqual(2);
  });

});