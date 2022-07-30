import LifeExp from './../src/js/lifeExp.js';

describe('LifeExp', () => {

  test('should create an object type for LifeExp', () => {
    const lifeEx = new LifeExp();
    expect(typeof(lifeEx)).toEqual('object');
  });
});