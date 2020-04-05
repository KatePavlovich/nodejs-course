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

module.exports = { getAll };
