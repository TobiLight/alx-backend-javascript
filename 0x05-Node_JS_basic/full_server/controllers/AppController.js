/**
 * AppController class providing a static method for handling homepage requests.
 *
 * @module AppController
 */
class AppController {
  /**
   * Static method that handles homepage requests.
   *
   * This method responds to requests on the "/" path by sending a 200 status code
   * and the message "Hello Holberton School!".
   *
   * @param {http.IncomingMessage} reques - The HTTP request object.
   * @param {http.ServerResponse} response - The HTTP response object.
   * @returns Text along with a 200 status code.
   */
  static getHomepage(request, response) {
    return response.status(200).send('Hello Holberton School!');
  }
}

module.exports = AppController;
