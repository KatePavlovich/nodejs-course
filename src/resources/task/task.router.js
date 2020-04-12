const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router
  .route('/:boardId/tasks')
  .get(async (req, res) => {
    const tasks = await tasksService.getAllTasksOnBoard(req.params.boardId);
    if (tasks) {
      res.json(tasks.map(Task.toResponse));
    } else {
      res.status(404).end('Tasks not found');
    }
  })
  .post(async (req, res) => {
    const task = await tasksService.createTask(req.params.boardId, req.body);
    if (task) {
      res.json(Task.toResponse(task));
    }
  });

router
  .route('/:boardId/tasks/:taskId')
  .get(async (req, res) => {
    const task = await tasksService.getTaskById(
      req.params.boardId,
      req.params.taskId
    );
    if (task) {
      res.json(Task.toResponse(task));
    } else {
      res.status(404).end('Task not found');
    }
  })
  .put(async (req, res) => {
    const newTask = await tasksService.updateTask({
      taskId: req.params.taskId,
      boardId: req.params.boardId,
      taskBody: req.body
    });
    res.json(Task.toResponse(newTask));
  })
  .delete(async (req, res) => {
    const task = await tasksService.getTaskById(
      req.params.boardId,
      req.params.taskId
    );
    if (task) {
      await tasksService.deleteTask(task);
      res.status(204).end('The task has been deleted');
    } else {
      res.status(404).end('Task not found');
    }
  });

module.exports = router;
