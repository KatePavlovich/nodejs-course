const usersRepo = require('./user.memory.repository');
const getAll = () => usersRepo.getAll();
const createUser = user => usersRepo.createUser(user);
const getUserById = id => usersRepo.getUserById(id);
const updateUser = (userId, body) => usersRepo.updateUser(userId, body);
const deleteUser = async userId => usersRepo.deleteUser(userId);

module.exports = { getAll, getUserById, createUser, updateUser, deleteUser };
