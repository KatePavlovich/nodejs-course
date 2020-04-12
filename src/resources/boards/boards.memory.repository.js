const Board = require('./boards.model');

let boards = [];

const getAll = async () => {
  return boards;
};

const createBoard = async board => {
  const createdBoard = new Board(board);
  boards.push(createdBoard);
  return createdBoard;
};

const getBoard = async id => {
  const [board] = await boards.filter(({ id: boardId }) => id === boardId);
  return board;
};

const updateBoard = async (id, board) => {
  const [boardToUpdate] = await boards.filter(
    ({ id: boardId }) => id === boardId
  );
  boardToUpdate.title = board.title;
  boardToUpdate.columns = [...board.columns];
  return boardToUpdate;
};

const deleteBoard = async boardId => {
  boards = boards.filter(board => board.boardId !== boardId);
  console.log('MEMORY', boardId, boards);
};

module.exports = { getAll, createBoard, getBoard, updateBoard, deleteBoard };
