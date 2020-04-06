const Board = require('./boards.model');

const boards = [
  {
    id: '1',
    title: 'string',
    columns: [
      {
        id: 'string',
        title: 'string',
        order: 0
      }
    ]
  },
  {
    id: '2',
    title: 'string1',
    columns: [
      {
        id: 'string2',
        title: 'string2',
        order: 0
      }
    ]
  }
];

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

const deleteBoard = async id => {
  return boards.filter(({ id: boardId }) => id !== boardId);
};

module.exports = { getAll, createBoard, getBoard, updateBoard, deleteBoard };
