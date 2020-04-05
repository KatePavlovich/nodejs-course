const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const getUser = async id => {
  const users = await getAll();
  const [userById] = users.filter(user => {
    if (user.id === id) {
      return removePassword(user);
    }
  });
  return userById;
};

const createUser = async ({ name, login }) => {
  const users = await getAll();
  const id = '5';
  return users.push({ id, name, login });
};

const deleteUser = async id => {
  const users = await getAll();
  const newUsers = users.filter(user => user.id !== id);
  return newUsers;
};

const removePassword = user => {
  const newUser = { ...user };
  delete newUser.password;
  return newUser;
};

module.exports = { getAll, removePassword, getUser, deleteUser, createUser };
