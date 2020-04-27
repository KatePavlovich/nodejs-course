const User = require('./user.model');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const getAll = async () => {
  return User.find({});
};

const createUser = async user => {
  const hash = await bcrypt.hash(user.password, saltRounds);
  return User.create({ ...user, password: hash });
};

const getUserById = id => {
  return User.findById(id);
};

const getUserByParam = param => {
  return User.find(param);
};

const updateUser = async (id, body) => {
  return User.updateOne({ _id: id }, body);
};

const deleteUser = async userId => {
  return (await User.deleteOne({ _id: userId })).deletedCount;
};

module.exports = {
  getAll,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getUserByParam
};
