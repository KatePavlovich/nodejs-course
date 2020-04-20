const router = require('express').Router();
const Board = require('./boards.model');
const boardsService = require('./boards.service');

router
  .route('/')
  .get(async (req, res) => {
    const boards = await boardsService.getAll();
    res.json(boards.map(Board.toResponse));
  })
  .post(async (req, res) => {
    const board = await boardsService.createBoard(req.body);
    if (board) {
      res.json(Board.toResponse(board));
    }
  });

router
  .route('/:boardId')
  .get(async (req, res) => {
    const board = await boardsService.getBoard(req.params.boardId);
    if (!board) {
      return res
        .status(404)
        .json({ status: 'error', message: 'Board not found' });
    }
    res.send(Board.toResponse(board));
  })
  .put(async (req, res) => {
    const updatedBoard = await boardsService.updateBoard(
      req.params.boardId,
      req.body
    );
    if (updatedBoard) {
      res.send(Board.toResponse(updatedBoard));
    }
  })
  .delete(async (req, res) => {
    const { boardId } = req.params;
    const board = await boardsService.getBoard(boardId);
    if (!board) {
      res.status(404).send('Board not found');
    } else {
      await boardsService.deleteBoard(boardId);
      res.status(204).send('The board has been deleted');
    }
  });

module.exports = router;
