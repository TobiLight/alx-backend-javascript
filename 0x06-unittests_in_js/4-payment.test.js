// Author: Oluwatobiloba Light

const { expect } = require('chai');
const sendPaymentRequestToApi = require("./4-payment");
const Utils = require('./utils');
const sinon = require('sinon')

/**
 * @module 4-payment.test
 * @description This module contains test cases for the sendPaymentRequestToApi function.
 */
describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments', () => {
    const consoleSpy = sinon.spy(console);
    const apiStub = sinon.stub(Utils);

    apiStub.calculateNumber.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(apiStub.calculateNumber.calledWith("SUM", 100, 20)).to.be.true;
    expect(apiStub.calculateNumber.calledOnce).to.be.true;
    expect(apiStub.calculateNumber.callCount).to.be.equal(1);

    expect(consoleSpy.log.calledWith('The total is: 10')).to.be.true;
    expect(consoleSpy.log.calledOnce).to.be.true;
    expect(consoleSpy.log.callCount).to.be.equal(1);

    apiStub.calculateNumber.restore();
    consoleSpy.log.restore();
  })

})