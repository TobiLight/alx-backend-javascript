import fs from 'fs';

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
 * @returns {Promise<Object>} - A promise that resolves to an object containing
 *                              arrays of first names for each student field, or rejects
 *                              with an error if the file cannot be read.
 * @author - Oluwatobiloba Light
 */
const readDatabase = (filePath) => new Promise((resolve, reject) => {
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
      resolve(studentGroups);
    }
  });
});

export default readDatabase;
module.exports = readDatabase;
