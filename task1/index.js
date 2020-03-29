const { pipeline } = require('stream');
const { input_stream } = require('./input_stream');
const { output_stream } = require('./output_stream');
const { transform_stream } = require('./transform_stream');

const runCode = ({ shift, action, input, output }) => {
  pipeline(
    input_stream(input),
    transform_stream({ shift, action }),
    output_stream(output),
    error => {
      if (error) {
        console.error(error);
      } else {
        console.log('done');
      }
    }
  );
};

exports.runCode = runCode;
