const mongoose = require('mongoose');
const { MONGO_CONNECTION_STRING } = require('../common/config');
const User = require('../resources/users/user.model');

const users = [
  new User({ name: 'test1', login: 'admin', password: '123' }),
  new User({ name: 'test2', login: 'admin2', password: '122' })
];

const connectToDB = callback => {
  mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('DB connected');
    // db.dropDatabase();
    users.forEach(user => user.save());
    callback();
  });
};

module.exports = { connectToDB };
