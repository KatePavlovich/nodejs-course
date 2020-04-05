const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getUser(req.params.id);
  const userWithoutPassword = usersService.removePassword(user);

  res.json({ id: userWithoutPassword.id });
  // res.json({ userWithoutPassword });
});

router.route('/').post(async (req, res) => {
  // const user = await usersService.getUser(req.params.id);
  //  res.json(usersService.removePassword(user).map(User.toResponse));
  res.json(usersService.createUser(req.body));
});

router.route('/:id').delete(async (req, res) => {
  const user = await usersService.deleteUser(req.params.id);
  res.json({ id: user.id });
});

module.exports = router;
