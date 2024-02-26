/**
 * File: 1-stdin.js
 * Author: Oluwatobiloba Light
 */

const rl = require('readline');

const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askName = () => {
  readline.question('Welcome to Holberton School, what is your name?\n', answer => {
    console.log(`Your name is ${answer}`);
    readline.close();
  });
};

askName();
