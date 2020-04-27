// const jwt = require('jsonwebtoken');
// const { JWT_SECRET_KEY } = require('./config');
const jwt = require('express-jwt');
const { JWT_SECRET_KEY } = require('./config');

const validateJWT = jwt({ secret: JWT_SECRET_KEY });

// function validateJWT(req, res, next) {
//   const token = req.headers.authorization.replace('Bearer ', '');
//   console.log('TOKEN22', token);
//   if (token) {
//     jwt.verify(token, JWT_SECRET_KEY, err => {
//       if (err) {
//         return res.tatus(403);
//       }
//       next();
//     });
//   }
//   // res.status(401).send('Unauthorized');
// }

module.exports = validateJWT;
