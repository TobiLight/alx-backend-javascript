// Author: Oluwatobiloba Light
const { expect } = require('chai');
const request = require('request');

describe('API endpoints', () => {
  describe('/', () => {
    it('should return status code 200', (done) => {
      request('http://localhost:7865/', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return the message "Welcome to the payment system"', (done) => {
      request('http://localhost:7865/', (error, response, body) => {
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
});
