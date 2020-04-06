const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const tasksService = require('../task/task.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const user = await usersService.createUser(req.body);
  res.json(User.toResponse(user));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getUser(req.params.id);
  const userWithoutPassword = usersService.removePassword(user);
  if (user) {
    res.json({ id: userWithoutPassword.id });
  }
});

router.route('/:id').put(async (req, res) => {
  const updateUser = await usersService.updateUser(req.params.id, req.body);
  if (updateUser) {
    res.json(User.toResponse(updateUser));
  }
});

router.route('/:id').delete(async (req, res) => {
  const users = await usersService.deleteUser(req.params.id);
  const tasks = await tasksService.getAllTasks();
  const newTasks = tasks.map(task => {
    if (task.userId === req.params.id) {
      task.userId = null;
    }
    return task;
  });
  newTasks.forEach(task => tasksService.updateTask(task.id, task));
  if (users) {
    res.status(200).send('the user was deleted');
  } else {
    res.status(404).send('User not found');
  }
});

module.exports = router;
