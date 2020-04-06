const Task = require('./task.model');

const tasks = [
  {
    id: '1',
    title: 'task test title',
    order: 0,
    description: 'task description',
    userId: '1',
    boardId: '1',
    columnId: '1'
  },
  {
    id: '2',
    title: 'task test title2',
    order: 1,
    description: 'sttask descriptionring',
    userId: '2',
    boardId: '1',
    columnId: '1'
  },
  {
    id: '3',
    title: 'task test title3',
    order: 1,
    description: 'sttask descriptionrin33g',
    userId: '2',
    boardId: '2',
    columnId: '1'
  }
];

const getAllTasks = async () => {
  const selectedTasks = await tasks;
  return selectedTasks;
};

const getAll = async id => {
  const selectedTasks = await tasks.filter(({ boardId }) => boardId === id);
  return selectedTasks;
};

const createTask = async (id, task) => {
  const createdTask = new Task(task);
  createdTask.boardId = id;
  createdTask.columnId = '1';

  tasks.push(createdTask);
  return createdTask;
};

const getTask = async id => {
  const [task] = await tasks.filter(({ id: taskId }) => id === taskId);
  return task;
};

const updateTask = async (id, task) => {
  const [taskToUpdate] = await tasks.filter(({ id: taskId }) => id === taskId);
  taskToUpdate.title = task.title;
  taskToUpdate.columns = [...task.columns];
  return taskToUpdate;
};

const deleteTask = async id => {
  return tasks.filter(({ id: taskId }) => id !== taskId);
};

module.exports = {
  getAll,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  getAllTasks
};
