const fs    = require('fs');
const utils = require('./utils.js');
const notes = require('./notes.js');
const chalk = require('chalk')

const sum = utils.add(2,4)
const difference = utils.subtract(3,10);

/*
- Use chalk library
- Use it to print "success" to the console in green
- Test your work

*/

console.log(chalk.green.inverse.bold("Success"));
