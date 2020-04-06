const User = require('./user.model');

const users = [
  {
    id: '1',
    name: 'string',
    login: 'string',
    password: '123'
  },
  {
    id: '2',
    name: 'string2',
    login: 'string2',
    password: '1232'
  }
];

const getAll = async () => {
  return users;
};

const createUser = async user => {
  const newUser = await new User({
    name: user.name,
    login: user.login,
    password: user.password
  });
  users.push(newUser);
  return newUser;
};

const getUser = async id => {
  const [userById] = await users.filter(user => user.id === id);
  return userById;
};

const updateUser = async (userId, updatedUser) => {
  const [userToUpdate] = await users.filter(({ id }) => id === userId);
  userToUpdate.name = updatedUser.name;
  userToUpdate.login = updatedUser.login;
  userToUpdate.password = updatedUser.password;
  return userToUpdate;
};

module.exports = { getAll, createUser, getUser, updateUser };
