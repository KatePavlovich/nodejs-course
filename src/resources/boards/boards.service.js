const BoardRepo = require('./boards.memory.repository');
const TaskRepo = require('../task/task.memory.repository');

const getAll = () => BoardRepo.getAll();
const createBoard = board => BoardRepo.createBoard(board);
const getBoard = id => BoardRepo.getBoard(id);
const updateBoard = (id, board) => BoardRepo.updateBoard(id, board);
const deleteBoard = boardId => {
  BoardRepo.deleteBoard(boardId);
  TaskRepo.deleteAllTasksByBoardId(boardId);
};

module.exports = {
  getAll,
  createBoard,
  getBoard,
  updateBoard,
  deleteBoard
};
