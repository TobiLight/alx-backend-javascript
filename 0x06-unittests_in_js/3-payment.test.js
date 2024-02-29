// Author: Oluwatobiloba Light

const { expect } = require('chai');
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require('./utils');
const sinon = require('sinon')

/**
 * @module 3-payment.test
 * @description This module contains test cases for the sendPaymentRequestToApi function.
 */
describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments', () => {
    const apiRequest = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(apiRequest.calculateNumber.calledWith("SUM", 100, 20)).to.be.true;
    expect(apiRequest.calculateNumber.calledOnce).to.be.true;
    apiRequest.calculateNumber.restore();
  })

})