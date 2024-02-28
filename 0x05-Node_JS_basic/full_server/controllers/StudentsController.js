import readDatabase from '../utils';

/**
 * StudentsController class providing methods for handling student data requests.
 *
 * @module StudentsController
 */

class StudentsController {
  /**
   * Static method that handles requests to retrieve all student data.
   * Reads student data from the database, formats it, and returns it in the response.
   * @param { http.IncomingMessage } request - The HTTP request object.
   * @param { http.ServerResponse } response - The HTTP response object.
   * @returns { Promise < void>} - A promise that resolves when the response
   * is sent, or rejects with an error.
   */
  static async getAllStudents(request, response) {
    try {
      const filePath = process.argv.length > 2 ? process.argv[2] : '';
      const data = await readDatabase(filePath);
      const ret = [];
      const sortStudents = (a, b) => {
        if (a[0].toLowerCase() < b[0].toLowerCase()) {
          return -1;
        }
        if (a[0].toLowerCase() > b[0].toLowerCase()) {
          return 1;
        }
        return 0;
      };

      ret.push('This is the list of our students');
      for (const [field, students] of Object.entries(data).sort(sortStudents)) {
        ret.push([
          `Number of students in ${field}: ${students.length}.`,
          `List: ${students.map((student) => student.firstname).join(', ')}`,
        ].join(' '));
      }
      return response.status(200).send(ret.join('\n'));
    } catch (err) {
      return response.status(500).send(err.message);
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const MAJORS = ['CS', 'SWE'];

    try {
      const { major } = request.params;
      if (!MAJORS.includes(major)) {
        throw new Error('Major parameter must be CS or SWE');
      }

      const filePath = process.argv.length > 2 ? process.argv[2] : '';
      const data = await readDatabase(filePath);
      const names = Object.values(data[major]).map((student) => student.firstname).join(', ');
      return response.status(200).send(`List: ${names}`);
    } catch (err) {
      return response.status(500).send(err.message);
    }
  }
}

export default StudentsController;
module.exports = StudentsController;
