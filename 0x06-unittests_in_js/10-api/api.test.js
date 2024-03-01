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

  describe('/cart/:id', () => {
    it('should return status code 200 when :id is a number', (done) => {
      request('http://localhost:7865/cart/123', (_error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 123');
        done();
      });
    });

    it('should return status code 404 when :id is not a number', (done) => {
      request('http://localhost:7865/cart/abc', (_error, response, _body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });


  describe('/available_payments', () => {
    it('should return the correct payment methods object', (done) => {
      request('http://localhost:7865/available_payments', (_error, response, body) => {
        expect(response.statusCode).to.be.equal(200);
        expect(JSON.parse(body)).to.be.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });
        done();
      });
    });
  });

  describe('/login', () => {
    it('should return a welcome message with the username', (done) => {
      const username = 'testUser';
      request.post('http://localhost:7865/login', { json: { userName: username } }, (_error, response, body) => {
        expect(response.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Welcome testUser');
        done();
      });
    });
  });
});
