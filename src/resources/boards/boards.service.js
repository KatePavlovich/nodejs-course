const BoardRepo = require('./boards.memory.repository');

const getAll = () => BoardRepo.getAll();
const createBoard = board => BoardRepo.createBoard(board);
const getBoard = id => BoardRepo.getBoard(id);
const updateBoard = async (id, board) => await BoardRepo.updateBoard(id, board);
const deleteBoard = async id => await BoardRepo.deleteBoard(id);

module.exports = {
  getAll,
  createBoard,
  getBoard,
  updateBoard,
  deleteBoard
};
