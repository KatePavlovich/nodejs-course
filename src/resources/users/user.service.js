const tasksService = require('../task/task.service');

const usersRepo = require('./user.db.repository');
const getAll = () => usersRepo.getAll();
const createUser = user => usersRepo.createUser(user);
const getUserById = id => usersRepo.getUserById(id);
const updateUser = (userId, body) => usersRepo.updateUser(userId, body);
const deleteUser = async userId => {
  usersRepo.deleteUser(userId);
  await tasksService.unassignUser(userId);
};

module.exports = { getAll, getUserById, createUser, updateUser, deleteUser };
