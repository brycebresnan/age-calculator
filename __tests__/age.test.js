import Age from './../src/js/age.js'

describe('Age', () => {

  test('should create an Age type object', () => {
    const newAge = new Age();
    expect(typeof(newAge)).toEqual('object');
  });
});