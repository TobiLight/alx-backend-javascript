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
    const list = data.split('\n');
    const lines = list.filter(line => line.trim());
    const numOfStudents = lines.length - 1; // excluding the header

    console.log(`Number of students: ${numOfStudents}`);

    const fields = {};
    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {
      const field = lines[i].split(',');
      for (let j = 0; j < headers.length; j++) {
        if (j === 3) {
          if (!fields(field[j])) {
            fields[field[j]] = {
              count: 1, names: [field[0]]
            };
		  } else {
			  fields[field[j]].count++;
			  fields[field[j]].names.push(field[0]);
          }
        }
      }
    }

    for (const field in fields) {
      console.log(`Number of students in ${field}: ${fields[field].count}. List: ${fields[field].names.join(', ')}`);
    }
  } catch (err) {
    throw Error('Cannot load the database');
  }
};

module.exports = countStudents;
