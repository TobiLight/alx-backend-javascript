const express = require('express');
const fs = require('fs');

const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

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
      const list = data.toString().trim().split('\n');

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
 * HTTP server using Express responding to different URLs with plain text.
 *
 * This server listens on port 1245 and provides different responses depending
 * on the requested URL path:
 *
 * - For path `/`: Responds with "Hello Holberton School!".
 * - For path `/students`:
 *   - Reads the student data from a file specified in the `data` query parameter.
 *   - If successful, returns the student data prefixed with "This is the list of our students".
 *   - Otherwise, returns an error message with a status code of 500.
 *
 * @module 7-http_express
 */
const app = express();

// Set plain text content type for all responses
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/plain');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const data = await countStudents(DB_FILE);
    res.send(`This is the list of our students\n${data}`);
  } catch (err) {
    res.status(404).send(`This is the list of our students\n${err.message}`);
  }
});

app.listen(1245);

module.exports = app;
