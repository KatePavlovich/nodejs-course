const usersRepo = require('../users/user.db.repository');

const getUserByLogin = param => usersRepo.getUserByParam(param);

module.exports = { getUserByLogin };
