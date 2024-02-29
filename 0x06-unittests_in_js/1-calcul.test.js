// Authro: Oluwatobiloba Light
const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

/**
 * @module 1-calcul.test
 * @description This module contains test cases for the `calculate` function in `1-calcul.js`.
 */
describe('calculateNumber', () => {
  it('should return the sum of rounded numbers for "SUM"', () => {
    const result = calculateNumber('SUM', 3, 5);
    assert.equal(result, 8);
  });

  it('should return the difference between rounded numbers for "SUBTRACT"', () => {
    const result = calculateNumber('SUBTRACT', 3, 5);
    assert.equal(result, -2);
  });

  it('should return the division between rounded numbers for "DIVIDE"', () => {
    const result = calculateNumber('DIVIDE', 3, 5);
    assert.equal(result, 0.6);
  });

  it('should return Error when division between a rounded number and 0 for "DIVIDE"', () => {
    const result = calculateNumber('DIVIDE', 1.4, 0);
    assert.equal(result, 'Error');
  });
});
