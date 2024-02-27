const http = require('http');
const fs = require('fs');

/**
 * Counts the number of students and students in each field from a CSV file.
 *
 * This function asynchronously reads the provided CSV file and processes the data
 * to count the total number of students and the number of students in each field.
 * It also generates a list of unique values for each field.
 *
 * @param {string} filePath - The path to the CSV file containing student data.
 *
 * @throws {Error} - If the file cannot be read or is empty.
 * @author - Oluwatobiloba Light
 */
const countStudents = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const list = data.toString('utf-8').trim().split('\n');

      const studentGroups = {};
      const dbFieldNames = list[0].split(',');
      const studentInfo = dbFieldNames.slice(0, dbFieldNames.length - 1);

      for (const info of list.slice(1)) {
        const studentRecords = info.split(',');
        const studentPropVal = studentRecords.slice(0, studentRecords.length - 1);
        const field = studentRecords[studentRecords.length - 1];

        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }

        const entries = studentInfo.map((student, idx) => [student, studentPropVal[idx]]);
        studentGroups[field].push(Object.fromEntries(entries));
      }

      const totalStudents = list.length - 1;

      const ret = [];

      ret.push(`Number of students: ${totalStudents}`);

      for (const [key, value] of Object.entries(studentGroups)) {
        const names = value.map((student) => student.firstname).join(', ');
        ret.push([
          `Number of students in ${key}: ${value.length}.`,
          `List: ${names}`,
        ].join(' '));
      }
      resolve(ret.join('\n'));
    }
  });
});

/**
 * HTTP server responding to different URLs with plain text content.
 *
 * This server listens on port 1245 and provides different responses depending
 * on the requested URL path:
 *
 * - For path `/`: Responds with "Hello Holberton School!".
 * - For path `/students`:
 *   - Reads the student data from a file specified in the `data` query parameter.
 *   - If successful, returns the read student data. Otherwise, returns an error message.
 * - For any other path: Responds with "Not found".
 *
 * @module 5-http
 */
const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  }

  if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    try {
      const data = await countStudents(process.argv[2]);
      res.end(`The is the list of our students\n${data}`);
    } catch (err) {
      console.log(err);
    }
  }
});

app.listen(1245);

module.exports = app;
