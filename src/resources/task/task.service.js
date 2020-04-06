const TaskRepo = require('./task.memory.repository');

const getAll = id => TaskRepo.getAll(id);
const getAllTasks = () => TaskRepo.getAllTasks();
const createTask = (id, task) => TaskRepo.createTask(id, task);
const getTask = id => TaskRepo.getTask(id);
const updateTask = (id, task) => TaskRepo.updateTask(id, task);
const deleteTask = id => TaskRepo.deleteTask(id);

module.exports = {
  getAll,
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
};
