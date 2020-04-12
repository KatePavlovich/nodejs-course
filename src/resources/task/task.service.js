const TaskRepo = require('./task.memory.repository');

const getAll = id => TaskRepo.getAll(id);
const getAllTasks = () => TaskRepo.getAllTasks();
const createTask = (id, task) => TaskRepo.createTask(id, task);
const getTask = (boardId, id) => TaskRepo.getTask(boardId, id);
const updateTask = ({ id, boardId, task }) =>
  TaskRepo.updateTask({ id, boardId, task });
const deleteTask = ({ id, boardId }) => TaskRepo.deleteTask({ id, boardId });

module.exports = {
  getAll,
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
};
