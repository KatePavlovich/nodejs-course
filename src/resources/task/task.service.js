const tasksRepo = require('./task.memory.repository');

const getAllTasksOnBoard = boardId => tasksRepo.getAllTasksOnBoard(boardId);
// const getAllTasks = () => TaskRepo.getAllTasks();
const createTask = (id, task) => tasksRepo.createTask(id, task);
const getTaskById = (boardId, taskId) => tasksRepo.getTaskById(boardId, taskId);
const updateTask = ({ taskId, boardId, taskBody }) =>
  tasksRepo.updateTask({ taskId, boardId, taskBody });
const deleteTask = async task => tasksRepo.deleteTask(task);

module.exports = {
  getAllTasksOnBoard,
  createTask,
  getTaskById,
  updateTask,
  deleteTask
};
