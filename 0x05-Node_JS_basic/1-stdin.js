/**
 * File: 1-stdin.js
 * Author: Oluwatobiloba Light
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// console.log("Welcome to Holberton School, what is your name?\n");

rl.question('Welcome to Holberton School, what is your name?\n', answer => {
  console.log(`Your name is: ${answer}`);
  console.log('This important software is now closing');
  rl.close();
});
