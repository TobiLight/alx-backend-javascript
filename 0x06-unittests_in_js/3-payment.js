// Author: Oluwatobiloba Light

const Utils = require("./utils")
/**
 * @module 3-payment
 * @description This module provides a function for sending a payment request to an API and displaying the total amount.
 */

/**
 * @typedef {Object} PaymentDetails
 * @property {number} totalAmount - The total amount of the purchase.
 * @property {number} totalShipping - The total shipping cost.
 * @returns {void}
 */
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const sum = Utils.calculateNumber("SUM", totalAmount, totalShipping);
  console.log(`The total is: ${sum}`);
}


module.exports = sendPaymentRequestToApi;