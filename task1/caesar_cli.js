const { program } = require('commander');
const { runCode } = require('./index');

program
  .requiredOption('-s, --shift [value]', 'a shift')
  .option('-i, --input [value]', 'an input file')
  .option('-o, --output [value]', 'an output file')
  .requiredOption('-a, --action [value]', 'an action encode/decode')
  .action(function(args) {
    runCode(args);
  });

program.parse(process.argv);
