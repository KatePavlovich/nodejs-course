const BoardRepo = require('./boards.db.repository');
const tasksService = require('../task/task.service');

const getAll = () => BoardRepo.getAll();
const createBoard = board => BoardRepo.createBoard(board);
const getBoard = id => BoardRepo.getBoard(id);
const updateBoard = (id, board) => BoardRepo.updateBoard(id, board);
const deleteBoard = async boardId => {
  BoardRepo.deleteBoard(boardId);
  await tasksService.removeByBoardId(boardId);
};

module.exports = {
  getAll,
  createBoard,
  getBoard,
  updateBoard,
  deleteBoard
};
