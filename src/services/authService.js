const jwt = require('../lib/jsonWebToken');
const User = require('../models/User');

const config = require('../config')


exports.getUserByUsername = (username) => {
    return User.findOne({username})
}

exports.register = (username, password) =>{
    return User.create({username, password});
}

exports.login = async (username, password) =>{

    const user = await this.getUserByUsername(username);  

    const isValid = await user.validatePassword(password)

    if(!user || !isValid){

        throw "Invalid username or password";
    }

    const payload = {username: user.username}
    const token = await jwt.sign(user, config.SECRET, {expiresIn: '2h'});
    
    return token;
}