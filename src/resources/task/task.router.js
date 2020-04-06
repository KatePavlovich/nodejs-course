const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAllTasks();
  if (tasks) {
    res.send(tasks.map(Task.toResponse));
  }
});

router.route('/:boardId/tasks').get(async (req, res) => {
  const tasks = await tasksService.getAll(req.params.boardId);
  if (tasks) {
    res.send(tasks.map(Task.toResponse));
  }
});

router.route('/').post(async (req, res) => {
  const task = await tasksService.createTask(req.params.boardId, req.body);
  if (task) {
    res.send({ task });
  }
});

router.route('/:id').get(async (req, res) => {
  const task = await tasksService.getTask(req.params.id);
  if (task) {
    res.send(JSON.stringify(task));
  }
});

router.route('/:id').put(async (req, res) => {
  const updatedTask = await tasksService.updateTask(req.params.id, req.body);
  if (updatedTask) {
    res.send(JSON.stringify(updatedTask));
  }
});

router.route('/:id').delete(async (req, res) => {
  const task = await tasksService.deleteTask(req.params.id);
  if (task) {
    res.send('The task has been deleted');
  }
});

module.exports = router;
