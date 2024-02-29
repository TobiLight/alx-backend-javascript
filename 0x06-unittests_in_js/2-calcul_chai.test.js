// Authro: Oluwatobiloba Light
// import { expect } from 'chai'
// import { calculateNumber } from './2-calcul_chai.js';
const { expect } = require('chai');
const calculateNumber = require("./2-calcul_chai");

/**
 * @module 2-calcul_chai.test
 * @description This module contains test cases for the `calculate` function in `2-calcul_chai.js`.
 */
describe('calculateNumber', () => {
  describe("type === SUM", () => {
    it('should return the sum of rounded numbers for "SUM"', () => {
      const result = calculateNumber('SUM', 3, 5);
      expect(result).to.equal(8);
    });
  })

  describe("type === SUBTRACT", () => {
    it('should return the difference between rounded numbers for "SUBTRACT"', () => {
      const result = calculateNumber('SUBTRACT', 3, 5);
      expect(result).to.equal(-2);
    });
  })

  describe("type === DIVIDE", () => {
    it('should return the division between rounded numbers for "DIVIDE"', () => {
      const result = calculateNumber('DIVIDE', 3, 5);
      expect(result).to.equal(0.6);
    });

    it('should return Error when division between a rounded number and 0 for "DIVIDE"', () => {
      const result = calculateNumber('DIVIDE', 1.4, 0);
      expect(result).to.equal('Error');
      expect(result).to.be.a('string');
    });
  })

  describe("type === MULTIPLY", () => {
    it('should return 0 for "MULTIPLY"', () => {
      const result = calculateNumber('MULTIPLY', 1.4, 0);
      expect(result).to.equal(0);
    });
  })
});
