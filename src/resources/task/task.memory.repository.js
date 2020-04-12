const Task = require('./task.model');

const tasks = [];

const getAllTasksOnBoard = async boardId => {
  return tasks.filter(task => task.boardId === boardId);
};

const getTaskById = async (boardId, taskId) => {
  const tasksOnBoard = await getAllTasksOnBoard(boardId);
  const task = tasksOnBoard.find(searchTask => searchTask.id === taskId);
  return task;
};

const createTask = async (boardId, body) => {
  const newTask = new Task({
    ...body,
    boardId
  });
  tasks.push(newTask);
  return newTask;
};

const updateTask = async ({ taskId, boardId, taskBody }) => {
  let taskToUpdate = await getTaskById(boardId, taskId);
  taskToUpdate = { ...taskToUpdate, ...taskBody };
  const index = tasks.indexOf(taskToUpdate);
  tasks.splice(index, 1, taskToUpdate);
  return taskToUpdate;
};

const deleteTask = async task => {
  const index = tasks.indexOf(task);
  tasks.splice(index, 1);
};

const deleteTasksById = async id => {
  const tasksById = tasks.filter(task => task.boardId === id);
  tasksById.forEach(task => {
    const index = tasks.findIndex(el => el.id === task.id);
    tasks.splice(index, 1);
  });
};

const unassign = async id => {
  tasks.forEach(task => {
    if (task.userId === id) {
      task.userId = null;
    }
  });
};

module.exports = {
  getAllTasksOnBoard,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  deleteTasksById,
  unassign
};
