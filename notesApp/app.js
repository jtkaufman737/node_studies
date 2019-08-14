const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes.js');

// customize yargs version
yargs.version('1.1.0')

yargs.command({
  command: 'add',
  describe: 'Adds a new note',
  handler: function() {
    console.log('Adding a new note')
  }
})

yargs.command({
  command: 'remove',
  describe: 'Removes a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true
    }
  },
  handler: function(argv) {
    console.log('Removing note ', argv)
  }
})

yargs.command({
  command: 'list',
  describe: 'Listing all notes',
  handler: function() {
    console.log('Reading all notes')
  }
})

yargs.command({
  command: 'read note',
  describe: 'Reading specific note',
  handler: function() {
    console.log('Reading specific note')
  }
})

console.log(yargs.argv)
