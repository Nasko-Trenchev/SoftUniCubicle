const util = require('util')
const jwtCallback = require("jsonwebtoken");

const jwt = {
   sign: util.prmisify(jwtCallback.sign),
   verify: util.promisify(jwtCallback.verify)
}

module.exports = jwt;