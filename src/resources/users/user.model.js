const mongoose = require('mongoose');
const uuid = require('uuid');

const userSchema = new mongoose.Schema(
  {
    name: String,
    _id: {
      type: String,
      default: uuid
    },
    login: String,
    password: String
  },
  { versionKey: false }
);

userSchema.statics.toResponse = user => {
  const { id, name, login } = user;
  return { id, name, login };
};

const User = mongoose.model('User', userSchema);

module.exports = User;
