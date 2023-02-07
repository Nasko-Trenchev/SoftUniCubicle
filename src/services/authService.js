const jwt = require('../lib/jsonWebToken');
const User = require('../models/User');
const AppError = require('../utils/appError');

const config = require('../config')


exports.getUserByUsername = (username) => {
    return User.findOne({username})
}

exports.register = (username, password) =>{
    return User.create({username, password});
}

exports.login = async (username, password) =>{

    const user = await this.getUserByUsername(username); 
    if(!user){
        throw new AppError('Invalid username!', {user})
    } 

    const isValid = await user.validatePassword(password)

    if(!isValid){
        throw new AppError('Invalid password!', {user})
    }

    const payload = {_id: user._id, username: user.username}
    const token = await jwt.sign(payload, config.SECRET, {expiresIn: '2h'});
    
    return token;
}