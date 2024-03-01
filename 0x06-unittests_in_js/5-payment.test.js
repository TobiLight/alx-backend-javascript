// Author: Oluwatobiloba Light

const { expect } = require('chai');
const sendPaymentRequestToApi = require("./5-payment");
const Utils = require('./utils');
const sinon = require('sinon')

/**
 * @module 5-payment.test
 * @description This module contains test cases for the sendPaymentRequestToApi function.
 */
describe('sendPaymentRequestToApi', () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should display the correct total for (100, 20) and log only once', () => {
    sendPaymentRequestToApi(100, 20);

    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should display the correct total for (10, 10) and log only once', () => {
    sendPaymentRequestToApi(10, 10);

    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
})