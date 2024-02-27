/**
 * File: 1-stdin.js
 * Author: Oluwatobiloba Light
 */

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const answer = process.stdin.read();
  if (answer) {
    process.stdout.write(`Your name is: ${answer}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
