let tasks = [];

// const getAllTasks = async () => {
//   return tasks;
// };

const getAll = async id => {
  const selectedTasks = await tasks.filter(task => task.boardId === id);
  if (selectedTasks) {
    return selectedTasks;
  }
};

const createTask = async (id, task) => {
  const createdTask = { ...task, boardId: id };
  tasks.push(createdTask);
  return createdTask;
};

const getTask = async (boardId, id) => {
  const [searchedTask] = await tasks.filter(
    task => task.id === id && task.boardId === boardId
  );
  return searchedTask;
};

const updateTask = async ({ id, boardId, task }) => {
  tasks = tasks.map(taskToUpdate => {
    if (taskToUpdate.id === id && taskToUpdate.boardId === boardId) {
      return { ...taskToUpdate, ...task };
    }
    return taskToUpdate;
  });
};

const deleteTask = async ({ id, boardId }) => {
  tasks = tasks.filter(task => id !== task.id && boardId !== task.boardId);
};

const deleteAllTasksByBoardId = async boardId => {
  console.log('TASK MEM', boardId);
  tasks = tasks.filter(task => task.boardId !== boardId);
};

module.exports = {
  getAll,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  deleteAllTasksByBoardId
};
