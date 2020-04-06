const router = require('express').Router();
const Board = require('./boards.model');
const boardsService = require('./boards.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards.map(Board.toResponse));
});

router.route('/').post(async (req, res) => {
  const board = await boardsService.createBoard(req.body);
  res.json(Board.toResponse(board));
});

router.route('/:id').get(async (req, res) => {
  const board = await boardsService.getBoard(req.params.id);
  if (board) {
    res.send(JSON.stringify(board));
  }
});

router.route('/:id').put(async (req, res) => {
  const updatedBoard = await boardsService.updateBoard(req.params.id, req.body);
  if (updatedBoard) {
    res.send(JSON.stringify(updatedBoard));
  }
});

router.route('/:id').delete(async (req, res) => {
  const board = await boardsService.deleteBoard(req.params.id);
  if (board) {
    res.send('The board has been deleted');
  }
});

module.exports = router;
