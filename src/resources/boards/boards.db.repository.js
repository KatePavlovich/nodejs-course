const Board = require('./boards.model');

const getAll = async () => {
  return Board.find({});
};

const getBoard = async id => {
  return Board.findById(id);
};

const createBoard = async board => Board.create(board);

const updateBoard = async (id, board) => {
  return Board.updateOne({ _id: id }, board);
};

const deleteBoard = async boardId => {
  return (await Board.deleteOne({ _id: boardId })).deletedCount;
};

module.exports = { getAll, getBoard, createBoard, updateBoard, deleteBoard };
