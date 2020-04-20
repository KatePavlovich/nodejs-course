const tasksRepo = require('./task.db.repository');

const getAllTasksOnBoard = boardId => tasksRepo.getAllTasksOnBoard(boardId);
const createTask = (id, task) => tasksRepo.createTask(id, task);
const getTaskById = (boardId, taskId) => tasksRepo.getTaskById(boardId, taskId);
const updateTask = ({ taskId, boardId, taskBody }) =>
  tasksRepo.updateTask({ taskId, boardId, taskBody });
const deleteTask = task => tasksRepo.deleteTask(task);
const removeByBoardId = boardId => tasksRepo.removeByBoardId(boardId);
const unassignUser = userId => tasksRepo.unassignUser(userId);

module.exports = {
  getAllTasksOnBoard,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
  removeByBoardId,
  unassignUser
};
