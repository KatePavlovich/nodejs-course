const router = require('express').Router();
const authService = require('./authentication.service');
const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../../common/config');

router.route('/').post(async (req, res) => {
  const { login } = req.body;
  const user = await authService.getUserByLogin({ login });

  if (!user) {
    res.status(403).send({ message: 'Forbidden' });
  } else {
    const token = await jwt.sign({ id: user.id, login }, JWT_SECRET_KEY);
    res.json({ token });
  }
});

module.exports = router;
