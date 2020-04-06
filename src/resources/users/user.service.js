const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const createUser = user => usersRepo.createUser(user);
const getUser = id => usersRepo.getUser(id);
const updateUser = (userId, updatedUser) =>
  usersRepo.updateUser(userId, updatedUser);
const deleteUser = async id => {
  const users = await getAll();
  const newUsers = users.filter(user => user.id !== id);
  return newUsers;
};

const removePassword = user => {
  const newUser = { ...user };
  delete newUser.password;
  return newUser;
};

module.exports = {
  getAll,
  createUser,
  removePassword,
  getUser,
  deleteUser,
  updateUser
};
