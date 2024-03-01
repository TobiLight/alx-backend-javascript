// Author: Oluwatobiloba Light

/**
 * Fetches a payment token from an API (simulated).
 *
 * @param {boolean} success - Indicates whether to simulate a successful API response.
 * @returns {Promise<{data: string}>} A Promise that resolves with a success response object or remains pending for unsuccessful cases.
 */
const getPaymentTokenFromAPI = (success) => new Promise((resolve, reject) => {
	if (success) {
		resolve({ data: 'Successful response from the API' });
	}
});

module.exports = getPaymentTokenFromAPI;