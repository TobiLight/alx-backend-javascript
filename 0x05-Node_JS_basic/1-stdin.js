/**
 * File: 1-stdin.js
 * Author: Oluwatobiloba Light
 */

const rl = require('readline')

const readline = rl.createInterface({
	input: process.stdin,
	output: process.stdout
})

const displayWelcoeMessage = () => {
	return 'Welcome to Holberton School, what is your name?\n'
}

const askName = () => {
	readline.question(displayWelcoeMessage(), answer => {
		console.log(`Your name is ${answer}`)
		endProgram()
	})
}

const endProgram = () => {
	console.log('This important software is now closing')
	readline.close()
}

askName()