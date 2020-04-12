const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAllTasks();
  if (tasks) {
    res.send(tasks.map(Task.toResponse));
  }
});

router
  .route('/:boardId/tasks')
  .get(async (req, res) => {
    const tasks = await tasksService.getAll(req.params.boardId);
    if (tasks) {
      res.send(tasks.map(Task.toResponse));
    }
  })
  .post(async (req, res) => {
    const task = await tasksService.createTask(req.params.boardId, req.body);
    if (task) {
      res.send({ task });
    }
  });

router
  .route('/:boardId/tasks/:id')
  .get(async (req, res) => {
    console.log('TASSSS', req.params);
    const task = await tasksService.getTask(req.params.boardId, req.params.id);
    console.log('TASSSS2222', task);

    if (task) {
      res.send(Task.toResponse(task));
    }
  })
  .put(async (req, res) => {
    const updatedTask = await tasksService.updateTask({
      boardId: req.params.boardId,
      id: req.params.id,
      task: req.body
    });
    if (updatedTask) {
      res.send(Task.toResponse(updatedTask));
    }
  })
  .delete(async (req, res) => {
    const task = await tasksService.deleteTask({
      boardId: req.params.boardId,
      id: req.params.id
    });
    if (task) {
      res.send('The task has been deleted');
    }
  });

module.exports = router;
