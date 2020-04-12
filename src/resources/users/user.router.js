const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router
  .route('/')
  .get(async (req, res) => {
    const users = await usersService.getAll();
    res.json(users.map(User.toResponse));
  })
  .post(async (req, res) => {
    const user = await usersService.createUser(req.body);
    res.json(User.toResponse(user));
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const user = await usersService.getUserById(req.params.id);
    if (user) {
      res.json(User.toResponse(user));
    } else {
      res.status(404).end('User not found');
    }
  })
  .put(async (req, res) => {
    const newUser = await usersService.updateUser(req.params.id, req.body);
    res.json(User.toResponse(newUser));
  })
  .delete(async (req, res) => {
    const user = await usersService.getUserById(req.params.id);
    if (user) {
      await usersService.deleteUser(req.params.id);
      res.status(204).end('the user was deleted');
    } else {
      res.status(404).end('User not found');
    }
  });

module.exports = router;
