const User = require('./user.model');

let users = [
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

const createUser = async ({ name, login, password }) => {
  const newUser = await new User({ name, login, password });
  users.push(newUser);
  return newUser;
};

const getUserById = id => {
  return users.find(userToFind => userToFind.id === id);
};

const updateUser = (id, body) => {
  const index = users.findIndex(user => user.id === id);
  users[index] = { ...users[index], ...body };
  return users[index];
};

const deleteUser = async userId => {
  users = users.filter(user => user.id !== userId);
  return users;
};

module.exports = { getAll, createUser, getUserById, updateUser, deleteUser };
