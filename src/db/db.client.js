const mongoose = require('mongoose');
const { MONGO_CONNECTION_STRING } = require('../common/config');
const User = require('../resources/users/user.model');

const users = [new User({ name: 'user1', login: 'admin', password: 'admin' })];

const connectToDB = callback => {
  mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('DB connected');
    db.dropDatabase();
    users.forEach(user => user.save());
    callback();
  });
};

module.exports = { connectToDB };
