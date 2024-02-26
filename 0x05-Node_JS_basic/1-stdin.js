process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', answer => {
  process.stdout.write(`Your name is: ${answer}`);
});

process.stdin.on('close', () => {
  process.stdout.write('This important software is now closing\n');
});
