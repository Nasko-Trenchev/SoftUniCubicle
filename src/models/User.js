const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userShema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        minLenght: 5,
        unique: true,
        validate: ///^[a-zA-Z0-9]+$/
        {
            validator: function(value){
                return /^[a-zA-Z0-9]+$/.test(value);
            },
            message: 'Username should consists only of latin letters and digits!'
        }
    },
    password: {
        type: String,   
        minLenght: [8, 'Password is too short!']
    }
    
})

userShema.pre('save', function(next){
    bcrypt.hash(this.password, 10)
    .then(hash => {
        this.password = hash;
        next();
    })
})

userShema.method('validatePassword', function(password){

   return bcrypt.compare(password, this.password);

})
const User = mongoose.model("User", userShema);

module.exports = User;