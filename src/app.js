const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const boardsRouter = require('./resources/boards/boards.router');
const taskRouter = require('./resources/task/task.router');
const authentificationRouter = require('./resources/authentication/authentication.router');
const validateJWT = require('./common/validateJWT');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use(validateJWT.unless({ path: ['/doc', '/', '/login'] }));

app.use('/login', authentificationRouter);
app.use('/users', userRouter);
app.use('/boards', boardsRouter);
app.use('/boards', taskRouter);

app.use('*', (req, res) => res.send('Not found'));

module.exports = app;
