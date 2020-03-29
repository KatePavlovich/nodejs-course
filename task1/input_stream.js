const fs = require('fs');

const input_stream = file => {
  fs.access(file, fs.constants.F_OK | fs.constants.W_OK, err => {
    console.log(`${file} ${err ? 'does not exist' : 'exists'}`);
  });
  return fs.createReadStream(file);
};

exports.input_stream = input_stream;
