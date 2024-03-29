// Author: Oluwatobiloba Light

const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

/**
 * @module 6-payment_token.test
 * @description This module contains test cases for the getPaymentTokenFromAPI function.
 */
describe('getPaymentTokenFromAPI', () => {
	it('should return a successful response when success is true', (done) => {
		getPaymentTokenFromAPI(true)
			.then((response) => {
				expect(response).to.deep.equal({ data: 'Successful response from the API' });
				done();
			})
	});
});