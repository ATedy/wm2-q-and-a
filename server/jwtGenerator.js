var jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtGenerator = (id) => {
  const payload = {
    user: id
  }
  return jwt.sign(payload, process.env.jwtSecret, {expiresIn: 60 *60})
}

module.exports = jwtGenerator;