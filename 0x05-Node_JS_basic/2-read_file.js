/**
 * File: 2-read_file.js
 * Author: Oluwatobiloba Light
 */

const fs = require('fs');

/**
 * Counts the number of students and students in each field from a CSV file.
 *
 * This function synchronously reads the provided CSV file and processes the data
 * to count the total number of students and the number of students in each field.
 * It also generates a list of unique values for each field.
 *
 * @param {string} filePath - The path to the CSV file containing student data.
 *
 * @throws {Error} - If the file cannot be read or is empty.
 */
const countStudents = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, { encoding: 'utf-8' });
    const list = data.toString().trim().split('\n');
    const numOfStudents = list.length - 1;

    console.log(`Number of students: ${numOfStudents}`);

    const studentGroups = {};
    const dbFieldNames = list[0].split(',');
    const studentInfo = dbFieldNames.slice(0, dbFieldNames.length - 1);

    for (let i = 1; i < list.length; i++) {
      const studentRecords = list[i].split(',');
      const studentPropVal = studentRecords.slice(0, studentRecords.length - 1);
      const field = studentRecords[studentRecords.length - 1];

      if (!Object.keys(studentGroups).includes(field)) {
        studentGroups[field] = [];
      }

      const entries = studentInfo.map((student, idx) => [student, studentPropVal[idx]]);
      studentGroups[field].push(Object.fromEntries(entries));
    }

    for (const [key, value] of Object.entries(studentGroups)) {
      const names = value.map(student => student.firstname).join(', ');
      console.log(`Number of students in ${key}: ${value.length}. List: ${names}`);
    }
  } catch (err) {
    throw Error('Cannot load the database');
  }
};

module.exports = countStudents;
