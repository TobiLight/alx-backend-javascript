const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return the sum of two numbers', () => {
    const result = calculateNumber(3, 5);
    assert.equal(result, 8);
  });

  it('should return the sum of a number and rounded number', () => {
    const result = calculateNumber(3, 3.5);
    assert.equal(result, 7);
  });

  it('should return the sum of rounded numbers', () => {
    const result = calculateNumber(1.2, 3.7);
    assert.equal(result, 5);
  });

  it('should handle positive and negative decimals', () => {
    const result = calculateNumber(-2.5, 4.2);
    assert.equal(result, 2);
  });

  it('should return 0 for zero inputs', () => {
    const result = calculateNumber(0, 0);
    assert.equal(result, 0);
  });
});
