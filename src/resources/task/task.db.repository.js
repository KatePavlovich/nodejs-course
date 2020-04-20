const Task = require('./task.model');

const getAllTasksOnBoard = async boardId => {
  return Task.find({ boardId });
};

const getTaskById = async (boardId, taskId) => {
  const task = await Task.findOne({ _id: taskId, boardId }).exec();
  return task;
};

const createTask = async (boardId, body) => {
  const newTask = {
    ...body,
    boardId
  };
  return Task.create(newTask);
};

const updateTask = async ({ taskId, boardId, taskBody }) => {
  return Task.updateOne({ _id: taskId, boardId }, taskBody);
};

const deleteTask = async task => {
  return (await Task.deleteOne({ _id: task.id })).deletedCount;
};

const removeByBoardId = async boardId => {
  return (await Task.deleteMany({ boardId })).deletedCount;
};

const unassignUser = async userId => {
  return (await Task.updateMany({ userId }, { userId: null })).nModified;
};

module.exports = {
  getAllTasksOnBoard,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  removeByBoardId,
  unassignUser
};
