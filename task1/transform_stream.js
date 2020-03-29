const { Transform } = require('stream');
const { cipherStr } = require('./cipherStr');

const transform_stream = ({ shift, action }) => {
  return new Transform({
    transform(chunk, encoding, callback) {
      this.push(cipherStr(chunk.toString(), shift, action));
      callback();
    }
  });
};

exports.transform_stream = transform_stream;
