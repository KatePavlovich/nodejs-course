const User = require('./user.model');
const getAll = async () => {
  return User.find({});
};

const createUser = async user => {
  return User.create(user);
};

const getUserById = id => {
  return User.findById(id);
};

const updateUser = async (id, body) => {
  return User.updateOne({ _id: id }, body);
};

const deleteUser = async userId => {
  return (await User.deleteOne({ _id: userId })).deletedCount;
};

module.exports = { getAll, createUser, getUserById, updateUser, deleteUser };
