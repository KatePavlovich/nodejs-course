const fs = require('fs');

const output_stream = output => {
  fs.access(output, fs.constants.F_OK | fs.constants.W_OK, err => {
    console.log(`${output} ${err ? 'does not exist' : 'exists'}`);
  });
  return fs.createWriteStream(output, { flags: 'a' });
};

exports.output_stream = output_stream;
